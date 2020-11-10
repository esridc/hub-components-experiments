import { newSpecPage } from '@stencil/core/testing';
import { HubApiExplorer } from '../hub-api-explorer';

describe('hub-api-explorer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HubApiExplorer],
      html: `<hub-api-explorer></hub-api-explorer>`,
    });
    expect(page.root).toEqualHtml(`
      <hub-api-explorer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hub-api-explorer>
    `);
  });
});
