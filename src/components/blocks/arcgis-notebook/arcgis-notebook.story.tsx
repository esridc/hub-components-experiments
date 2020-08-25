import readme from './readme.md'

export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below
    mainEl.style.height = "800px"
    stories.add('ArcGIS Notebook', () => {
      const item = knobs.text('item', "9cd1f9bdc6794e63ae450087b3b67e05")
      const portal = knobs.text('portal', 'https://www.arcgis.com')
      const view = knobs.select('view', ['preview', 'edit'], 'preview')
      const name = knobs.text('name', 'ArcGIS Notebook')
      const allowScripts = knobs.boolean('allowScripts', true)
      let code = `<arcgis-notebook
      item="${item}"
      portal="${portal}"
      view="${view}"
      allow-scripts=${allowScripts}
    >
    <h2 slot="title">${name}</h2>
    </arcgis-notebook>`;
      mainEl.innerHTML = code
  
      return mainEl;
    }, { notes: readme });
}
