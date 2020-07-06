import readme from './readme.md'

/* radar-map.story.js */
export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    stories.add('Hub Topic Picker', () => {
        const allowSelection = knobs.boolean('allow-selection', true);

        mainEl.innerHTML = `<hub-topic-picker
            allow-selection=${allowSelection}
        ></hub-topic-picker>`
        
        return mainEl;
    }, { notes: readme });
  }