import { EventEmitter } from '../../../stencil-public-runtime';
import '@esri/calcite-components';
import { IHubResource } from '../../../utils/hub-api';
export declare class MetadataSectionView {
  element: HTMLElement;
  spec: string;
  elementTitle: string;
  description: string;
  locale: string;
  /**
   * JSON Schema Properties section
   */
  inputs: Array<any>;
  /**
   * Hub Resource object.
   */
  resource: IHubResource;
  /**
   * Which translator to use from the schema definition
   */
  translator: string;
  resourceUpdated: EventEmitter;
  strings: any;
  sectionSchema: any;
  componentWillLoad(): Promise<void>;
  private loadSpecification;
  private getMetadataValue;
  /**
   * Set the correct attribute that may be embedded (e.g. {'metadata.interests': ['topic1', 'topic2']})
   *
   * @param resource Hub Resource
   * @param attributes Object of attributes that may be embedded (e.g. {'metadata.interests': ['topic1', 'topic2']})
   */
  private setMetadataValue;
  elementUpdatedHandler(event: CustomEvent<any>): void;
  render(): any;
}
