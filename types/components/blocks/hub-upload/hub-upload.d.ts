import { EventEmitter } from '../../../stencil-public-runtime';
export declare class HubUpload {
  dropArea: HTMLElement;
  statusEl: HTMLDivElement;
  onUploadCompleted: EventEmitter<Blob>;
  /**
   * ClientID to identify the app launching auth
   */
  clientid: string;
  portal: string;
  session: string;
  uploads: Array<any>;
  fileHandler(event: CustomEvent): boolean;
  handleFiles(files: FileList): void;
  private processFile;
  private checkFileSize;
  private getFileType;
  private uploadFile;
  private uploadList;
  render(): any;
}
