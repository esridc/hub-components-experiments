import readme from './readme.md'

/* hub-event.story.js */
export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    
    stories.add('Hub Event', () => {
      const clientid = knobs.text('clientid', 'QVQNb3XfDzoboWS0');
      const eventtitle = knobs.text('Event Title', 'Maryland Ave NE Streetscape Project Groundbreaking');
      const orgurl = knobs.text('orgurl', 'https://cityx.maps.arcgis.com');

      mainEl.innerHTML = `<hub-event clientid="${clientid}" eventtitle="${eventtitle}" orgurl="${orgurl}"></hub-event>`
  
      return mainEl;
    }, { notes: readme });
  }