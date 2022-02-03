import { EventEmitter } from '../../../stencil-public-runtime';
export declare class DiscussionEntry {
  deleteEl: HTMLElement;
  annotationId: string;
  authorImage: string;
  authorName: string;
  description: string;
  publishedDate: string;
  allowReply: boolean;
  allowEdit: boolean;
  allowDelete: boolean;
  eventDeleteAnnotation: EventEmitter;
  deleteAnnotation(event: any): void;
  render(): any;
}
