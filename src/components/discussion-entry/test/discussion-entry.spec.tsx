import { newSpecPage } from '@stencil/core/testing';
import { DiscussionEntry } from '../discussion-entry';

describe('discussion-entry', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DiscussionEntry],
      html: `<discussion-entry></discussion-entry>`,
    });
    expect(page.root).toEqualHtml(`
      <discussion-entry>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </discussion-entry>
    `);
  });
});
