import { Element, Listen, Component, Prop, State, Event, EventEmitter, h, Watch } from '@stencil/core';

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
  @Prop() suggestions: Array<string> = ['Apple', 'Avocado', 'Aardvark', 'Banana'];

  /** Emits the query of the input result */
  @Event() querySelect: EventEmitter;
  @Event() queryInput: EventEmitter;

  @State() inputQuery: string = '';
  @State() showSuggestions: boolean;
  @State() suggestionArr: string[] = [];
  @State() selectedSuggestionIndex: number;
  
  componentWillLoad() {
    this.inputQuery = this.query;
  }

  @Watch('suggestions')
  suggestionsDidChangeHandler( /* suggestions:Array<string> */ ) : void {
    this.suggestionArr = this.findMatch(this.inputQuery);
    this.showSuggestions = true;
  }

  @Listen('click', { target: 'window' })
  handleWindowClick(e: Event) : void {
    if (!this.element.contains((e.target as HTMLElement))) {
      this.showSuggestions = false;
      this.selectedSuggestionIndex = undefined;
    }
  }

  findMatch = (searchTerm: string): string[] => {
    if (searchTerm.length === 0) {
      return [];
    }
    return this.suggestions.filter(
      (term) => term.slice(0, searchTerm.length).toLowerCase() === searchTerm.toLowerCase() && term !== searchTerm
    );
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
        <form onSubmit={(e) => this.onSubmit(e)}>
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
          />
          <ul class='hub-suggestions-ul' role='listbox' hidden={!this.showSuggestions}>
            {this.suggestionArr.map(suggestion => this.getSuggestionElement(suggestion))}
          </ul>
          <input class="hub-suggest-input-submit" type='submit' value={this.submit} />
        </form>
      </div>  
    );
  }
}
