import readme from './readme.md'

/* hub-search.story.js */
export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    stories.add('Hub Search', () => {
      const sort = knobs.select('name', ['name', 'modified'], 'name');
      const site = knobs.text('site', 'notebook-templates-dcdev.hub.arcgis.com'); //'opendata.dc.gov'
      const groups = knobs.text('groups', 'eca7c9c83df04cf5bf916ca487362aae');
      const searchbutton = knobs.text('searchbutton', "Start Search");
      const searchplaceholder = knobs.text('searchplaceholder', "Search");
      const buttontext = knobs.text('buttontext', 'Explore');
      const showsearch = knobs.boolean('showsearch', true);
      
      mainEl.innerHTML = `<hub-search 
        showsearch=${showsearch} 
        searchbutton=${searchbutton} 
        searchplaceholder=${searchplaceholder} 
        buttontext=${buttontext} 
        groups=${groups} 
        site=${site} 
        sort="${sort}"></hub-search>`
  
      return mainEl;
    }, { notes: readme});
  
}