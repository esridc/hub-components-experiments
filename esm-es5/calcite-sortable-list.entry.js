import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-17d4341f.js';
import { S as Sortable } from './sortable.esm-98c2e482.js';
var CalciteSortableList = /** @class */ (function () {
    function CalciteSortableList(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * The class on the handle elements.
         */
        this.handleSelector = "calcite-handle";
        /**
         * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
         */
        this.disabled = false;
        /**
         * When true, content is waiting to be loaded. This state shows a busy indicator.
         */
        this.loading = false;
        this.handleActivated = false;
        this.items = [];
        this.observer = new MutationObserver(function () {
            _this.cleanUpDragAndDrop();
            _this.items = Array.from(_this.el.children);
            _this.setUpDragAndDrop();
        });
        this.calciteListOrderChange = createEvent(this, "calciteListOrderChange", 7);
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    CalciteSortableList.prototype.connectedCallback = function () {
        this.items = Array.from(this.el.children);
        this.setUpDragAndDrop();
        this.beginObserving();
    };
    CalciteSortableList.prototype.disconnectedCallback = function () {
        this.observer.disconnect();
        this.cleanUpDragAndDrop();
    };
    CalciteSortableList.prototype.calciteHandleNudgeHandler = function (event) {
        var sortItem = this.items.find(function (item) {
            return item.contains(event.detail.handle) || event.composedPath().includes(item);
        });
        var lastIndex = this.items.length - 1;
        var startingIndex = this.items.indexOf(sortItem);
        var appendInstead = false;
        var buddyIndex;
        switch (event.detail.direction) {
            case "up":
                event.preventDefault();
                if (startingIndex === 0) {
                    appendInstead = true;
                }
                else {
                    buddyIndex = startingIndex - 1;
                }
                break;
            case "down":
                event.preventDefault();
                if (startingIndex === lastIndex) {
                    buddyIndex = 0;
                }
                else if (startingIndex === lastIndex - 1) {
                    appendInstead = true;
                }
                else {
                    buddyIndex = startingIndex + 2;
                }
                break;
            default:
                return;
        }
        this.observer.disconnect();
        if (appendInstead) {
            sortItem.parentElement.appendChild(sortItem);
        }
        else {
            sortItem.parentElement.insertBefore(sortItem, this.items[buddyIndex]);
        }
        this.items = Array.from(this.el.children);
        event.detail.handle.activated = true;
        event.detail.handle.setFocus();
        this.beginObserving();
    };
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    CalciteSortableList.prototype.setUpDragAndDrop = function () {
        var _this = this;
        this.sortable = Sortable.create(this.el, {
            handle: this.handleSelector,
            // Changed sorting within list
            onUpdate: function () {
                _this.items = Array.from(_this.el.children);
                _this.calciteListOrderChange.emit();
            },
            // Element dragging started
            onStart: function () {
                _this.observer.disconnect();
            },
            // Element dragging ended
            onEnd: function () {
                _this.beginObserving();
            }
        });
    };
    CalciteSortableList.prototype.cleanUpDragAndDrop = function () {
        this.sortable.destroy();
        this.sortable = null;
    };
    CalciteSortableList.prototype.beginObserving = function () {
        this.observer.observe(this.el, { childList: true, subtree: true });
    };
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    CalciteSortableList.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    Object.defineProperty(CalciteSortableList.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CalciteSortableList;
}());
export { CalciteSortableList as calcite_sortable_list };
