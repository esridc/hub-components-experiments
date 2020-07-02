import { newSpecPage } from '@stencil/core/testing';
import { HubEventsList } from '../hub-events-list';

describe('hub-events-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HubEventsList],
      html: `<hub-events-list></hub-events-list>`,
    });
    expect(page.root).toEqualHtml(`
      <hub-events-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hub-events-list>
    `);
  });
});
