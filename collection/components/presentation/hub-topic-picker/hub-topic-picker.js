import { Component, Event, Host, h, Prop, State, Watch } from '@stencil/core';
export class HubTopicPicker {
  constructor() {
    /**
     * Array of topics to be displayed
     */
    this.topicsAvailable = ['education', 'health', 'recreation', 'transportation'];
    /**
     * Array of topics that are current selected
     */
    this.topicsSelected = []; // 'education', 'transportation'
    /**
     * Option to allow for selected & de-selecting topics
     */
    this.allowSelection = true;
  }
  componentWillLoad() {
    console.log("hub-topic-picker: this.allowSelection", this.allowSelection);
    if (!!this.values) {
      console.log("hub-topic-picker: componentWillLoad: values", this.values);
      this.topicsSelected = this.values.split(",");
    }
    if (!!this.options) {
      console.log("hub-topic-picker: componentWillLoad: options", this.options);
      this.topicsAvailable = this.options.split(",");
    }
    console.log('hub-topic-picker: componentWillLoad', this.topicsAvailable, this.values);
    this.updateTopics();
  }
  updateTopics() {
    this.topicsState = [];
    this.topicsAvailable.forEach(element => {
      this.topicsState.push({
        name: element,
        selected: this.topicsSelected.includes(element)
      });
    });
    // Send event that topics changed
    this.topicsChanged.emit(this.topicsState);
    this.editorUpdated.emit(this.topicsSelected);
  }
  onTopicSelected(selectedName, selectedState) {
    // If selection isn't allowed, block events
    if (!this.allowSelection) {
      return false;
    }
    this.topicSelected.emit({ name: selectedName, selected: selectedState });
    if (selectedState) {
      this.topicsSelected = [...this.topicsSelected, selectedName];
    }
    else {
      this.topicsSelected = this.topicsSelected.filter((topic) => { return (topic !== selectedName); });
    }
  }
  render() {
    return (h(Host, null,
      h("slot", null),
      this.topicsState.map((topic) => h("calcite-chip", { class: this.allowSelection ? "topic-selectable" : "", onClick: (_ref) => this.onTopicSelected(topic.name, !topic.selected), value: topic.name, appearance: topic.selected ? 'solid' : 'clear', dismissible: this.allowSelection && topic.selected }, topic.name))));
  }
  static get is() { return "hub-topic-picker"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-topic-picker.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-topic-picker.css"]
  }; }
  static get properties() { return {
    "topicsAvailable": {
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
        "text": "Array of topics to be displayed"
      },
      "defaultValue": "['education', 'health', 'recreation', 'transportation']"
    },
    "values": {
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
        "text": ""
      },
      "attribute": "values",
      "reflect": false
    },
    "options": {
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
        "text": ""
      },
      "attribute": "options",
      "reflect": false
    },
    "topicsSelected": {
      "type": "unknown",
      "mutable": true,
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
        "text": "Array of topics that are current selected"
      },
      "defaultValue": "[]"
    },
    "allowSelection": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Option to allow for selected & de-selecting topics"
      },
      "attribute": "allow-selection",
      "reflect": false,
      "defaultValue": "true"
    }
  }; }
  static get states() { return {
    "topicsState": {}
  }; }
  static get events() { return [{
      "method": "topicSelected",
      "name": "topicSelected",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event sent when a topic is selected or deselected"
      },
      "complexType": {
        "original": "ITopic",
        "resolved": "ITopic",
        "references": {
          "ITopic": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "topicsChanged",
      "name": "topicsChanged",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event sent after any or all topics updated"
      },
      "complexType": {
        "original": "Array<ITopic>",
        "resolved": "ITopic[]",
        "references": {
          "Array": {
            "location": "global"
          },
          "ITopic": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "editorUpdated",
      "name": "editorUpdated",
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
  static get watchers() { return [{
      "propName": "topicsSelected",
      "methodName": "updateTopics"
    }]; }
}
