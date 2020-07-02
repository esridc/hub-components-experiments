import { newSpecPage } from '@stencil/core/testing';
import { MetadataSectionHelp } from '../metadata-section-help';

describe('metadata-section-help', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MetadataSectionHelp],
      html: `<metadata-section-help></metadata-section-help>`,
    });
    expect(page.root).toEqualHtml(`
      <metadata-section-help>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </metadata-section-help>
    `);
  });
});
