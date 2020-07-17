import { newSpecPage } from '@stencil/core/testing';
import { HubProfileCard } from '../hub-profile-card';

describe('hub-profile-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HubProfileCard],
      html: `<hub-profile-card></hub-profile-card>`,
    });
    expect(page.root).toEqualHtml(`
      <hub-profile-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hub-profile-card>
    `);
  });
});
