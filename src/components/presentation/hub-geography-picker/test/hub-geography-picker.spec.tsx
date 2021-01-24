import { newSpecPage } from '@stencil/core/testing';
import { HubGeographyPicker } from '../hub-geography-picker';

describe('hub-geography-picker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HubGeographyPicker],
      html: `<hub-geography-picker></hub-geography-picker>`,
    });
    expect(page.root).toEqualHtml(`
      <hub-geography-picker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hub-geography-picker>
    `);
  });
});
