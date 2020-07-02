import { newSpecPage } from '@stencil/core/testing';
import { MetadataElementView } from '../metadata-element-view';

describe('metadata-element-view', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MetadataElementView],
      html: `<metadata-element-view></metadata-element-view>`,
    });
    expect(page.root).toEqualHtml(`
      <metadata-element-view>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </metadata-element-view>
    `);
  });
});
