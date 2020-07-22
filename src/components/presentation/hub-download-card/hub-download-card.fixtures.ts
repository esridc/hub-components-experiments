import { format } from 'date-fns';
import { enUS } from 'date-fns/locale'

const cachedUpToDate = `<hub-download-card>
<mock:shadow-root>
  <calcite-card>
    <h3 slot="title">
      Spreadsheet
    </h3>
    <dl slot="subtitle">
      <dt>
        File created
      </dt>
      <dd>
      ${format(new Date(2020, 4, 11, 12), 'PPp', { locale: enUS })}
      </dd>
      <dt>
        File size
      </dt>
      <dd>
        3.9 KB
      </dd>
    </dl>
    <div slot="footer-leading">
      <hub-download-notice file-status="ready" last-edit-date="2020-05-10T19:00:00.000Z"></hub-download-notice>
      <calcite-button appearance="outline" color="blue" icon-position="start" scale="m" width="full">
        Download
      </calcite-button>
    </div>
  </calcite-card>
</mock:shadow-root>
</hub-download-card>`;

const cachedStale = `<hub-download-card>
<mock:shadow-root>
  <calcite-card>
    <h3 slot="title">
      Spreadsheet
    </h3>
    <dl slot="subtitle">
      <dt>
        File created
      </dt>
      <dd>
        May 11, 2020, 12:00 PM
      </dd>
      <dt>
        File size
      </dt>
      <dd>
        3.9 KB
      </dd>
    </dl>
    <div slot="footer-leading">
      <hub-download-notice file-status="stale" last-edit-date="2020-05-12T19:00:00.000Z"></hub-download-notice>
      <calcite-dropdown active="false" alignment="start" dir="ltr" scale="m" type="click">
        <calcite-button appearance="outline" color="blue" hastext="" icon="caretDown" icon-position="end" scale="m" slot="dropdown-trigger">
          Options
        </calcite-button>
        <calcite-dropdown-group group-title="Choose one:" selection-mode="none">
          <calcite-dropdown-item dir="ltr" role="menuitem" selection-mode="none" tabindex="0">
            Request a new file
          </calcite-dropdown-item>
          <calcite-dropdown-item dir="ltr" role="menuitem" selection-mode="none" tabindex="0">
            Download available file
          </calcite-dropdown-item>
        </calcite-dropdown-group>
      </calcite-dropdown>
    </div>
  </calcite-card>
</mock:shadow-root>
</hub-download-card>`;

const cachedStaleInProgress = `<hub-download-card>
<mock:shadow-root>
  <calcite-card>
    <h3 slot="title">
      Spreadsheet
    </h3>
    <dl slot="subtitle">
      <dt>
        File created
      </dt>
      <dd>
        May 11, 2020, 12:00 PM
      </dd>
      <dt>
        File size
      </dt>
      <dd>
        3.9 KB
      </dd>
    </dl>
    <div slot="footer-leading">
      <hub-download-notice file-status="updating" last-edit-date="2020-05-12T19:00:00.000Z"></hub-download-notice>
      <calcite-dropdown active="false" alignment="start" dir="ltr" scale="m" type="click">
        <calcite-button appearance="outline" color="blue" hastext="" icon="caretDown" icon-position="end" scale="m" slot="dropdown-trigger">
          Options
        </calcite-button>
        <calcite-dropdown-group group-title="Choose one:" selection-mode="none">
          <calcite-dropdown-item dir="ltr" hidden="" role="menuitem" selection-mode="none" tabindex="0">
            Request a new file
          </calcite-dropdown-item>
          <calcite-dropdown-item dir="ltr" role="menuitem" selection-mode="none" tabindex="0">
            Download available file
          </calcite-dropdown-item>
        </calcite-dropdown-group>
      </calcite-dropdown>
    </div>
  </calcite-card>
</mock:shadow-root>
</hub-download-card>`;

const cachedStaleFailed = `
<hub-download-card>
      <mock:shadow-root>
        <calcite-card>
          <h3 slot="title">
            Spreadsheet
          </h3>
          <dl slot="subtitle">
            <dt>
              File created
            </dt>
            <dd>
              May 11, 2020, 12:00 PM
            </dd>
            <dt>
              File size
            </dt>
            <dd>
              3.9 KB
            </dd>
          </dl>
          <div slot="footer-leading">
            <hub-download-notice file-status="error_updating" last-edit-date="2020-05-12T19:00:00.000Z"></hub-download-notice>
            <calcite-dropdown active="false" alignment="start" dir="ltr" scale="m" type="click">
              <calcite-button appearance="outline" color="blue" hastext="" icon="caretDown" icon-position="end" scale="m" slot="dropdown-trigger">
                Options
              </calcite-button>
              <calcite-dropdown-group group-title="Choose one:" selection-mode="none">
                <calcite-dropdown-item dir="ltr" role="menuitem" selection-mode="none" tabindex="0">
                  Request a new file
                </calcite-dropdown-item>
                <calcite-dropdown-item dir="ltr" role="menuitem" selection-mode="none" tabindex="0">
                  Download available file
                </calcite-dropdown-item>
              </calcite-dropdown-group>
            </calcite-dropdown>
          </div>
        </calcite-card>
      </mock:shadow-root>
    </hub-download-card>`;

const notCached = `<hub-download-card>
<mock:shadow-root>
  <calcite-card>
    <h3 slot="title">
      Spreadsheet
    </h3>
    <dl slot="subtitle"></dl>
    <div slot="footer-leading">
      <hub-download-notice file-status="not_ready" last-edit-date="2020-05-10T19:00:00.000Z"></hub-download-notice>
      <calcite-button appearance="outline" color="blue" icon-position="start" scale="m" width="full">
        Download
      </calcite-button>
    </div>
  </calcite-card>
</mock:shadow-root>
</hub-download-card>`;

const notCachedInProgress = `<hub-download-card>
<mock:shadow-root>
  <calcite-card>
    <h3 slot="title">
      Spreadsheet
    </h3>
    <dl slot="subtitle"></dl>
    <div slot="footer-leading">
      <hub-download-notice file-status="creating" last-edit-date="2020-05-10T19:00:00.000Z"></hub-download-notice>
      <calcite-button appearance="outline" color="blue" disabled="" icon-position="start" scale="m" width="full">
        Download
      </calcite-button>
    </div>
  </calcite-card>
</mock:shadow-root>
</hub-download-card>`;

const notCachedFailed = `<hub-download-card>
<mock:shadow-root>
  <calcite-card>
    <h3 slot="title">
      Spreadsheet
    </h3>
    <dl slot="subtitle"></dl>
    <div slot="footer-leading">
      <hub-download-notice file-status="error_creating" last-edit-date="2020-05-10T19:00:00.000Z"></hub-download-notice>
      <calcite-button appearance="outline" color="blue" icon-position="start" scale="m" width="full">
        Download
      </calcite-button>
    </div>
  </calcite-card>
</mock:shadow-root>
</hub-download-card>`;

const notFound = `<hub-download-card>
<mock:shadow-root>
  <calcite-card>
    <h3 slot=\"title\">
      Spreadsheet
    </h3>
    <dl slot=\"subtitle\"></dl>
    <div slot=\"footer-leading\">
      <hub-download-notice api-error="404"></hub-download-notice>
      <calcite-button appearance=\"outline\" color=\"blue\" icon-position=\"start\" scale=\"m\" width=\"full\">
        Download
      </calcite-button>
    </div>
  </calcite-card>
</mock:shadow-root>
</hub-download-card>`;

const apiError = `<hub-download-card>
<mock:shadow-root>
  <calcite-card>
    <h3 slot=\"title\">
      Spreadsheet
    </h3>
    <dl slot=\"subtitle\"></dl>
    <div slot=\"footer-leading\">
      <hub-download-notice api-error="502"></hub-download-notice>
      <calcite-button appearance=\"outline\" color=\"blue\" icon-position=\"start\" scale=\"m\" width=\"full\">
        Download
      </calcite-button>
    </div>
  </calcite-card>
</mock:shadow-root>
</hub-download-card>`;

export {
  cachedUpToDate,
  cachedStale,
  cachedStaleInProgress,
  cachedStaleFailed,
  notCached,
  notCachedInProgress,
  notCachedFailed,
  notFound,
  apiError
};