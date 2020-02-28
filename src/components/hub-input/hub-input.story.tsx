// /* radar-map.story.js */
// import readme from './readme.md'
// export default {
//     notes: readme,

//     knobs: {
//       // This will result in the following call to knobs:
//       // knobs.number('b-number', 46, { range: true, min: 46, max: 47, step: 1 });
//       'address': {
//         type: 'text',
//         args: ['']
//       }
//     },
//     states: [
//         {
//             title: 'Search by address',
//             description: 'Recommends locations within the geographic extent.',
//             props: {
//               address: '1600 Pennsylvania Ave',
//               extent: '[[-77.24, 38.80], [-76.86, 38.99]]'
//             }
//           }
//     ]

//   }

import readme from './readme.md'

export default function(stories, _knobs) {
    const mainEl = document.createElement('div'); // do this OUTSIDE the render function below

    
    stories.add('Hub Input', () => {
      mainEl.innerHTML = `<hub-input></hub-input>`
  
      return mainEl;
    }, { notes: readme });
  }