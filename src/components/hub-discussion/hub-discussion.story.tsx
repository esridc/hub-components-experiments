import readme from './readme.md'

export default function(stories, knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    stories.add('Hub Discussion', () => {
        const org = knobs.text('org', 'BBpPn9wZu2D6eTNY'); // neT9SoYxizqTHZPH (DC)
        const search = knobs.text('search', '*');
        const target = knobs.text('target', '');
        const allowReply = knobs.boolean('allow-replies', true);

      mainEl.innerHTML = `<h3>Discussion</h3>
      <hub-discussion 
        org="${org}"
        target="${target}"
        search="${search}"
        allow-reply="${allowReply}"
      >
      <template id="annotation-header">
      <strong>Recent</strong>
    </template></hub-discussion>`
  
      return mainEl;
    }, { notes: readme });
}