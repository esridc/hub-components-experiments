'use strict';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
/**
 * This utility ensures observers are created only for browser contexts.
 *
 * @param type - the type of observer to create
 * @param callback - the observer callback
 * @param options - the observer options
 */
function createObserver(type, callback, options) {
  const Observer = getObserver(type);
  return new Observer(callback, options) ;
}
function getObserver(type) {
  return (type === "intersection" ? IntersectionObserver : type === "mutation" ? MutationObserver : ResizeObserver);
}

exports.createObserver = createObserver;
