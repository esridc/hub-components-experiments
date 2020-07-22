import * as hubDownloads from '@esri/hub-downloads';
import { newSpecPage } from "@stencil/core/testing";
import { DownloadCard } from './hub-download-card';
import {
  cachedUpToDate,
  cachedStale,
  cachedStaleInProgress,
  cachedStaleFailed,
  notCached,
  notCachedInProgress,
  notCachedFailed,
  notFound,
  apiError
} from './hub-download-card.fixtures';

describe('hub-download-card', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('builds', () => {
    expect(new DownloadCard()).toBeTruthy();
  });

  describe("Expected properties and calls", () => {
    it("has expected props and makes expected calls when not in-progress", async () => {
      const pollSpy = jest.fn(async () => {});
      const exportDatasetSpy = jest.fn(async () => {});
      const requestDownloadMetadataSpy = jest.spyOn(hubDownloads, 'requestDownloadMetadata').mockImplementation(async () => {
        return {
          downloadId: 'abcdefabcdef01234567890123456789_1::csv',
          status: 'ready',
          lastEditDate: (new Date()).toISOString(),
          lastModified: (new Date()).toISOString(),
          contentLastModified: (new Date()).toISOString(),
          cacheTime: 1000,
          contentLength: 4000,
          downloadUrl: 's3:path'
        }
      });

      const page = await newSpecPage({
        components: [DownloadCard],
        html: `<div></div>`
      });

      let component = page.doc.createElement("hub-download-card");

      (component as any).host = 'http://localhost:3000';
      (component as any).datasetId = 'abcdefabcdef01234567890123456789_1';
      (component as any).spatialRefId = '2297';
      (component as any).name = 'Spreadsheet';
      (component as any).format = 'CSV';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.rootInstance.host).toBe('http://localhost:3000');
      expect(page.rootInstance.datasetId).toBe('abcdefabcdef01234567890123456789_1');
      expect(page.rootInstance.spatialRefId).toBe('2297');
      expect(page.rootInstance.name).toBe('Spreadsheet');
      expect(page.rootInstance.format).toBe('CSV');

      expect(requestDownloadMetadataSpy.mock.calls.length).toBe(1)
      expect(requestDownloadMetadataSpy.mock.calls[0]).toEqual([{
        host: 'http://localhost:3000',
        datasetId: 'abcdefabcdef01234567890123456789_1',
        spatialRefId: '2297',
        spatialRefWkt: undefined,
        format: 'CSV',
        geometry: undefined,
        where: undefined
      }]);
      expect(pollSpy.mock.calls.length).toBe(0);
      expect(exportDatasetSpy.mock.calls.length).toBe(0);
    });

    it("makes expected poll call when export is in-progress", async () => {
      const requestDownloadMetadataSpy = jest.spyOn(hubDownloads, 'requestDownloadMetadata').mockImplementation(async () => {
        return {
          downloadId: 'abcdefabcdef01234567890123456789_1::csv',
          status: 'creating',
          lastEditDate: (new Date()).toISOString(),
        }
      });
      const requestDatasetExportSpy = jest.spyOn(hubDownloads, 'requestDatasetExport');
      const pollDownloadMetadataSpy = jest.spyOn(hubDownloads, 'pollDownloadMetadata').mockImplementation(async () => {
        return {
          downloadId: 'abcdefabcdef01234567890123456789_1::csv',
          status: 'creating',
          lastEditDate: (new Date()).toISOString()
        }
      });
      const page = await newSpecPage({
        components: [DownloadCard],
        html: `<div></div>`
      });

      const component = page.doc.createElement("hub-download-card");
      (component as any).host = 'http://localhost:3000';
      (component as any).datasetId = 'abcdefabcdef01234567890123456789_1';
      (component as any).spatialRefId = '2297';
      (component as any).name = 'Spreadsheet';
      (component as any).format = 'CSV';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(requestDownloadMetadataSpy.mock.calls.length).toBe(1)
      expect(requestDownloadMetadataSpy.mock.calls[0]).toEqual([{
        host: 'http://localhost:3000',
        datasetId: 'abcdefabcdef01234567890123456789_1',
        spatialRefId: '2297',
        spatialRefWkt: undefined,
        format: 'CSV',
        geometry: undefined,
        where: undefined
      }]);
      expect(pollDownloadMetadataSpy.mock.calls.length).toBe(1);
      expect(requestDatasetExportSpy.mock.calls.length).toBe(0);
    });
  });
  
  describe('Expected HTML', () =>{
    it("has expected HTML when cached, up to date", async () => {
      jest.spyOn(hubDownloads, 'requestDownloadMetadata').mockImplementation(async () => {
        return {
          downloadId: 'abcdefabcdef01234567890123456789_1::csv',
          status: 'ready',
          lastEditDate: (new Date(2020, 4, 10, 12)).toISOString(),
          lastModified: (new Date(2020, 4, 11, 12)).toISOString(),
          contentLastModified: (new Date(2020, 4, 11, 12)).toISOString(),
          contentLength: 4000,
          cacheTime: 1000,
          downloadUrl: 's3:path'
        }
      });

      const page = await newSpecPage({
        components: [DownloadCard],
        html: `<div></div>`
      });

      let component = page.doc.createElement("hub-download-card");

      (component as any).host = 'http://localhost:3000';
      (component as any).datasetId = 'abcdefabcdef01234567890123456789_1';
      (component as any).spatialRefId = '2297';
      (component as any).name = 'Spreadsheet';
      (component as any).format = 'CSV';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.root).toEqualHtml(cachedUpToDate);
    });

    it("has expected HTML when cached, stale", async () => {
      jest.spyOn(hubDownloads, 'requestDownloadMetadata').mockImplementation(async () => {
        return {
          downloadId: 'abcdefabcdef01234567890123456789_1::csv',
          status: 'stale',
          lastEditDate: (new Date(2020, 4, 12, 12)).toISOString(),
          lastModified: (new Date(2020, 4, 11, 12)).toISOString(),
          contentLastModified: (new Date(2020, 4, 11, 12)).toISOString(),
          contentLength: 4000,
          cacheTime: 1000,
          downloadUrl: 's3:path'
        }
      });
      const page = await newSpecPage({
        components: [DownloadCard],
        html: `<div></div>`
      });

      let component = page.doc.createElement("hub-download-card");

      (component as any).host = 'http://localhost:3000';
      (component as any).datasetId = 'abcdefabcdef01234567890123456789_1';
      (component as any).spatialRefId = '2297';
      (component as any).name = 'Spreadsheet';
      (component as any).format = 'CSV';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.root).toEqualHtml(cachedStale);
    });
    
    it("has expected HTML when cached, stale, in-progress", async () => {
      jest.spyOn(hubDownloads, 'requestDownloadMetadata').mockImplementation(async () => {
        return {
          downloadId: 'abcdefabcdef01234567890123456789_1::csv',
          status: 'updating',
          lastEditDate: (new Date(2020, 4, 12, 12)).toISOString(),
          lastModified: (new Date(2020, 4, 11, 12)).toISOString(),
          contentLastModified: (new Date(2020, 4, 11, 12)).toISOString(),
          contentLength: 4000,
          cacheTime: 1000,
          downloadUrl: 's3:path'
        }
      });

      jest.spyOn(hubDownloads, 'pollDownloadMetadata').mockImplementation(async () => {
        return {
          downloadId: 'abcdefabcdef01234567890123456789_1::csv',
          status: 'updating',
          lastEditDate: (new Date(2020, 4, 12, 12)).toISOString(),
          lastModified: (new Date(2020, 4, 11, 12)).toISOString(),
          contentLastModified: (new Date(2020, 4, 11, 12)).toISOString(),
          contentLength: 4000,
          cacheTime: 1000,
          downloadUrl: 's3:path'
        }
      });
      const page = await newSpecPage({
        components: [DownloadCard],
        html: `<div></div>`
      });

      let component = page.doc.createElement("hub-download-card");

      (component as any).host = 'http://localhost:3000';
      (component as any).datasetId = 'abcdefabcdef01234567890123456789_1';
      (component as any).spatialRefId = '2297';
      (component as any).name = 'Spreadsheet';
      (component as any).format = 'CSV';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.root).toEqualHtml(cachedStaleInProgress);
    });

    it("has expected HTML when cached, stale, failed", async () => {
      jest.spyOn(hubDownloads, 'requestDownloadMetadata').mockImplementation(async () => {
        return {
          downloadId: 'abcdefabcdef01234567890123456789_1::csv',
          status: 'error_updating',
          lastEditDate: (new Date(2020, 4, 12, 12)).toISOString(),
          lastModified: (new Date(2020, 4, 11, 12)).toISOString(),
          contentLastModified: (new Date(2020, 4, 11, 12)).toISOString(),
          contentLength: 4000,
          cacheTime: 1000,
          downloadUrl: 's3:path'
        }
      });

      const page = await newSpecPage({
        components: [DownloadCard],
        html: `<div></div>`
      });

      let component = page.doc.createElement("hub-download-card");

      (component as any).host = 'http://localhost:3000';
      (component as any).datasetId = 'abcdefabcdef01234567890123456789_1';
      (component as any).spatialRefId = '2297';
      (component as any).name = 'Spreadsheet';
      (component as any).format = 'CSV';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.root).toEqualHtml(cachedStaleFailed);
    });

    it("has expected HTML when not cached", async () => {
      jest.spyOn(hubDownloads, 'requestDownloadMetadata').mockImplementation(async () => {
        return {
          downloadId: 'abcdefabcdef01234567890123456789_1::csv',
          status: 'not_ready',
          lastEditDate: (new Date(2020, 4, 10, 12)).toISOString(),
        }
      });

      const page = await newSpecPage({
        components: [DownloadCard],
        html: `<div></div>`
      });

      let component = page.doc.createElement("hub-download-card");

      (component as any).host = 'http://localhost:3000';
      (component as any).datasetId = 'abcdefabcdef01234567890123456789_1';
      (component as any).spatialRefId = '2297';
      (component as any).name = 'Spreadsheet';
      (component as any).format = 'CSV';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.root).toEqualHtml(notCached);
    });

    it("has expected HTML when not cached, inProgress", async () => {
      jest.spyOn(hubDownloads, 'requestDownloadMetadata').mockImplementation(async () => {
        return {
          downloadId: 'abcdefabcdef01234567890123456789_1::csv',
          status: 'creating',
          lastEditDate: (new Date(2020, 4, 10, 12)).toISOString(),
        }
      });

      jest.spyOn(hubDownloads, 'pollDownloadMetadata').mockImplementation(async () => {
        return {
          downloadId: 'abcdefabcdef01234567890123456789_1::csv',
          status: 'creating',
          lastEditDate: (new Date(2020, 4, 10, 12)).toISOString(),
        }
      });
      const page = await newSpecPage({
        components: [DownloadCard],
        html: `<div></div>`
      });

      let component = page.doc.createElement("hub-download-card");

      (component as any).host = 'http://localhost:3000';
      (component as any).datasetId = 'abcdefabcdef01234567890123456789_1';
      (component as any).spatialRefId = '2297';
      (component as any).name = 'Spreadsheet';
      (component as any).format = 'CSV';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.root).toEqualHtml(notCachedInProgress);
    });

    it("has expected HTML when not cached, failed", async () => {
      jest.spyOn(hubDownloads, 'requestDownloadMetadata').mockImplementation(async () => {
        return {
          downloadId: 'abcdefabcdef01234567890123456789_1::csv',
          status: 'error_creating',
          lastEditDate: (new Date(2020, 4, 10, 12)).toISOString(),
        }
      });

      const page = await newSpecPage({
        components: [DownloadCard],
        html: `<div></div>`
      });

      let component = page.doc.createElement("hub-download-card");

      (component as any).host = 'http://localhost:3000';
      (component as any).datasetId = 'abcdefabcdef01234567890123456789_1';
      (component as any).spatialRefId = '2297';
      (component as any).name = 'Spreadsheet';
      (component as any).format = 'CSV';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.root).toEqualHtml(notCachedFailed);
    });

    it("has expected HTML when API reports 404", async () => {
      jest.spyOn(hubDownloads, 'requestDownloadMetadata').mockImplementation(async () => {
        throw new RemoteServerError('Not found', 'https://test', 404);
      });

      const page = await newSpecPage({
        components: [DownloadCard],
        html: `<div></div>`
      });

      let component = page.doc.createElement("hub-download-card");

      (component as any).host = 'http://localhost:3000';
      (component as any).datasetId = 'abcdefabcdef01234567890123456789_1';
      (component as any).spatialRefId = '2297';
      (component as any).name = 'Spreadsheet';
      (component as any).format = 'CSV';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.root).toEqualHtml(notFound);
    });

    it("has expected HTML when API reports error", async () => {
      jest.spyOn(hubDownloads, 'requestDownloadMetadata').mockImplementation(async () => {
        throw new RemoteServerError('Bad Gateway', 'https://test', 502);
      });

      const page = await newSpecPage({
        components: [DownloadCard],
        html: `<div></div>`
      });

      let component = page.doc.createElement("hub-download-card");

      (component as any).host = 'http://localhost:3000';
      (component as any).datasetId = 'abcdefabcdef01234567890123456789_1';
      (component as any).spatialRefId = '2297';
      (component as any).name = 'Spreadsheet';
      (component as any).format = 'CSV';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.root).toEqualHtml(apiError);
    });
  })


});

class RemoteServerError extends Error {
  status: number;
  url: string;
  
  // Istanbul erroneously treats extended class constructors as an uncovered branch: https://github.com/gotwarlost/istanbul/issues/690
  /* istanbul ignore next */
  constructor (message: string, url: string, status: number) {
    super(message);
    this.status = status;
    this.url = url;
  }
}