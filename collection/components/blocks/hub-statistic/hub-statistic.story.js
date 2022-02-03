import readme from './readme.md';
export default function (stories, knobs) {
  const mainEl = document.createElement('div'); // do this OUTSIDE the render function below
  stories.add('Hub Statistic', () => {
    const label = knobs.text('label', 'Population Aged 65 Years and Older');
    const value = knobs.text('value', '49,238,581');
    const units = knobs.text('units', 'people');
    const size = knobs.select('size', ['s', 'm', 'l'], 'm');
    mainEl.innerHTML = `<hub-statistic
        value="${value}"
        label="${label}"
        units="${units}"
        size="${size}"
      ><hub-statistic>`;
    return mainEl;
  }, { notes: readme });
}
