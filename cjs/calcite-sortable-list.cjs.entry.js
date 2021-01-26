'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ad6d6974.js');
const sortable_esm = require('./sortable.esm-45a0eb25.js');

const CalciteSortableList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.observer = new MutationObserver(() => {
            this.cleanUpDragAndDrop();
            this.items = Array.from(this.el.children);
            this.setUpDragAndDrop();
        });
        this.calciteListOrderChange = index.createEvent(this, "calciteListOrderChange", 7);
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    connectedCallback() {
        this.items = Array.from(this.el.children);
        this.setUpDragAndDrop();
        this.beginObserving();
    }
    disconnectedCallback() {
        this.observer.disconnect();
        this.cleanUpDragAndDrop();
    }
    calciteHandleNudgeHandler(event) {
        const sortItem = this.items.find((item) => {
            return item.contains(event.detail.handle) || event.composedPath().includes(item);
        });
        const lastIndex = this.items.length - 1;
        const startingIndex = this.items.indexOf(sortItem);
        let appendInstead = false;
        let buddyIndex;
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
    }
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    setUpDragAndDrop() {
        this.sortable = sortable_esm.Sortable.create(this.el, {
            handle: this.handleSelector,
            // Changed sorting within list
            onUpdate: () => {
                this.items = Array.from(this.el.children);
                this.calciteListOrderChange.emit();
            },
            // Element dragging started
            onStart: () => {
                this.observer.disconnect();
            },
            // Element dragging ended
            onEnd: () => {
                this.beginObserving();
            }
        });
    }
    cleanUpDragAndDrop() {
        this.sortable.destroy();
        this.sortable = null;
    }
    beginObserving() {
        this.observer.observe(this.el, { childList: true, subtree: true });
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        return (index.h(index.Host, null, index.h("slot", null)));
    }
    get el() { return index.getElement(this); }
};

exports.calcite_sortable_list = CalciteSortableList;
