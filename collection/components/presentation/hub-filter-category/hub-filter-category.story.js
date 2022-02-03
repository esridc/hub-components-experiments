import readme from './readme.md';
/* hub-filter-category.story.js */
export default function (stories, knobs) {
  const mainEl = document.createElement('div'); // do this OUTSIDE the render function below
  stories.add('Hub Filter Category', () => {
    const name = knobs.text('name', "Categories");
    const facet = knobs.text('facet', "groupcategories");
    const group = knobs.text('group', "eca7c9c83df04cf5bf916ca487362aae");
    const facettype = knobs.select('facettype', ["tree", "checkbox"], "tree");
    const code = `<hub-filter-category 
            facet="${facet}" 
            facettype="${facettype}"
            group="${group}"
            name="${name}"
            > </hub-filter-category>`;
    mainEl.innerHTML = code;
    return mainEl;
  }, { notes: readme });
}
