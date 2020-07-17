import { newSpecPage } from '@stencil/core/testing';
import { HubTelemetry } from '../hub-telemetry';

describe('hub-telemetry', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HubTelemetry],
      html: `<hub-telemetry></hub-telemetry>`,
    });
    expect(page.root).toEqualHtml(`
      <hub-telemetry>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hub-telemetry>
    `);
  });
});
