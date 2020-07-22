import * as hubDownloads from '@esri/hub-downloads';
import { newSpecPage } from "@stencil/core/testing";
import { DownloadNotice } from './hub-download-notice';

describe('download-notice', () => {
  it('builds', () => {
    expect(new DownloadNotice()).toBeTruthy();
  });

  it("has expected props", async () => {
    const page = await newSpecPage({
      components: [DownloadNotice],
      html: `<div></div>`
    });

    let component = page.doc.createElement("hub-download-notice");

    (component as any).fileStatus = 'ready';
    (component as any).lastEditDate = '2020-07-20T17:00:00.000Z';
    (component as any).exportRequested = true;
    page.root.appendChild(component);
    await page.waitForChanges();

    expect(page.rootInstance.fileStatus).toBe('ready');
    expect(page.rootInstance.lastEditDate).toBe('2020-07-20T17:00:00.000Z');
    expect(page.rootInstance.exportRequested).toBe(true);
    expect(page.rootInstance.apiError).toBe(undefined);
  });

  describe("Expected HTML", () => {
    it("File cached, up-to-date", async () => {
      const page = await newSpecPage({
        components: [DownloadNotice],
        html: `<div></div>`
      });
  
      let component = page.doc.createElement("hub-download-notice");
  
      (component as any).fileStatus = 'ready';
      (component as any).lastEditDate = '2020-07-20T17:00:00.000Z';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.root).toEqualHtml(`<hub-download-notice>
          <mock:shadow-root>
            <calcite-notice active=\"false\"></calcite-notice>
          </mock:shadow-root>
        </hub-download-notice>`);
    })

    it("File cached, unknown date", async () => {
      const page = await newSpecPage({
        components: [DownloadNotice],
        html: `<div></div>`
      });
  
      let component = page.doc.createElement("hub-download-notice");
  
      (component as any).fileStatus = 'ready';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.root).toEqualHtml(`<hub-download-notice>
          <mock:shadow-root>
            <calcite-notice active="" color="yellow" dir="ltr" icon="false" scale="m" width="full">
              <div slot="notice-title"></div>
              <div slot="notice-message"> The file may not contain the most up to date data.</div>
            </calcite-notice>
          </mock:shadow-root>
        </hub-download-notice>`);
    });

    it("File cached, updating", async () => {
      const page = await newSpecPage({
        components: [DownloadNotice],
        html: `<div></div>`
      });
  
      let component = page.doc.createElement("hub-download-notice");
  
      (component as any).fileStatus = 'updating';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.root).toEqualHtml(`<hub-download-notice>
          <mock:shadow-root>
            <calcite-notice active="" color="yellow" dir="ltr" icon="false" scale="m" width="full">
              <div slot="notice-title">
                <calcite-loader inline="" is-active=""></calcite-loader>
                  File generation in progress
              </div>
              <div slot="notice-message">We are updating the file. This may take some time.</div>
            </calcite-notice>
          </mock:shadow-root>
        </hub-download-notice>`);
    });

    it("File cached, failed background export (not triggered by user)", async () => {
      const page = await newSpecPage({
        components: [DownloadNotice],
        html: `<div></div>`
      });
  
      let component = page.doc.createElement("hub-download-notice");
  
      (component as any).fileStatus = 'error_updating';
      (component as any).lastEditDate = '2020-07-20T17:00:00.000Z';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.root).toEqualHtml(`<hub-download-notice>
      <mock:shadow-root>
        <calcite-notice active=\"false\"></calcite-notice>
      </mock:shadow-root>
    </hub-download-notice>`);
    })

    it("File cached, failed export (triggered by user)", async () => {
      const page = await newSpecPage({
        components: [DownloadNotice],
        html: `<div></div>`
      });
  
      let component = page.doc.createElement("hub-download-notice");
  
      (component as any).fileStatus = 'error_updating';
      (component as any).lastEditDate = '2020-07-20T17:00:00.000Z';
      (component as any).exportRequested = true;
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.root).toEqualHtml(`<hub-download-notice>
        <mock:shadow-root>
          <calcite-notice active="" color="red" dir="ltr" icon="false" scale="m" width="full">
            <div slot="notice-title">File generation failed</div>
          </calcite-notice>
        </mock:shadow-root>
      </hub-download-notice>`);
    })

    it("File not cached", async () => {
      const page = await newSpecPage({
        components: [DownloadNotice],
        html: `<div></div>`
      });
  
      let component = page.doc.createElement("hub-download-notice");
  
      (component as any).fileStatus = 'not_ready';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.root).toEqualHtml(`<hub-download-notice>
          <mock:shadow-root>
            <calcite-notice active="" color="yellow" dir="ltr" icon="false" scale="m" width="full">
              <div slot="notice-title"></div>
              <div slot="notice-message">The file does not exist and will take time to create.</div>
            </calcite-notice>
          </mock:shadow-root>
        </hub-download-notice>`);
    });

    it("File not cached, creating", async () => {
      const page = await newSpecPage({
        components: [DownloadNotice],
        html: `<div></div>`
      });
  
      let component = page.doc.createElement("hub-download-notice");
  
      (component as any).fileStatus = 'creating';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.root).toEqualHtml(`<hub-download-notice>
          <mock:shadow-root>
            <calcite-notice active="" color="yellow" dir="ltr" icon="false" scale="m" width="full">
              <div slot="notice-title">
                <calcite-loader inline="" is-active=""></calcite-loader>
                  File generation in progress
              </div>
              <div slot="notice-message">We are creating the file. This may take some time.</div>
            </calcite-notice>
          </mock:shadow-root>
        </hub-download-notice>`);
    });

    it("File not cached, failed background export (not triggered by user)", async () => {
      const page = await newSpecPage({
        components: [DownloadNotice],
        html: `<div></div>`
      });
  
      let component = page.doc.createElement("hub-download-notice");
  
      (component as any).fileStatus = 'error_creating';
      (component as any).lastEditDate = '2020-07-20T17:00:00.000Z';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.root).toEqualHtml(`<hub-download-notice>
      <mock:shadow-root>
        <calcite-notice active=\"false\"></calcite-notice>
      </mock:shadow-root>
    </hub-download-notice>`);
    })

    it("File not cached, failed export (triggered by user)", async () => {
      const page = await newSpecPage({
        components: [DownloadNotice],
        html: `<div></div>`
      });
  
      let component = page.doc.createElement("hub-download-notice");
  
      (component as any).fileStatus = 'error_creating';
      (component as any).lastEditDate = '2020-07-20T17:00:00.000Z';
      (component as any).exportRequested = true;
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.root).toEqualHtml(`<hub-download-notice>
      <mock:shadow-root>
        <calcite-notice active="" color="red" dir="ltr" icon="false" scale="m" width="full">
          <div slot="notice-title">File generation failed</div>
        </calcite-notice>
      </mock:shadow-root>
    </hub-download-notice>`);
    })

    it("API error, 404", async () => {
      const page = await newSpecPage({
        components: [DownloadNotice],
        html: `<div></div>`
      });
  
      let component = page.doc.createElement("hub-download-notice");
  
      (component as any).apiError = '404';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.root).toEqualHtml(`<hub-download-notice>
      <mock:shadow-root>
        <calcite-notice active="" color="red" dir="ltr" icon="false" scale="m" width="full">
          <div slot="notice-title">Dataset not found</div>
        </calcite-notice>
      </mock:shadow-root>
    </hub-download-notice>`);
    })

    it("API error", async () => {
      const page = await newSpecPage({
        components: [DownloadNotice],
        html: `<div></div>`
      });
  
      let component = page.doc.createElement("hub-download-notice");
  
      (component as any).apiError = 'Error message';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.root).toEqualHtml(`<hub-download-notice>
      <mock:shadow-root>
        <calcite-notice active="" color="red" dir="ltr" icon="false" scale="m" width="full">
          <div slot="notice-title">API error</div>
        </calcite-notice>
      </mock:shadow-root>
    </hub-download-notice>`);
    })
  });
});
