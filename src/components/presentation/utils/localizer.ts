import i18next from 'i18next';

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        titleDownloadComplete: "Download complete",
        titleFileGeneration: 'File generation in progress',
        titleFileGenerationFailed: 'File generation failed',
        titleDatasetNotFound: 'Dataset not found',
        titleApiError: 'API error',
        messageFailedStaleAvailable: 'You can download a previous version below.',
        messageUpdatingFile: 'We are updating the file. This may take some time.',
        messageCreatingFile: 'We are creating the file. This may take some time.',
        messageCachedOutOfDate: 'The file does not contain the most up to date data.',
        messageCachedUnknownDate: 'The file may not contain the most up to date data.',
        messageNotCached: 'The file does not exist and will take time to create.',
        buttonDownload: 'Download',
        buttonOptions: 'Options',
        menuRequest: 'Request a new file',
        menuDownload: 'Download available file',
        fileCreated: 'File created',
        fileSize: 'File size'
      }
    }
  }
});

export { i18next };