/// <reference types="react" />
import { Element, EventEmitter } from '../../../stencil-public-runtime';
export declare class HubSuggestInput {
  element: HTMLElement;
  /** Default search */
  query: string;
  /** Geographic extent limit for geocoding */
  extent: any;
  /** Value for input placeholder */
  placeholder: string;
  /** Value for submit button */
  submit: string;
  /** Values that the auto-complete textbox should search for */
  suggestions: Array<string>;
  /** Emits the query of the input result */
  querySelect: EventEmitter;
  queryInput: EventEmitter;
  inputQuery: string;
  showSuggestions: boolean;
  suggestionArr: string[];
  selectedSuggestionIndex: number;
  fuseIndex: any;
  componentWillLoad(): void;
  buildIndex(suggestions: any): void;
  suggestionsDidChangeHandler(newSuggestions: Array<string>): void;
  handleWindowClick(e: Event): void;
  findMatch: (searchTerm: string) => string[];
  onInput(e: any): string;
  onSelect: (selection: string) => void;
  onFocus: () => void;
  onKeyDown: (e: any) => void;
  onKeyPress: (e: any) => void;
  onSubmit(e: any): void;
  getSuggestionElement: (suggestion: any) => JSX.Element;
  render(): any;
}
