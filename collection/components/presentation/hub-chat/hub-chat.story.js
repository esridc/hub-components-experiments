import readme from './readme.md';
export default function (stories, knobs) {
  const mainEl = document.createElement('div'); // do this OUTSIDE the render function below
  stories.add('Hub Chat', () => {
    const open = knobs.boolean('open', true);
    const name = knobs.text('name', 'Hub Chat');
    const placeholder = knobs.text('placeholder', 'Send a message...');
    mainEl.innerHTML = `<hub-chat
            open="${open}"
            name="${name}"
            placeholder="${placeholder}"
        ></hub-chat>`;
    return mainEl;
  }, { notes: readme });
}
