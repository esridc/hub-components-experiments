import readme from './readme.md'

/* radar-map.story.js */
export default function(stories, _knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    stories.add('Hub Telemetry', () => { 

        mainEl.innerHTML = `<hub-telemetry google="r3f"></hub-telemetry>`
                
        return mainEl;
    }, { notes: readme });
  }