'use strict';

// Sends an event via the document for the <hub-telemetry> component
const sendTelemetry = ({ category, action, label }) => {
  console.log("sendTelemetry", { category, action, label });
  const detail = {
    category: category,
    action: action,
    label: label
  };
  // state.telemetry.logEvent(detail)
  var event = new CustomEvent("hub-telemetry-event", { detail });
  return window.dispatchEvent(event);
};

exports.sendTelemetry = sendTelemetry;
