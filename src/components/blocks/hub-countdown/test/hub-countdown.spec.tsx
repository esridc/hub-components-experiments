import { newSpecPage } from '@stencil/core/testing';
import { HubCountdown } from '../hub-countdown';

describe('hub-countdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HubCountdown],
      html: `<hub-countdown></hub-countdown>`,
    });
    expect(page.root).toEqualHtml(`
      <hub-countdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hub-countdown>
    `);
  });
});
