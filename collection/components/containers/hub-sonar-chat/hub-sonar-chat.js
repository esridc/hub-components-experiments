import { Component, Host, Prop, Listen, h } from '@stencil/core';
export class HubSonarChat {
  constructor() {
    this.service = null;
    this.name = "Sonar";
    this.open = true;
    this.placeholder = "Ask a question...";
    this.sendMessages = { messages: [
        { text: "Welcome to Sonar", type: "text", user: "user2" },
        { text: "Search for Datasets", type: "action", user: "user2", route: "/index" },
      ] };
  }
  async onChatSubmittedHandler(event) {
    console.debug("HubSonarChat: onChatSubmitted", event);
    let messages = undefined;
    if (this.service) {
      let path = event.detail.route ? event.detail.route : '/index';
      let url = `${this.service}${path}`;
      console.debug("HubSonarChat: service", url);
      let response = await fetch(url);
      messages = await response.json();
      console.debug("HubSonarChat: response", messages);
    }
    else {
      messages = {
        messages: [{ text: "Thanks for " + event.detail.text, type: "text", user: "user2" }],
        actions: [{ text: "Search for Data" }]
      };
    }
    this.sendMessages = messages;
    return new Promise((_resolve, _reject) => { });
    // return "true";
  }
  render() {
    return (h(Host, null,
      h("hub-chat", { open: this.open, name: this.name, placeholder: this.placeholder, incomingMessages: this.sendMessages })));
  }
  static get is() { return "hub-sonar-chat"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-sonar-chat.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-sonar-chat.css"]
  }; }
  static get properties() { return {
    "service": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "service",
      "reflect": false,
      "defaultValue": "null"
    },
    "sendMessages": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "IHubChat",
        "resolved": "IHubChat",
        "references": {
          "IHubChat": {
            "location": "import",
            "path": "../../../utils/hub-types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "{messages: [\n    {text: \"Welcome to Sonar\", type: \"text\", user: \"user2\"}, \n    {text: \"Search for Datasets\", type: \"action\", user: \"user2\", route: \"/index\"},\n  ]}"
    }
  }; }
  static get listeners() { return [{
      "name": "onChatSubmitted",
      "method": "onChatSubmittedHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
