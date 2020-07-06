import { newSpecPage } from '@stencil/core/testing';
import { HubTopicPicker } from '../hub-topic-picker';

describe('hub-topic-picker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HubTopicPicker],
      html: `<hub-topic-picker></hub-topic-picker>`,
    });
    expect(page.root).toEqualHtml(`
      <hub-topic-picker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hub-topic-picker>
    `);
  });
});
