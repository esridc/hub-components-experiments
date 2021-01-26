var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function nodeListToArray(nodeList) {
    return Array.isArray(nodeList) ? nodeList : Array.from(nodeList);
}
function getElementDir(el) {
    return getElementProp(el, "dir", "ltr");
}
function getElementTheme(el) {
    return getElementProp(el, "theme", "light");
}
function getElementProp(el, prop, fallbackValue, crossShadowBoundary) {
    if (crossShadowBoundary === void 0) { crossShadowBoundary = false; }
    var selector = "[" + prop + "]";
    var closest = crossShadowBoundary ? closestElementCrossShadowBoundary(selector, el) : el.closest(selector);
    return closest ? closest.getAttribute(prop) : fallbackValue;
}
function closestElementCrossShadowBoundary(selector, base) {
    if (base === void 0) { base = this; }
    // based on https://stackoverflow.com/q/54520554/194216
    function closestFrom(el) {
        if (!el || el === document || el === window)
            return null;
        var found = el.closest(selector);
        return found ? found : closestFrom(el.getRootNode().host);
    }
    return closestFrom(base);
}
function focusElement(el) {
    if (!el) {
        return;
    }
    typeof el.setFocus === "function" ? el.setFocus() : el.focus();
}
function getSlotted(element, slotName, options) {
    var slotSelector = "[slot=\"" + slotName + "\"]";
    if (options === null || options === void 0 ? void 0 : options.all) {
        return queryMultiple(element, slotSelector, options);
    }
    return querySingle(element, slotSelector, options);
}
function queryMultiple(element, slotSelector, options) {
    var matches = Array.from(element.querySelectorAll(slotSelector));
    matches = options && options.direct === false ? matches : matches.filter(function (el) { return el.parentElement === element; });
    var selector = options === null || options === void 0 ? void 0 : options.selector;
    return selector
        ? matches
            .map(function (item) { return Array.from(item.querySelectorAll(selector)); })
            .reduce(function (previousValue, currentValue) { return __spreadArrays(previousValue, currentValue); }, [])
            .filter(function (match) { return !!match; })
        : matches;
}
function querySingle(element, slotSelector, options) {
    var match = element.querySelector(slotSelector);
    match = options && options.direct === false ? match : (match === null || match === void 0 ? void 0 : match.parentElement) === element ? match : null;
    var selector = options === null || options === void 0 ? void 0 : options.selector;
    return selector ? match.querySelector(selector) : match;
}
function filterDirectChildren(el, selector) {
    return Array.from(el.children).filter(function (child) { return child.matches(selector); });
}
function getElementByAttributeId(element, attrName) {
    var id = element === null || element === void 0 ? void 0 : element.getAttribute(attrName);
    return (id && document.getElementById(id)) || null;
}
function hasLabel(labelEl, el) {
    return labelEl.contains(el);
}
// set a default icon from a defined set or allow an override with an icon name string
function setRequestedIcon(iconObject, iconValue, matchedValue) {
    if (typeof iconValue === "string" && iconValue !== "") {
        return iconValue;
    }
    else if (iconValue === "") {
        return iconObject[matchedValue];
    }
}
export { getSlotted as a, focusElement as b, getElementTheme as c, getElementProp as d, getElementByAttributeId as e, filterDirectChildren as f, getElementDir as g, hasLabel as h, nodeListToArray as n, setRequestedIcon as s };
