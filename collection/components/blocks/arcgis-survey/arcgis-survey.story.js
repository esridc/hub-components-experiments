import readme from './readme.md';
export default function (stories, knobs) {
  const mainEl = document.createElement('div'); // do this OUTSIDE the render function below
  mainEl.style.height = "800px";
  stories.add('ArcGIS Survey', () => {
    const item = knobs.text('item', "1a712571473448e891978869cd899b38");
    mainEl.innerHTML = `<arcgis-survey
        item="${item}"
        style="height: 100%"
      >
      </arcgis-survey>`;
    return mainEl;
  }, { notes: readme });
}
