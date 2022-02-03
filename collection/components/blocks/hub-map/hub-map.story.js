import readme from './readme.md';
// /* hub-map.story.js */
export default function (stories, knobs) {
  const mainEl = document.createElement('div'); // do this OUTSIDE the render function below
  stories.add('Hub Map', () => {
    const zoom = knobs.number('zoom', 9);
    const center = knobs.text('center', '[-77, 38.9]');
    const drawing = knobs.boolean('drawing', false);
    mainEl.innerHTML = `<div style="height: 500px"><hub-map drawing=${drawing} center="${center}" zoom="${zoom}"></hub-map></div>`;
    return mainEl;
  }, { notes: readme });
  stories.add('Hub Map (webmap)', () => {
    const webmap = knobs.text('webmap', '2e725f2d5b7640b28121af931048894c');
    mainEl.innerHTML = `<div style="height: 500px"><hub-map webmap="${webmap}""></hub-map></div>`;
    return mainEl;
  }, { notes: readme });
}
