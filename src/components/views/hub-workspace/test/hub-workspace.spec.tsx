import { newSpecPage } from '@stencil/core/testing';
import { HubWorkspace } from '../hub-workspace';

describe('hub-workspace', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HubWorkspace],
      html: `<hub-workspace></hub-workspace>`,
    });
    expect(page.root).toEqualHtml(`
      <hub-workspace>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hub-workspace>
    `);
  });
});
