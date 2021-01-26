function rgbToHex(color) {
    var r = color.r, g = color.g, b = color.b;
    return ("#" + r.toString(16).padStart(2, "0") + g.toString(16).padStart(2, "0") + b
        .toString(16)
        .padStart(2, "0")).toLowerCase();
}
var hexChar = /^[0-9A-F]{1}$/i;
var shortHandHex = /^#[0-9A-F]{3}$/i;
var longhandHex = /^#[0-9A-F]{6}$/i;
function isValidHex(hex) {
    return isShorthandHex(hex) || isLonghandHex(hex);
}
function isShorthandHex(hex) {
    return hex && hex.length === 4 && shortHandHex.test(hex);
}
function isLonghandHex(hex) {
    return hex && hex.length === 7 && longhandHex.test(hex);
}
function normalizeHex(hex) {
    hex = hex.toLowerCase();
    if (!hex.startsWith("#")) {
        hex = "#" + hex;
    }
    if (isShorthandHex(hex)) {
        return rgbToHex(hexToRGB(hex));
    }
    return hex;
}
function hexToRGB(hex) {
    if (!isValidHex(hex)) {
        return null;
    }
    hex = hex.replace("#", "");
    if (hex.length === 3) {
        var _a = hex.split(""), first = _a[0], second = _a[1], third = _a[2];
        var r_1 = parseInt("" + first + first, 16);
        var g_1 = parseInt("" + second + second, 16);
        var b_1 = parseInt("" + third + third, 16);
        return { r: r_1, g: g_1, b: b_1 };
    }
    var r = parseInt(hex.slice(0, 2), 16);
    var g = parseInt(hex.slice(2, 4), 16);
    var b = parseInt(hex.slice(4, 6), 16);
    return { r: r, g: g, b: b };
}
// these utils allow users to pass enum values as strings without having to access the enum
// based on the approach suggested by https://github.com/microsoft/TypeScript/issues/17690#issuecomment-321365759,
var enumify = function (x) { return x; };
var CSSColorMode = enumify({
    HEX: "hex",
    HEXA: "hexa",
    RGB_CSS: "rgb-css",
    RGBA_CSS: "rgba-css",
    HSL_CSS: "hsl-css",
    HSLA_CSS: "hsla-css"
});
var ObjectColorMode = enumify({
    RGB: "rgb",
    RGBA: "rgba",
    HSL: "hsl",
    HSLA: "hsla",
    HSV: "hsv",
    HSVA: "hsva"
});
function parseMode(colorValue) {
    if (typeof colorValue === "string") {
        if (colorValue.startsWith("#")) {
            var length = colorValue.length;
            if (length === 4 || length === 7) {
                return CSSColorMode.HEX;
            }
            if (length === 5 || length === 9) {
                return CSSColorMode.HEXA;
            }
        }
        if (colorValue.startsWith("rgba(")) {
            return CSSColorMode.RGBA_CSS;
        }
        if (colorValue.startsWith("rgb(")) {
            return CSSColorMode.RGB_CSS;
        }
        if (colorValue.startsWith("hsl(")) {
            return CSSColorMode.HSL_CSS;
        }
        if (colorValue.startsWith("hsla(")) {
            return CSSColorMode.HSLA_CSS;
        }
    }
    if (typeof colorValue === "object") {
        if (hasChannels(colorValue, "r", "g", "b")) {
            return hasChannels(colorValue, "a") ? ObjectColorMode.RGBA : ObjectColorMode.RGB;
        }
        if (hasChannels(colorValue, "h", "s", "l")) {
            return hasChannels(colorValue, "a") ? ObjectColorMode.HSLA : ObjectColorMode.HSL;
        }
        if (hasChannels(colorValue, "h", "s", "v")) {
            return hasChannels(colorValue, "a") ? ObjectColorMode.HSVA : ObjectColorMode.HSV;
        }
    }
    return null;
}
function hasChannels(colorObject) {
    var channels = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        channels[_i - 1] = arguments[_i];
    }
    return channels.every(function (channel) { return channel && colorObject && "" + channel in colorObject; });
}
function colorEqual(value1, value2) {
    return (value1 === null || value1 === void 0 ? void 0 : value1.rgbNumber()) === (value2 === null || value2 === void 0 ? void 0 : value2.rgbNumber());
}
export { CSSColorMode as C, isLonghandHex as a, hexChar as b, colorEqual as c, hexToRGB as h, isValidHex as i, normalizeHex as n, parseMode as p, rgbToHex as r };
