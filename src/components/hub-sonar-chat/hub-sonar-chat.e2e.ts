import { newE2EPage } from '@stencil/core/testing';

describe('hub-sonar-chat', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hub-sonar-chat></hub-sonar-chat>');

    const element = await page.find('hub-sonar-chat');
    expect(element).toHaveClass('hydrated');
  });
});
