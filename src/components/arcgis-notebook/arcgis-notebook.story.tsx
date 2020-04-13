import readme from './readme.md'

export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below
    mainEl.style.height = "800px"
    stories.add('ArcGIS Notebook', () => {
      const item = knobs.text('item', "23bc9a4ea59d4bcea85b55b39ffcd866")
      const portal = knobs.text('portal', 'https://www.arcgis.com')
      const view = knobs.select('view', ['preview', 'edit'], 'edit')
      mainEl.innerHTML = `<arcgis-notebook
        item="${item}"
        portal="${portal}"
        view="${view}"
      ></arcgis-notebook>`
  
      return mainEl;
    }, { notes: readme });
}