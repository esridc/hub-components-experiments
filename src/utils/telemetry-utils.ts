// Sends an event via the document for the <hub-telemetry> component
export const sendTelemetry = ({category, action, label}):boolean => {
    console.log("sendTelemetry", {category, action, label})
    var event = new CustomEvent("hub-telemetry-event", {
        detail: {
            category: category, 
            action: action, 
            label: label
        }
    });

  return window.dispatchEvent(event);
}
