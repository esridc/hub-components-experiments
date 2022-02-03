export declare class MetadataForm {
  element: HTMLElement;
  sections: Array<string>;
  locale: string;
  resource: any;
  componentWillLoad(): Promise<void>;
  resourceUpdated(event: any): void;
  render(): any;
}
