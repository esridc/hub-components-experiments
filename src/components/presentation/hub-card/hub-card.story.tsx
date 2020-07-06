import readme from './readme.md'

export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    stories.add('Hub Card', () => {
      const layout = knobs.select('layout', ['horizontal', 'vertical'], 'vertical');
      const contenttype = knobs.text('contenttype', "Hub Info")
      const name = knobs.text('name', "Streetscapes DC")
      const description = knobs.text('description', "A streetscape plan must be approved for any project within the Downtown Streetscape Area, where 50 percent of the adjoining public space (including sidewalks) is planned for construction.")
      const url = knobs.text('url', "javascript:alert('hello world')")
      const image = knobs.text('image', 'https://thegreatermarin.files.wordpress.com/2011/09/22-units-w-basements-washington-dc.png')
      mainEl.innerHTML = `<div style="width: 260px"><hub-card 
        layout="${layout}"
        contenttype="${contenttype}"
        name="${name}"
        description="${description}"
        url="${url}"
        image="${image}"
      ></hub-card></div>`
  
      return mainEl;
    }, { notes: readme });
}