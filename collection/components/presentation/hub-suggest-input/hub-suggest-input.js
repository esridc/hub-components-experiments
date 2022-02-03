import { Element, Listen, Component, Prop, State, Event, h, Watch } from '@stencil/core';
import Fuse from 'fuse.js';
import { sendTelemetry } from '../../../utils/telemetry-utils';
export class HubSuggestInput {
  constructor() {
    /** Default search */
    this.query = "";
    /** Value for input placeholder */
    this.placeholder = "What are you looking for?";
    /** Value for submit button */
    this.submit = "Start Search";
    /** Values that the auto-complete textbox should search for */
    this.suggestions = ['Apple', 'Avocado', 'Aardvark', 'Banana', 'Coconut', 'Cucumber', 'Mango'];
    this.inputQuery = '';
    this.suggestionArr = [];
    this.findMatch = (searchTerm) => {
      if (searchTerm.length === 0) {
        return [];
      }
      let indexResults = this.fuseIndex.search(searchTerm);
      console.log("findMatch", [indexResults]);
      return indexResults.map((r) => { return r.item.name; }).slice(0, 9);
    };
    this.onSelect = (selection) => {
      this.inputQuery = selection;
      this.selectedSuggestionIndex = undefined;
      this.showSuggestions = false;
      this.querySelect.emit(this.inputQuery);
    };
    this.onFocus = () => {
      this.showSuggestions = true;
      this.selectedSuggestionIndex = undefined;
      this.suggestionArr = this.findMatch(this.inputQuery);
    };
    this.onKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          if (this.suggestionArr.length > 0) {
            this.selectedSuggestionIndex =
              (this.selectedSuggestionIndex === undefined || this.selectedSuggestionIndex === 0) ?
                this.suggestionArr.length - 1 : this.selectedSuggestionIndex - 1;
          }
          break;
        case 'ArrowDown':
          if (this.suggestionArr.length > 0) {
            this.selectedSuggestionIndex =
              (this.selectedSuggestionIndex === undefined || this.selectedSuggestionIndex === this.suggestionArr.length - 1) ?
                0 : this.selectedSuggestionIndex + 1;
          }
          break;
        default:
          break;
      }
    };
    this.onKeyPress = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (this.selectedSuggestionIndex !== undefined) {
          this.onSelect(this.suggestionArr[this.selectedSuggestionIndex]);
        }
        else {
          // User <enter> on form <input>
          this.onSelect(this.inputQuery);
        }
      }
    };
    this.getSuggestionElement = (suggestion) => {
      const isSelected = this.selectedSuggestionIndex !== undefined
        && suggestion === this.suggestionArr[this.selectedSuggestionIndex];
      return (h("li", { class: 'hub-suggestions-li ' + (isSelected ? 'hub-suggestions-selected' : ''), onClick: () => this.onSelect(suggestion) }, suggestion));
    };
  }
  componentWillLoad() {
    this.inputQuery = this.query;
    this.buildIndex(this.suggestions);
    sendTelemetry({
      category: 'hub-component',
      action: 'hub-suggest-input:loaded',
      label: this.submit
    });
  }
  buildIndex(suggestions) {
    var options = {
      keys: [{
          name: 'name',
          weight: 0.9
        }]
    };
    console.debug("Suggest Input buildIndex", suggestions);
    let db = suggestions.map((s) => { return { "name": s }; });
    this.fuseIndex = new Fuse(db, options);
  }
  suggestionsDidChangeHandler(newSuggestions) {
    console.debug("Suggest Input suggestionsDidChangeHandler", newSuggestions);
    this.buildIndex(newSuggestions);
    this.suggestionArr = this.findMatch(this.inputQuery);
    this.showSuggestions = true;
  }
  handleWindowClick(e) {
    if (!this.element.contains(e.target)) {
      this.showSuggestions = false;
      this.selectedSuggestionIndex = undefined;
    }
    sendTelemetry({
      category: 'hub-component',
      action: 'hub-suggest-input:click',
      label: this.submit
    });
    sendTelemetry({
      category: 'hub-component',
      action: 'hub-suggest-input:query',
      label: this.query
    });
  }
  onInput(e) {
    this.inputQuery = e.target.value;
    this.queryInput.emit(this.inputQuery);
    this.onFocus();
    return 'true';
  }
  onSubmit(e) {
    e.preventDefault();
    this.query = this.inputQuery;
    this.onSelect(this.query);
  }
  render() {
    return (h("div", { class: 'hub-suggestions-div' },
      h("slot", { name: "before-input" }),
      h("input", { class: 'hub-suggestions-input', type: 'text', placeholder: this.placeholder, value: this.inputQuery, onInput: e => this.onInput(e), onFocus: () => this.onFocus(), onKeyDown: e => this.onKeyDown(e), onKeyPress: e => this.onKeyPress(e), onSubmit: (e) => this.onSubmit(e) }),
      h("ul", { class: 'hub-suggestions-ul', role: 'listbox', hidden: !this.showSuggestions }, this.suggestionArr.map(suggestion => this.getSuggestionElement(suggestion))),
      h("calcite-button", { onClick: (e) => { this.onSubmit(e); } }, this.submit)));
  }
  static get is() { return "hub-suggest-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-suggest-input.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-suggest-input.css"]
  }; }
  static get properties() { return {
    "query": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Default search"
      },
      "attribute": "query",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "extent": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Geographic extent limit for geocoding"
      },
      "attribute": "extent",
      "reflect": true
    },
    "placeholder": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Value for input placeholder"
      },
      "attribute": "placeholder",
      "reflect": false,
      "defaultValue": "\"What are you looking for?\""
    },
    "submit": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Value for submit button"
      },
      "attribute": "submit",
      "reflect": false,
      "defaultValue": "\"Start Search\""
    },
    "suggestions": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<string>",
        "resolved": "string[]",
        "references": {
          "Array": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Values that the auto-complete textbox should search for"
      },
      "defaultValue": "['Apple', 'Avocado', 'Aardvark', 'Banana', 'Coconut', 'Cucumber', 'Mango']"
    }
  }; }
  static get states() { return {
    "inputQuery": {},
    "showSuggestions": {},
    "suggestionArr": {},
    "selectedSuggestionIndex": {},
    "fuseIndex": {}
  }; }
  static get events() { return [{
      "method": "querySelect",
      "name": "querySelect",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emits the query of the input result"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "queryInput",
      "name": "queryInput",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "element"; }
  static get watchers() { return [{
      "propName": "suggestions",
      "methodName": "suggestionsDidChangeHandler"
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleWindowClick",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
