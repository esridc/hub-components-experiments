import { h, Component, Prop, State, Element } from "@stencil/core";
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale'
import EventEmitter from 'eventemitter3';
import { UserSession } from '@esri/arcgis-rest-auth';
import { requestDownloadMetadata, requestDatasetExport, pollDownloadMetadata, DownloadFormat } from '@esri/hub-downloads';
import { componentLanguage } from '../utils/component-locale';
import { i18next } from '../utils/localizer';

@Component({
  tag: 'hub-download-card',
  styleUrl: './hub-download-card.css',
  shadow: true
})

export class DownloadCard {
  @State() loading : boolean;
  @State() metadata : any;
  @State() downloadRequested : boolean = false;
  @State() exportRequested: boolean = false;
  @State() apiError : any;

  locale: object;
  locales: object = { en: enUS };
  language: string;
  eventEmitter: EventEmitter;
  authentication: UserSession;

  @Prop() host: string = 'http://localhost:3000';
  @Prop() datasetId : string;
  @Prop() spatialRefId: string = '4326';
  @Prop() where: string;
  @Prop() geometry: string;
  @Prop() name: string;
  @Prop() format: string;
  @Prop() target: string;
  @Prop() filename: string;
  @Prop() username: string;
  @Prop() token: string;
  @Element() element: HTMLElement;

  async componentWillLoad () {
    this.setLanguage();
    this.setAuthentication();
    const params = this.getServiceParams();


    try {
      this.metadata = await requestDownloadMetadata(params);
      this.eventEmitter = new EventEmitter();
      if (this.exportInProgress()) {
        this.poll();
      }
    } catch (error) {
      this.apiError = error;
    }
  }

  async setLanguage () {
    const language = componentLanguage(this.element)
    this.locale = this.locales[language] || enUS
    await i18next.changeLanguage(language);
  }

  getServiceParams () {
    return {
      host: this.host,
      datasetId: this.datasetId,
      spatialRefId: this.spatialRefId,
      format: this.format as DownloadFormat,
      where: this.where,
      geometry: this.geometry,
      target: this.target,
      authentication: this.authentication
    }
  }

  setAuthentication () {
    if (this.username && this.token) {
      this.authentication = new UserSession({
        username: this.username,
        portal: `${this.host}/sharing/rest`,
        token: this.token,
      })
      this.authentication.getToken = () => new Promise((resolve) => {
        resolve(this.token)
      })
    }
    return {};
  }

  async poll () {
    const params = this.getServiceParams();
    this.eventEmitter.on(`${this.metadata.downloadId}ExportComplete`, this.exportDatasetComplete.bind(this));
    this.eventEmitter.on(`${this.metadata.downloadId}ExportError`, this.exportDatasetError.bind(this));
    this.eventEmitter.on(`${this.metadata.downloadId}PollingError`, this.exportPollingError.bind(this));
    pollDownloadMetadata({
      ...params,
      downloadId: this.metadata.downloadId,
      jobId: this.metadata.jobId,
      exportCreated: this.metadata.exportCreated,
      eventEmitter: this.eventEmitter,
      pollingInterval: 5000
    });
  }

  async download () {
    if (this.metadata && this.metadata.downloadUrl) {
      this.downloadRequested = true;
      return window.location.href = this.metadata.downloadUrl;
    }
    // In certain file states, the "Download" button actually triggers an export
    return this.exportDataset()
  }

  async exportDataset () {
    this.exportRequested = true;
    this.downloadRequested = undefined;
    this.metadata.status = this.metadata.status === 'not_ready' ? 'creating' : 'updating';
    const params = {
      title: this.filename,
      ...this.getServiceParams()
    }

    try {
      const result = await requestDatasetExport(params);
      this.metadata = { ...this.metadata, ...result };
      this.poll();
    } catch (error) {
      this.apiError = error;
      this.metadata.status = 'failed';
      this.metadata.errors = [error];
    }
  }

  exportDatasetComplete(event) {
    this.exportDatasetHandler(event)

    if (this.exportRequested) {
      const { downloadUrl } = this.metadata;
  
      if (downloadUrl) {
        return window.location.href = downloadUrl;
      }
    }
  }

  exportDatasetError(event) {
    this.exportDatasetHandler(event)
  }

  exportPollingError(event) {
    this.apiError = event.detail.error;
    this.exportDatasetHandler(event)
  }

  exportDatasetHandler (event) {
    this.metadata = {...this.metadata, ...event.detail.metadata};
    this.eventEmitter.off(`${this.metadata.downloadId}ExportComplete`, this.exportDatasetComplete);
    this.eventEmitter.off(`${this.metadata.downloadId}ExportError`, this.exportDatasetError);
    this.eventEmitter.off(`${this.metadata.downloadId}PollingError`, this.exportDatasetError);
  }

  getNotice() {
    const {
      metadata = {},
      apiError,
      exportRequested
    } = this;
    const { status, lastEditDate } = metadata
    const error = apiError ? apiError.status || apiError.message : undefined

    return <hub-download-notice 
        file-status={status}
        export-requested={exportRequested}
        api-error={error}
        last-edit-date={lastEditDate}>
      </hub-download-notice>
  }

  exportInProgress () {
    const { metadata: { status } = {} } = this;
    return status === 'creating' || status === 'updating';
  }

  downloadCached () {
    const { metadata: { status } = {} } = this;
    return status === 'ready' || status === 'stale' || status === 'updating' || status === 'error_updating';
  }

  downloadUpToDate () {
    return this.metadata && this.metadata.status === 'ready' && !!this.metadata.lastEditDate;
  }

  getFileDescriptors () {
    const fileDescription : HTMLElement[] = [];
    const { metadata: { lastModified, contentLength } = {} } = this
    
    if (!this.downloadCached()) return null
    
    if (lastModified) {
      fileDescription.push(<dt>{i18next.t('fileCreated')}</dt>)
      fileDescription.push(<dd>{format(new Date(lastModified), 'PPp', { locale: this.locale })}</dd>)
    }
    if (contentLength) {
      fileDescription.push(<dt>{i18next.t('fileSize')}</dt>,<dd>{calculateSize(contentLength)}</dd>)
    }
    return fileDescription
  }

  getDownloadControl () {
    if(this.shouldUseDownloadButton()) {
      return <calcite-button
        width="full"
        color="blue"
        appearance="outline"
        scale="m"
        icon-position="start"
        disabled={this.shouldDisableDownload()}
        onClick={this.download.bind(this)}>{i18next.t('buttonDownload')}</calcite-button>
    }

    return <calcite-dropdown alignment="start" scale="m" type="click" dir="ltr" active="false">
      <calcite-button slot="dropdown-trigger" hastext="" color="blue" appearance="outline" scale="m" icon="caretDown" icon-position="end">{i18next.t('buttonOptions')}</calcite-button>
      <calcite-dropdown-group group-title="Choose one:" selection-mode="none">
        <calcite-dropdown-item dir="ltr" tabindex="0" role="menuitem" selection-mode="none"  onClick={this.exportDataset.bind(this)} hidden={this.exportInProgress()}>{i18next.t('menuRequest')}</calcite-dropdown-item>
        <calcite-dropdown-item dir="ltr" tabindex="0" role="menuitem" selection-mode="none" onClick={this.download.bind(this)}>{i18next.t('menuDownload')}</calcite-dropdown-item>
      </calcite-dropdown-group>
    </calcite-dropdown>
  }

  shouldUseDownloadButton () {
    return this.downloadUpToDate() || !this.downloadCached();
  }

  shouldDisableDownload () {
    return this.exportInProgress() && !this.downloadCached()
  }

  render () {
    return (
      <calcite-card>
        <h3 slot="title">{this.name}</h3>
        <dl slot="subtitle">{this.getFileDescriptors()}</dl>
        <div slot="footer-leading">
          {this.getNotice()}
          {this.getDownloadControl()}
        </div>
      </calcite-card>
    )
  }
}

function calculateSize (contentLength) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const bytes = contentLength
  if (bytes === 0) return 'n/a'
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  if (i === 0) return `${bytes} ${sizes[i]})`
  return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
}