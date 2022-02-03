import { EventEmitter } from '../../../stencil-public-runtime';
import { IResourceObject } from '@esri/hub-annotations';
import * as HubTypes from '../../../utils/hub-types';
import { UserSession } from '@esri/arcgis-rest-auth';
export declare class HubDiscussion {
  el: HTMLElement;
  allowReply: boolean;
  org: string;
  target: string;
  author: string;
  query: string;
  portalUrl: string;
  annotationsUrl: string;
  update: boolean;
  annotations: IResourceObject[];
  authors: any;
  annotationDescription: string;
  searchOptions: any;
  /**
   * Serialized authentication information.
   */
  session: string;
  username: string;
  auth: UserSession;
  newResponse: EventEmitter;
  eventAddAnnotation(e: any): void;
  addAnnotation(newAnnotation: HubTypes.IHubAnnotation): void;
  queryUpdated(): void;
  targetUpdated(newTarget: string): void;
  constructor();
  componentWillLoad(): Promise<void>;
  updateAnnotations(): Promise<void>;
  deleteAnnotation(annotationId: any): void;
  getAnnotations(): Promise<{
    data: IResourceObject[];
    included: IResourceObject[];
  }>;
  searchChanged(event: any): Promise<void>;
  getElementById(id: any): Element;
  removeAnnotation(event: any): Promise<void>;
  getAuthor(username: any): any;
  private formatDate;
  discussionCard(annotation: any): any;
  renderGallery(): any;
  renderList(): any[];
  render(): any[];
}
