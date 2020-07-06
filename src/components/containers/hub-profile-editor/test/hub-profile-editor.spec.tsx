import { newSpecPage } from '@stencil/core/testing';
import { HubProfileEditor } from '../hub-profile-editor';

describe('hub-profile-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HubProfileEditor],
      html: `<hub-profile-editor></hub-profile-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <hub-profile-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hub-profile-editor>
    `);
  });
});
