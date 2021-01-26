var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, c as createEvent, h, H as Host } from './index-17d4341f.js';
var hubTopicPickerCss = ":host{display:block}calcite-chip.topic-selectable{cursor:pointer}calcite-chip:hover{-webkit-box-shadow:0 0 5px 0 rgba(76,76,76,.25);box-shadow:0 0 5px 0 rgba(76,76,76,.25)}";
var HubTopicPicker = /** @class */ (function () {
    function HubTopicPicker(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Array of topics to be displayed
         */
        this.topicsAvailable = ['education', 'health', 'recreation', 'transportation'];
        /**
         * Array of topics that are current selected
         */
        this.topicsSelected = []; // 'education', 'transportation'
        /**
         * Option to allow for selected & de-selecting topics
         */
        this.allowSelection = true;
        this.topicSelected = createEvent(this, "topicSelected", 7);
        this.topicsChanged = createEvent(this, "topicsChanged", 7);
        this.editorUpdated = createEvent(this, "editorUpdated", 7);
    }
    HubTopicPicker.prototype.componentWillLoad = function () {
        console.log("hub-topic-picker: this.allowSelection", this.allowSelection);
        if (!!this.values) {
            console.log("hub-topic-picker: componentWillLoad: values", this.values);
            this.topicsSelected = this.values.split(",");
        }
        if (!!this.options) {
            console.log("hub-topic-picker: componentWillLoad: options", this.options);
            this.topicsAvailable = this.options.split(",");
        }
        console.log('hub-topic-picker: componentWillLoad', this.topicsAvailable, this.values);
        this.updateTopics();
    };
    HubTopicPicker.prototype.updateTopics = function () {
        var _this = this;
        this.topicsState = [];
        this.topicsAvailable.forEach(function (element) {
            _this.topicsState.push({
                name: element,
                selected: _this.topicsSelected.includes(element)
            });
        });
        // Send event that topics changed
        this.topicsChanged.emit(this.topicsState);
        this.editorUpdated.emit(this.topicsSelected);
    };
    HubTopicPicker.prototype.onTopicSelected = function (selectedName, selectedState) {
        // If selection isn't allowed, block events
        if (!this.allowSelection) {
            return false;
        }
        this.topicSelected.emit({ name: selectedName, selected: selectedState });
        if (selectedState) {
            this.topicsSelected = __spreadArrays(this.topicsSelected, [selectedName]);
        }
        else {
            this.topicsSelected = this.topicsSelected.filter(function (topic) { return (topic !== selectedName); });
        }
    };
    HubTopicPicker.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("slot", null), this.topicsState.map(function (topic) { return h("calcite-chip", { class: _this.allowSelection ? "topic-selectable" : "", onClick: function (_ref) { return _this.onTopicSelected(topic.name, !topic.selected); }, value: topic.name, appearance: topic.selected ? 'solid' : 'clear', dismissible: _this.allowSelection && topic.selected }, topic.name); })));
    };
    Object.defineProperty(HubTopicPicker, "watchers", {
        get: function () {
            return {
                "topicsSelected": ["updateTopics"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return HubTopicPicker;
}());
HubTopicPicker.style = hubTopicPickerCss;
export { HubTopicPicker as hub_topic_picker };
