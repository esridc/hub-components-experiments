import { h } from './index-17d4341f.js';
import { g as getElementDir } from './dom-29efd1ef.js';
var ICONS = {
    chevronsLeft: "chevrons-left",
    chevronsRight: "chevrons-right"
};
function getCalcitePosition(position, el) {
    var _a;
    return position || ((_a = el.closest("calcite-shell-panel")) === null || _a === void 0 ? void 0 : _a.position) || "start";
}
function toggleChildActionText(_b) {
    var parent = _b.parent, expanded = _b.expanded;
    parent.querySelectorAll("calcite-action").forEach(function (action) { return (action.textEnabled = expanded); });
}
var setTooltipReference = function (_b) {
    var tooltip = _b.tooltip, referenceElement = _b.referenceElement, expanded = _b.expanded, ref = _b.ref;
    if (tooltip) {
        tooltip.referenceElement = !expanded && referenceElement;
    }
    if (ref) {
        ref(referenceElement);
    }
    return referenceElement;
};
var CalciteExpandToggle = function (_b) {
    var expanded = _b.expanded, intlExpand = _b.intlExpand, intlCollapse = _b.intlCollapse, toggle = _b.toggle, el = _b.el, position = _b.position, tooltip = _b.tooltip, ref = _b.ref;
    var rtl = getElementDir(el) === "rtl";
    var expandText = expanded ? intlCollapse : intlExpand;
    var icons = [ICONS.chevronsLeft, ICONS.chevronsRight];
    if (rtl) {
        icons.reverse();
    }
    var end = getCalcitePosition(position, el) === "end";
    var expandIcon = end ? icons[1] : icons[0];
    var collapseIcon = end ? icons[0] : icons[1];
    var actionNode = (h("calcite-action", { icon: expanded ? expandIcon : collapseIcon, onClick: toggle, ref: function (referenceElement) { return setTooltipReference({ tooltip: tooltip, referenceElement: referenceElement, expanded: expanded, ref: ref }); }, text: expandText, textEnabled: expanded }));
    return tooltip ? h("calcite-tooltip-manager", null, actionNode) : actionNode;
};
export { CalciteExpandToggle as C, toggleChildActionText as t };
