import { newE2EPage } from '@stencil/core/testing';

describe('hub-radar', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<hub-radar></hub-radar>');
    const element = await page.find('hub-radar');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<hub-radar></hub-radar>');
    const component = await page.find('hub-radar');
    const element = await page.find('hub-radar >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
