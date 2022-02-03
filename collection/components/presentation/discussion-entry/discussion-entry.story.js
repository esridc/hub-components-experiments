import readme from './readme.md';
export default function (stories, knobs) {
  const mainEl = document.createElement('div'); // do this OUTSIDE the render function below
  stories.add('Discussion Entry', () => {
    const annotationId = knobs.text('annotationId', '1');
    const authorImage = knobs.text('authorImage', 'https://semantic-ui.com/images/avatar/small/jenny.jpg');
    const authorName = knobs.text('authorName', 'Alice');
    const description = knobs.text('description', "Well! After such a fall as this, I shall think nothing of tumbling down stairs! How brave they'll all think me at home! Why, I wouldn't say anything about it, even if I fell off the top of the house!");
    const publishedDate = knobs.text('publishedDate', "2020-01-01");
    mainEl.innerHTML = `<discussion-entry
        annotation-id="${annotationId}"
        author-image="${authorImage}"
        author-name="${authorName}"
        description="${description}"
        published-date="${publishedDate}"
      ></<discussion-entry>`;
    return mainEl;
  }, { notes: readme });
}
