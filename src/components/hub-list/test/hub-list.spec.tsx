import { newSpecPage } from '@stencil/core/testing';
import { HubList } from '../hub-list';

describe('hub-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HubList],
      html: `<hub-list></hub-list>`,
    });
    expect(page.root).toEqualHtml(`
      <hub-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hub-list>
    `);
  });
});
