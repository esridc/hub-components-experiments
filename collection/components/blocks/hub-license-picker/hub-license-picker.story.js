import readme from './readme.md';
/* hub-license-picker.story.js */
export default function (stories, knobs) {
  const mainEl = document.createElement('div'); // do this OUTSIDE the render function below
  stories.add('Hub License Picker', () => {
    const license = knobs.select('license', ["none", "cc0", "cc-by", "cc-by-sa", "cc-by-nc"], "cc0");
    mainEl.innerHTML = `<hub-license-picker license="${license}"></hub-license-picker>`;
    return mainEl;
  }, { notes: readme });
}
