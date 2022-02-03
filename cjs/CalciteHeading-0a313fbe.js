'use strict';

const index = require('./index-dad2b533.js');

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
function constrainHeadingLevel(level) {
  return Math.min(Math.max(Math.ceil(level), 1), 6);
}
const CalciteHeading = (props, children) => {
  const HeadingTag = `h${props.level}`;
  delete props.level;
  return index.h(HeadingTag, Object.assign({}, props), children);
};

exports.CalciteHeading = CalciteHeading;
exports.constrainHeadingLevel = constrainHeadingLevel;
