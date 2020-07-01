import { newSpecPage } from '@stencil/core/testing';
import { DiscussionInput } from '../discussion-input';

describe('discussion-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DiscussionInput],
      html: `<discussion-input></discussion-input>`,
    });
    expect(page.root).toEqualHtml(`
      <discussion-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </discussion-input>
    `);
  });
});
