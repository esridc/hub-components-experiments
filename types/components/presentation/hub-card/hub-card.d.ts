import '@esri/calcite-components';
import '@esri/calcite-ui-icons';
declare type ContentMetadata = {
  name: string;
  value: string;
};
export declare class HubCard {
  portalUrl: string;
  item: string;
  image: string;
  name: string;
  description: string;
  contenttype: string;
  /** Specify the layout of the card */
  layout: "horizontal" | "vertical";
  url: string;
  buttonText: string;
  buttonAction: Function;
  metadata: Array<ContentMetadata>;
  componentWillRender(): void;
  render(): any;
}
export {};
