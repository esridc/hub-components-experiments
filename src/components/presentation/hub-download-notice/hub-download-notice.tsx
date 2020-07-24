import { h, Component, Prop, Element } from "@stencil/core";
import { i18next, componentLanguage } from '../../../utils/localizer';

@Component({
  tag: 'hub-download-notice',
  styleUrl: './hub-download-notice.css',
  shadow: true
})

export class DownloadNotice {
  @Prop() fileStatus: string;
  @Prop() lastEditDate : string;
  @Prop() cached: boolean = false;
  @Prop() exportRequested: boolean = false;
  @Prop() apiError: string;

  @Element() element: HTMLElement;

  async componentWillLoad () {
    const language = componentLanguage(this.element)
    await i18next.changeLanguage(language);
    await i18next.loadNamespaces('hub-download-notice')
  }

  async setLanguage () {
    const language = componentLanguage(this.element)
    await i18next.changeLanguage(language);
  }

  getNoticeTitle () {
    if (this.exportInProgress()) {
      return i18next.t('hub-download-notice:titleFileGeneration');
    }

    if (this.apiError === '404') {
      return i18next.t('hub-download-notice:titleDatasetNotFound');
    }

    if (this.apiError) {
      return i18next.t('hub-download-notice:titleApiError');
    }

    if (this.requestedExportHasFailed()) {
      return i18next.t('hub-download-notice:titleFileGenerationFailed');
    }
  }

  getNoticeMessage () {
    if (this.fileStatus === 'creating') {
      return i18next.t('hub-download-notice:messageCreatingFile');
    }

    if (this.fileStatus === 'updating') {
      return i18next.t('hub-download-notice:messageUpdatingFile');
    }

    if (this.downloadCached() && this.requestedExportHasFailed()) {
      return i18next.t('hub-download-notice:messageFailedStaleAvailable');
    }

    if (this.downloadCached() && !this.lastEditDate) {
      return  i18next.t('hub-download-notice:messageCachedUnknownDate');
    }

    if (this.downloadCached()) {
      return i18next.t('hub-download-notice:messageCachedOutOfDate')
    }

    return i18next.t('hub-download-notice:messageNotCached');
  }


  shouldShowMessage () {
    return !this.apiError && !this.exportFailed() && !this.requestedExportIsReady()
  }


  getNoticeColor () {
    if (this.exportRequested && this.exportInProgress()) {
      return 'blue';
    }
    
    if (this.requestedExportHasFailed() || this.apiError) {
      return 'red';
    }

    return 'yellow';
  }


  exportFailed () {
    return this.fileStatus === 'error' || this.fileStatus === 'error_creating' || this.fileStatus === 'error_updating';
  }

  exportInProgress () {
    return this.fileStatus === 'creating' || this.fileStatus === 'updating';
  }

  requestedExportIsReady () {
    return this.exportRequested && this.downloadUpToDate();
  }

  requestedExportHasFailed () {
    const {
        exportRequested,
        fileStatus
    } = this;
    return exportRequested && (fileStatus === 'error' || fileStatus === 'error_updating' || fileStatus === 'error_creating');
  }

  downloadCached () {
    return this.fileStatus === 'ready' ||
      this.fileStatus === 'stale' ||
      this.fileStatus === 'updating' ||
      this.fileStatus === 'error_updating';
  }

  downloadUpToDate () {
    return this.fileStatus === 'ready' && !!this.lastEditDate;
  }

  shouldHide () {
    return this.downloadUpToDate() || (this.exportFailed() && !this.exportRequested)
  }

  render () {
    if (this.shouldHide()) {
      return (<calcite-notice active={false}></calcite-notice>);
    }

    const loader: HTMLElement = (this.exportInProgress()) ? <calcite-loader is-active inline></calcite-loader> : null;
    const message: HTMLElement = this.shouldShowMessage() ? <div slot="notice-message">{this.getNoticeMessage()}</div> : null;
    
    return (
      <calcite-notice icon={false} scale="m" width="full" color={this.getNoticeColor()} dir="ltr" active>
        <div slot="notice-title">{loader}{this.getNoticeTitle()}</div>
        {message}
      </calcite-notice>
      );
  }
}