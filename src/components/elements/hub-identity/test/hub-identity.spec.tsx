import { newSpecPage } from '@stencil/core/testing';
import { HubIdentity } from '../hub-identity';

describe('hub-identity', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HubIdentity],
      html: `<hub-identity></hub-identity>`,
    });
    expect(page.root).toEqualHtml(`
      <hub-identity>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hub-identity>
    `);
  });
});
