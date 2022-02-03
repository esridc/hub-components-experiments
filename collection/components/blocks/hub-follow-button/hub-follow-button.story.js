import readme from './readme.md';
/* radar-map.story.js */
export default function (stories, knobs) {
  const mainEl = document.createElement('div'); // do this OUTSIDE the render function below
  stories.add('Hub Follow Button', () => {
    const followtext = knobs.text('followtext', 'Follow Hub User Lab');
    const unfollowtext = knobs.text('unfollowtext', 'Unfollow Hub User Lab');
    const clientid = knobs.text('clientid', 'WXC842NRBVB6NZ2r');
    const initiativeid = knobs.text('initiativeid', 'e6b1634e035a4dada054454bd0daf786');
    const code = `<hub-follow-button class="child" followtext="${followtext}" unfollowtext="${unfollowtext}" clientid="${clientid}" initiativeid="${initiativeid}"> </hub-follow-button>`;
    mainEl.innerHTML = code;
    return mainEl;
  }, { notes: readme });
}
