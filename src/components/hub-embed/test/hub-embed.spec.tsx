import { newSpecPage } from '@stencil/core/testing';
import { HubEmbed } from '../hub-embed';

describe('hub-embed', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HubEmbed],
      html: `<hub-embed></hub-embed>`,
    });
    expect(page.root).toEqualHtml(`
      <hub-embed>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hub-embed>
    `);
  });
});
