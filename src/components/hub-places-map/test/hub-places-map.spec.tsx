import { newSpecPage } from '@stencil/core/testing';
import { HubPlacesMap } from '../hub-places-map';

describe('hub-places-map', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HubPlacesMap],
      html: `<hub-places-map></hub-places-map>`,
    });
    expect(page.root).toEqualHtml(`
      <hub-places-map>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hub-places-map>
    `);
  });
});
