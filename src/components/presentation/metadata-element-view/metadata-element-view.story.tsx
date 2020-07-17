import readme from './readme.md'

/* radar-map.story.js */
export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    stories.add('Metadata Element', () => {
        const title = knobs.text("title", "The answer is");
        const required = knobs.boolean("required", true);
        const type = knobs.text("type", "text");
        const id = knobs.text("id", "input");
        const value = knobs.text("value", "42")
        const description = knobs.text("description", "What is the question?");
        mainEl.innerHTML = `<metadata-element-view
            title="${title}"
            required="${required}"
            type="${type}"
            id="${id}"
            value="${value}"
            description="${description}"
        ></metadata-element-view>`
        
        return mainEl;
    }, { notes: readme });
  }