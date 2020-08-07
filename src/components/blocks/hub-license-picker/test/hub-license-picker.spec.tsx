import { newSpecPage } from '@stencil/core/testing';
import { HubLicensePicker } from '../hub-license-picker';

describe('hub-license-picker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HubLicensePicker],
      html: `<hub-license-picker></hub-license-picker>`,
    });
    expect(page.root).toEqualHtml(`
      <hub-license-picker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hub-license-picker>
    `);
  });
});
