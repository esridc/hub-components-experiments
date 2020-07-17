import { newSpecPage } from '@stencil/core/testing';
import { MetadataSectionView } from '../metadata-section-view';

describe('metadata-section-view', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MetadataSectionView],
      html: `<metadata-section-view></metadata-section-view>`,
    });
    expect(page.root).toEqualHtml(`
      <metadata-section-view>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </metadata-section-view>
    `);
  });
});
