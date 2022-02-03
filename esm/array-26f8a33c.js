/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
function getRoundRobinIndex(index, total) {
  return (index + total) % total;
}

export { getRoundRobinIndex as g };
