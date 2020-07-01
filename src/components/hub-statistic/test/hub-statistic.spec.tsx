import { newSpecPage } from '@stencil/core/testing';
import { HubStatistic } from '../hub-statistic';

describe('hub-statistic', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HubStatistic],
      html: `<hub-statistic></hub-statistic>`,
    });
    expect(page.root).toEqualHtml(`
      <hub-statistic>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hub-statistic>
    `);
  });
});
