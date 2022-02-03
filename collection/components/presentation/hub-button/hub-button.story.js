import readme from './readme.md';
export default function (stories, knobs) {
  const mainEl = document.createElement('div'); // do this OUTSIDE the render function below
  mainEl.style.height = "800px";
  stories.add('Hub Button', () => {
    const text = knobs.text('text', "Click Me Too!");
    mainEl.innerHTML = `<hub-button
        text="${text}"
      >
      </hub-button>
      `;
    return mainEl;
  }, { notes: readme });
}
