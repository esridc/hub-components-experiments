import { Element, Listen, Component, Prop, State, Event, EventEmitter, h, Watch } from '@stencil/core';
import Fuse from 'fuse.js'
import { sendTelemetry } from '../../utils/telemetry-utils';

@Component({
  tag: 'hub-suggest-input',
  styleUrl: 'hub-suggest-input.css',
  shadow: true
})
export class HubSuggestInput {

  @Element() element: HTMLElement;

  /** Default search */
  @Prop({ mutable: true }) query: string = "";

  /** Geographic extent limit for geocoding */
  @Prop({ reflect: true }) extent: any;

  /** Value for input placeholder */
  @Prop() placeholder: string = "What are you looking for?";

  /** Value for submit button */
  @Prop() submit: string = "Start Search";

  /** Values that the auto-complete textbox should search for */
  @Prop() suggestions: Array<string> = ['Apple', 'Avocado', 'Aardvark', 'Banana', 'Coconut', 'Cucumber', 'Mango'];

  /** Emits the query of the input result */
  @Event() querySelect: EventEmitter;
  @Event() queryInput: EventEmitter;

  @State() inputQuery: string = '';
  @State() showSuggestions: boolean;
  @State() suggestionArr: string[] = [];
  @State() selectedSuggestionIndex: number;
  
  @State() fuseIndex;

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
    console.debug("Suggest Input buildIndex", suggestions)
    let db = suggestions.map((s) => {return {"name": s}})
    this.fuseIndex = new Fuse(db, options)
  }

  @Watch('suggestions')
  suggestionsDidChangeHandler( newSuggestions:Array<string> ) : void {
    console.debug("Suggest Input suggestionsDidChangeHandler", newSuggestions)
    this.buildIndex(newSuggestions);
    this.suggestionArr = this.findMatch(this.inputQuery);
    this.showSuggestions = true;
  }

  @Listen('click', { target: 'window' })
  handleWindowClick(e: Event) : void {
    if (!this.element.contains((e.target as HTMLElement))) {
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

  findMatch = (searchTerm: string): string[] => {
    if (searchTerm.length === 0) {
      return [];
    }
    let indexResults = this.fuseIndex.search(searchTerm);
    console.log("findMatch", [indexResults])
    
    return indexResults.map((r) => {return r.item.name}).slice(0,9);
  };

  onInput(e): string {
    this.inputQuery = e.target.value;
    this.queryInput.emit(this.inputQuery);
    this.onFocus();
    return 'true';
  }

  onSelect = (selection: string) => {
    this.inputQuery = selection;
    this.selectedSuggestionIndex = undefined;
    this.showSuggestions = false;
    this.querySelect.emit(this.inputQuery);
  }

  onFocus = () => {
    this.showSuggestions = true;
    this.selectedSuggestionIndex = undefined;
    this.suggestionArr = this.findMatch(this.inputQuery);
  }

  onKeyDown = (e) => {
    switch(e.key) {
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

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (this.selectedSuggestionIndex !== undefined) {
        this.onSelect(this.suggestionArr[this.selectedSuggestionIndex]);
      } else {
        // User <enter> on form <input>
        this.onSelect(this.inputQuery);
      }
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.query = this.inputQuery;
    this.onSelect(this.query);
  }


  getSuggestionElement = (suggestion): JSX.Element => {
    const isSelected = this.selectedSuggestionIndex !== undefined
      && suggestion === this.suggestionArr[this.selectedSuggestionIndex];
    return (
      <li
        class={'hub-suggestions-li ' + (isSelected ? 'hub-suggestions-selected': '')}
        onClick={() => this.onSelect(suggestion)}
      >
        {suggestion}
      </li>
    );
  };

  render() {
    return (
      <div class='hub-suggestions-div'>
        {/* <form onSubmit={(e) => {this.onSubmit(e); return false} }> */}
          <slot name="before-input" />

          <input
            class='hub-suggestions-input'
            type='text'
            placeholder={this.placeholder}
            value={this.inputQuery}
            onInput={e => this.onInput(e)}
            onFocus={() => this.onFocus()}
            onKeyDown={e => this.onKeyDown(e)}
            onKeyPress={e => this.onKeyPress(e)}
            onSubmit={(e) => this.onSubmit(e)}
          ></input>
          <ul class='hub-suggestions-ul' role='listbox' hidden={!this.showSuggestions}>
            {this.suggestionArr.map(suggestion => this.getSuggestionElement(suggestion))}
          </ul>
          <calcite-button onClick={(e) => {this.onSubmit(e)} }>{this.submit}</calcite-button>
          {/* <input class="hub-suggest-input-submit" type='submit' value={this.submit} /> */}
        {/* </form> */}
      </div>  
    );
  }
}
