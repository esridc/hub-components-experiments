import readme from './readme.md'

export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    stories.add('Hub Button', () => {
      const text = knobs.text('text', "Click Me")
      const icon = knobs.text('icon', "")
      mainEl.innerHTML = `<hub-button
        text="${text}"
        icon="${icon}"
      ></hub-button>
      <br/><br/><hub-button lang="de"></hub-button>
      <br/><br/><hub-button lang="es"></hub-button>`
  
      return mainEl;
    }, { notes: readme });
}