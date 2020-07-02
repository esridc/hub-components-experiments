import { newSpecPage } from '@stencil/core/testing';
import { HubDiscussion } from '../hub-discussion';

describe('hub-discussion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HubDiscussion],
      html: `<hub-discussion></hub-discussion>`,
    });
    expect(page.root).toEqualHtml(`
      <hub-discussion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hub-discussion>
    `);
  });
});
