import { EventEmitter } from '../../../stencil-public-runtime';
import '@esri/calcite-components';
export declare class MetadataElementView {
  metadataEl: HTMLCalciteInputElement;
  elementTitle: string;
  required: boolean;
  /**
   * Currently based on calcite-components input
   */
  type: "number" | "text" | "color" | "date" | "datetime-local" | "email" | "file" | "image" | "month" | "password" | "search" | "tel" | "textarea" | "time" | "url" | "week";
  /**
   * JSON schema definition for a specific metadata property
   * see https://json-schema.org/understanding-json-schema/basics.html
   */
  schema: object;
  /**
   * Which translator to use from the schema definition
   */
  translator: string;
  /**
   * Subtype is used to override the metadata editor for this element
   * e.g. `geography` or `topics` show specific editors
   */
  subtype: string;
  elementId: string;
  value: string;
  description: string;
  elementUpdated: EventEmitter;
  private requiredStatus;
  metadataEditors: {
    geography: {
      component: string;
    };
    topics: {
      component: string;
    };
    license: {
      component: string;
    };
  };
  private getMetadataEditor;
  editorUpdatedHandler(event: CustomEvent<any>): void;
  onInput(): void;
  renderEditor(elementType: string, elementSubType: string): any;
  render(): any;
}
