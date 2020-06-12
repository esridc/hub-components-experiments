import readme from './readme.md'

/* hub-event.story.js */
export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    
    stories.add('Hub Event', () => {
      const clientid = knobs.text('clientid', 'WXC842NRBVB6NZ2r');
      const eventtitle = knobs.text('Event Title', 'Maryland Ave NE Streetscape Project Groundbreaking');
      const orgurl = knobs.text('orgurl', 'https://cityx.maps.arcgis.com');

      mainEl.innerHTML = `<div style="width: 260px"><hub-event clientid="${clientid}" eventtitle="${eventtitle}" orgurl="${orgurl}"></hub-event></div>`
  
      return mainEl;
    }, { notes: readme });
  }