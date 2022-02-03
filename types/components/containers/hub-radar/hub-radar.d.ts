export declare class HubRadar {
  textInput: HTMLInputElement;
  mapItem: any;
  mapItemData: any;
  mapCenter: string;
  mapZoom: number;
  messages: any;
  address: string;
  webmap: string;
  showmap: boolean;
  isLoading: boolean;
  handleAddressUpdated(event: CustomEvent): void;
  updateRadar(address: string, coordinates: any): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  render(): any;
}
