import * as HubTypes from "../../../utils/hub-types";
export declare class HubContentCard {
  content: string;
  layout: "horizontal" | "vertical";
  contentItem: HubTypes.IHubContent;
  actionButton: any;
  host: HTMLDivElement;
  children: Array<any>;
  componentWillLoad(): void;
  loadContent(): void;
  render(): any;
}
