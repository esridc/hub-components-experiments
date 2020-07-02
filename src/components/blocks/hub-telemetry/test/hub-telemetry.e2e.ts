import { newE2EPage } from '@stencil/core/testing';

describe('hub-telemetry', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-telemetry></hub-telemetry>');

    const element = await page.find('hub-telemetry');
    expect(element).toHaveClass('hydrated');
  });
});
