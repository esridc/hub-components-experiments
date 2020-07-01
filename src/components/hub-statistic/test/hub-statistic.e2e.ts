import { newE2EPage } from '@stencil/core/testing';

describe('hub-statistic', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-statistic></hub-statistic>');

    const element = await page.find('hub-statistic');
    expect(element).toHaveClass('hydrated');
  });
});
