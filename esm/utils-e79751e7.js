import { n as nodeListToArray } from './dom-b47352c7.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const ComboboxItem = "CALCITE-COMBOBOX-ITEM";
const ComboboxItemGroup = "CALCITE-COMBOBOX-ITEM-GROUP";
const ComboboxChildSelector = `${ComboboxItem}, ${ComboboxItemGroup}`;
const ComboboxDefaultPlacement = "bottom-leading";

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
function getAncestors(element) {
  var _a, _b;
  const parent = (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.closest(ComboboxChildSelector);
  const grandparent = (_b = parent === null || parent === void 0 ? void 0 : parent.parentElement) === null || _b === void 0 ? void 0 : _b.closest(ComboboxChildSelector);
  return [parent, grandparent].filter((el) => el);
}
function getItemAncestors(item) {
  var _a;
  return (((_a = item.ancestors) === null || _a === void 0 ? void 0 : _a.filter((el) => el.nodeName === "CALCITE-COMBOBOX-ITEM")) || []);
}
function getItemChildren(item) {
  return nodeListToArray(item.querySelectorAll("calcite-combobox-item"));
}
function hasActiveChildren(node) {
  const items = nodeListToArray(node.querySelectorAll("calcite-combobox-item"));
  return items.filter((item) => item.selected).length > 0;
}
function getDepth(element) {
  const result = document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group", element, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  return result.snapshotLength;
}

export { ComboboxChildSelector as C, getItemChildren as a, ComboboxItem as b, ComboboxItemGroup as c, ComboboxDefaultPlacement as d, getAncestors as e, getDepth as f, getItemAncestors as g, hasActiveChildren as h };
