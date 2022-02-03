import { EventEmitter } from '../../../stencil-public-runtime';
export declare class DropArea {
  dropArea: HTMLElement;
  allowedTypes: Array<string>;
  /** Emits the chat input */
  onFilesSubmitted: EventEmitter;
  highlighted: boolean;
  componentDidLoad(): void;
  handleDrop: (e: any) => void;
  handleFiles: (files: any) => void;
  preventDefaults(e: any): void;
  render(): any;
}
