var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { d as getAssetPath } from './index-17d4341f.js';
/**
 * List of supported country codes
 * @private
 */
var supportedLocales = [
    "ar",
    "bs",
    "ca",
    "cs",
    "da",
    "de",
    "de-CH",
    "el",
    "en",
    "en-AU",
    "en-CA",
    "en-GB",
    "es",
    "es-MX",
    "et",
    "fi",
    "fr",
    "fr-CH",
    "he",
    "hi",
    "hr",
    "hu",
    "id",
    "it",
    "it-CH",
    "ja",
    "ko",
    "lt",
    "lv",
    "mk",
    "nb",
    "nl",
    "pl",
    "pt",
    "pt-PT",
    "ro",
    "ru",
    "sk",
    "sl",
    "sr",
    "sv",
    "th",
    "tr",
    "uk",
    "vi",
    "zh-CN",
    "zh-HK",
    "zh-TW"
];
/**
 * Get supported locale code from raw user input
 * Exported for testing purposes.
 * @private
 */
function getSupportedLocale(lang) {
    if (lang === void 0) { lang = ""; }
    if (supportedLocales.indexOf(lang) > -1) {
        return lang;
    }
    else {
        var base = lang.split("-")[0];
        if (supportedLocales.indexOf(base) > -1) {
            return base;
        }
        else {
            return "en";
        }
    }
}
/**
 * CLDR cache.
 * Exported for testing purposes.
 * @private
 */
var translationCache = {};
/**
 * CLDR request cache.
 * Exported for testing purposes.
 * @private
 */
var requestCache = {};
/**
 * Fetch calendar data for a given locale from list of supported languages
 * @public
 */
function getLocaleData(lang) {
    return __awaiter(this, void 0, void 0, function () {
        var locale, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    locale = getSupportedLocale(lang);
                    if (translationCache[locale]) {
                        return [2 /*return*/, translationCache[locale]];
                    }
                    if (!requestCache[locale]) {
                        requestCache[locale] = fetch(getAssetPath("./assets/calcite-date-picker/nls/" + locale + ".json"))
                            .then(function (resp) { return resp.json(); })
                            .catch(function () {
                            console.error("Translations for \"" + locale + "\" not found or invalid, falling back to english");
                            return getLocaleData("en");
                        });
                    }
                    return [4 /*yield*/, requestCache[locale]];
                case 1:
                    data = _a.sent();
                    translationCache[locale] = data;
                    return [2 /*return*/, data];
            }
        });
    });
}
var TEXT = {
    nextMonth: "next month",
    prevMonth: "previous month"
};
export { TEXT as T, getLocaleData as g };
