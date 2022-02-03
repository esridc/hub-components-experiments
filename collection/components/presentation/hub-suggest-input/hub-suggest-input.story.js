import readme from './readme.md';
/* radar-map.story.js */
export default function (stories, knobs) {
  const mainEl = document.createElement('div'); // do this OUTSIDE the render function below
  stories.add('Hub Suggest Input', () => {
    const placeholder = knobs.text('placeholder', "Search for a state");
    const submit = knobs.text('submit', "Start Search");
    const suggestions = knobs.array('suggestions', ["Alabama", "Alaska", "Arkansas"]);
    mainEl.innerHTML = `<hub-suggest-input submit="${submit}" placeholder="${placeholder}" suggestions="${suggestions}"></hub-radar>`;
    return mainEl;
  }, { notes: readme });
}
