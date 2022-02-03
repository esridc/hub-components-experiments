import { EventEmitter } from '../../../stencil-public-runtime';
import * as HubTypes from '../../../utils/hub-types';
import { UserSession } from '@esri/arcgis-rest-auth';
export declare class DiscussionInput {
  inputEl: HTMLTextAreaElement;
  errorEl: HTMLCalciteAlertElement;
  /**
   * Optional placeholder text for the input text area
   */
  placeholder: string;
  /**
   * Button string message
   */
  submit: string;
  /**
   * URI of the comment subject (e.g. item:4ef, item:4ef:feature:42:attribute:width)
   */
  target: string;
  /**
   * URL to this Hub's annotation service
   * TODO: extract this implementation detail
   */
  annotationsUrl: string;
  /**
   * Show author any errors when saving annotation
   */
  error: string;
  member: HubTypes.IHubMember;
  auth: UserSession;
  /**
   * Serialized authentication information.
   */
  session: string;
  /**
   * Event emitted when a comment is successfully commited
   */
  eventAddAnnotation: EventEmitter;
  componentWillLoad(): Promise<void>;
  private submitAnnotation;
  private clearAnnotation;
  commitAnnotation(newAnnotation: HubTypes.IHubAnnotation): Promise<void>;
  render(): any;
}
