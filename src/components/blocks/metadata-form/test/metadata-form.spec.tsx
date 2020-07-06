import { newSpecPage } from '@stencil/core/testing';
import { MetadataForm } from '../metadata-form';

describe('metadata-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MetadataForm],
      html: `<metadata-form></metadata-form>`,
    });
    expect(page.root).toEqualHtml(`
      <metadata-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </metadata-form>
    `);
  });
});
