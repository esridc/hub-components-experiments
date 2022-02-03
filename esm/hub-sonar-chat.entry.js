import { r as registerInstance, h, H as Host } from './index-9fca3863.js';

const hubSonarChatCss = ":host{display:block}";

let HubSonarChat = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, h("hub-chat", { open: this.open, name: this.name, placeholder: this.placeholder, incomingMessages: this.sendMessages })));
  }
};
HubSonarChat.style = hubSonarChatCss;

export { HubSonarChat as hub_sonar_chat };
