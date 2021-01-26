// Sends an event via the document for the <hub-telemetry> component
var sendTelemetry = function (_a) {
    var category = _a.category, action = _a.action, label = _a.label;
    console.log("sendTelemetry", { category: category, action: action, label: label });
    var detail = {
        category: category,
        action: action,
        label: label
    };
    // state.telemetry.logEvent(detail)
    var event = new CustomEvent("hub-telemetry-event", { detail: detail });
    return window.dispatchEvent(event);
};
export { sendTelemetry as s };
