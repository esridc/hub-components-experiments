import { EventEmitter } from '../../../stencil-public-runtime';
export declare class HubInput {
  element: HTMLElement;
  /** Default address to search */
  address: string;
  /** Geographic extent limit for geocoding */
  extent: any;
  /** Emits the {address, coordinates} of the geocoded result */
  eventAddressUpdated: EventEmitter;
  inputAddress: string;
  addressSuggestions: Array<any>;
  componentWillLoad(): void;
  queryInputHandler(event: CustomEvent): string;
  querySelectHandler(event: CustomEvent): string;
  render(): any;
}
