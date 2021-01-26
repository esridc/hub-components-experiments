import { r as registerInstance, h, g as getElement, H as Host } from './index-17d4341f.js';
import { g as getElementDir, c as getElementTheme } from './dom-29efd1ef.js';
import { h as hexToRGB, i as isValidHex } from './utils-c43491f4.js';
/**
 * Convert a string to a valid hex by hashing its contents
 * and using the hash as a seed for three distinct color values
 */
function stringToHex(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var hex = "#";
    for (var j = 0; j < 3; j++) {
        var value = (hash >> (j * 8)) & 0xff;
        hex += ("00" + value.toString(16)).substr(-2);
    }
    return hex;
}
/**
 * Find the hue of a color given the separate RGB color channels
 */
function rgbToHue(rgb) {
    var r = rgb.r, g = rgb.g, b = rgb.b;
    r /= 255;
    g /= 255;
    b /= 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var delta = max - min;
    if (max === min) {
        return 0;
    }
    var hue = (max + min) / 2;
    switch (max) {
        case r:
            hue = (g - b) / delta + (g < b ? 6 : 0);
            break;
        case g:
            hue = (b - r) / delta + 2;
            break;
        case b:
            hue = (r - g) / delta + 4;
            break;
    }
    return Math.round(hue * 60);
}
/**
 * For a hex color, find the hue
 * @param hex {string} - form of "#------"
 */
function hexToHue(hex) {
    return rgbToHue(hexToRGB(hex));
}
var calciteAvatarCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:50%;overflow:hidden}:host([scale=s]){width:1.5rem;height:1.5rem;font-size:var(--calcite-font-size--3)}:host([scale=m]){width:2rem;height:2rem;font-size:var(--calcite-font-size--2)}:host([scale=l]){width:2.5rem;height:2.5rem;font-size:var(--calcite-font-size--1)}.icon{display:-ms-flexbox;display:flex}.background{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:50%}.initials{font-weight:var(--calcite-font-weight-bold);text-transform:uppercase;color:var(--calcite-ui-text-3)}.thumbnail{width:100%;height:100%;border-radius:50%}";
var CalciteAvatar = /** @class */ (function () {
    function CalciteAvatar(hostRef) {
        registerInstance(this, hostRef);
        /** specify the scale of the avatar, defaults to m */
        this.scale = "m";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** True if thumnail fails to load */
        this.error = false;
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteAvatar.prototype.connectedCallback = function () {
        // prop validations
        var scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
    };
    CalciteAvatar.prototype.render = function () {
        var dir = getElementDir(this.el);
        var content = this.determineContent();
        return h(Host, { dir: dir }, content);
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    CalciteAvatar.prototype.determineContent = function () {
        var _this = this;
        if (this.thumbnail && !this.error) {
            return (h("img", { alt: "", class: "thumbnail", onError: function () { return (_this.error = true); }, src: this.thumbnail }));
        }
        var initials = this.generateInitials();
        var backgroundColor = this.generateFillColor();
        return (h("span", { class: "background", style: { backgroundColor: backgroundColor } }, initials ? (h("span", { "aria-hidden": "true", class: "initials" }, initials)) : (h("calcite-icon", { class: "icon", icon: "user", scale: this.scale, theme: this.theme }))));
    };
    /**
     * Generate a valid background color that is consistent and unique to this user
     */
    CalciteAvatar.prototype.generateFillColor = function () {
        var _a = this, userId = _a.userId, username = _a.username, fullName = _a.fullName;
        var theme = getElementTheme(this.el);
        var id = userId && "#" + userId.substr(userId.length - 6);
        var name = username || fullName || "";
        var hex = id && isValidHex(id) ? id : stringToHex(name);
        // if there is not unique information, or an invalid hex is produced, return a default
        if ((!userId && !name) || !isValidHex(hex)) {
            return "var(--calcite-ui-foreground-2)";
        }
        var hue = hexToHue(hex);
        var l = theme === "dark" ? 20 : 90;
        return "hsl(" + hue + ", 60%, " + l + "%)";
    };
    /**
     * Use fullname or username to generate initials
     */
    CalciteAvatar.prototype.generateInitials = function () {
        var _a = this, fullName = _a.fullName, username = _a.username;
        if (fullName) {
            return fullName
                .trim()
                .split(" ")
                .map(function (name) { return name.substring(0, 1); })
                .join("");
        }
        else if (username) {
            return username.substring(0, 2);
        }
        return false;
    };
    Object.defineProperty(CalciteAvatar.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CalciteAvatar;
}());
CalciteAvatar.style = calciteAvatarCss;
export { CalciteAvatar as calcite_avatar };
