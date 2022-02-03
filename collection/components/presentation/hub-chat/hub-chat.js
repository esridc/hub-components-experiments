import { Component, Host, h, State, Prop, Watch, Element, Event } from '@stencil/core';
import { send24, speechBubbles32, x32 } from "@esri/calcite-ui-icons";
export class HubChat {
  constructor() {
    /**
     * Chat bot name
     */
    this.name = "Sonar";
    /**
     * Current (or default) open state of the chatbox
     */
    this.open = true;
    /**
     * Default input placeholder
     */
    this.placeholder = "Send a message...";
    this.messageCount = 0;
    this.messages = [];
  }
  componentWillLoad() {
    this.incomingMessages.messages.map((message) => {
      console.log("HubChat willLoad", message);
      this.messageCount++;
      this.messages.push(message);
    });
  }
  componentDidRender() {
    console.debug("HubChat componentDidRender", [this.open, this.incomingMessages]);
    this.toggleChatbox(this.open);
  }
  openDidChange(newOpenState) {
    console.log("HubChat openDidChange", newOpenState);
    this.toggleChatbox(newOpenState);
  }
  receiveMessages(newMessages) {
    console.log("HubChat incomingMessagesDidChange", newMessages);
    window.setTimeout(() => {
      newMessages.messages.map((message) => {
        this.messageCount++;
        this.messages.push(message);
      });
    }, 1000);
  }
  // Send a message 
  sendMessage(message) {
    // Always send as user and text
    let convertMessage = {
      text: message.text,
      user: 'self',
      type: 'text',
      route: message.route
    };
    this.messageCount++;
    this.messages.push(convertMessage);
    console.log("HubChat sendMessage", convertMessage);
    this.onChatSubmitted.emit(convertMessage);
  }
  submitChat(e) {
    e.preventDefault();
    console.debug("HubChat submitChat", [this.chatInputEl.value]);
    this.sendMessage({
      text: this.chatInputEl.value,
      user: 'self',
      type: 'text'
    });
    // Clear out the user input
    this.chatInputEl.value = "";
  }
  // TODO: autosuggest like CLUI
  onInput(e) {
    e.preventDefault();
    //   // use this.chatInputEl.value instead.
    //   // this.chatInput = e.target.value;
    return 'true';
  }
  sendAction(action) {
    console.log("HubChat sendAction", action);
    this.sendMessage(action);
  }
  toggleChatbox(boxState = null) {
    console.debug("Hub Chat: toggleChatbox", boxState);
    if (boxState !== null) {
      this.open = boxState;
    }
    else {
      this.open = !this.open;
    }
    this.chatBoxEl.style.setProperty('transform', this.open ? "scale(1)" : "scale(0)");
    this.chatCircleEl.style.setProperty('transform', this.open ? "scale(0)" : "scale(1)");
  }
  render() {
    return (h(Host, null,
      h("div", { id: "body" },
        h("div", { id: "chat-circle", class: "btn btn-raised", onClick: () => this.toggleChatbox(), ref: (el) => this.chatCircleEl = el },
          h("div", { id: "chat-overlay" }),
          h("svg", { width: "32", height: "32" },
            h("path", { d: speechBubbles32 }))),
        h("div", { class: "chat-box", ref: (el) => this.chatBoxEl = el },
          h("div", { class: "chat-box-header" },
            this.name,
            h("span", { class: "chat-box-toggle", onClick: () => this.toggleChatbox() },
              h("svg", { width: "32", height: "32" },
                h("path", { d: x32 })))),
          h("div", { class: "chat-box-body" },
            h("div", { class: "chat-box-overlay" }),
            h("div", { class: "chat-logs" }, this.messages.map((message) => 
            //  add cm-msg- prefix below
            h("div", { id: "cm-msg-" + this.messageCount, class: `cm-msg-${message.type} chat-msg ${message.user ? message.user : 'user2'}` },
              h("span", { class: "msg-avatar" },
                h("img", { src: `https://i.pravatar.cc/150?u=${message.user ? message.user : 'user2'}@sonar` })),
              h("div", { innerHTML: message.text, class: `cm-msg-body cm-msg-${message.type}`, onClick: () => this.sendAction(message) }))))),
          h("div", { class: "chat-input" },
            h("form", { onSubmit: (e) => this.submitChat(e) },
              h("input", { type: "text", id: "chat-input", placeholder: this.placeholder, value: this.chatInput, onInput: e => this.onInput(e), ref: (el) => this.chatInputEl = el }),
              h("button", { type: "submit", class: "chat-submit", id: "chat-submit" },
                h("svg", { width: "32", height: "32" },
                  h("path", { d: send24 })))))))));
  }
  static get is() { return "hub-chat"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["hub-chat.css"]
  }; }
  static get styleUrls() { return {
    "$": ["hub-chat.css"]
  }; }
  static get properties() { return {
    "name": {
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
        "text": "Chat bot name"
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "\"Sonar\""
    },
    "open": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Current (or default) open state of the chatbox"
      },
      "attribute": "open",
      "reflect": true,
      "defaultValue": "true"
    },
    "placeholder": {
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
        "text": "Default input placeholder"
      },
      "attribute": "placeholder",
      "reflect": false,
      "defaultValue": "\"Send a message...\""
    },
    "incomingMessages": {
      "type": "unknown",
      "mutable": true,
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
        "text": "Set property to pass in messages. Can be used for default welcome message."
      }
    }
  }; }
  static get states() { return {
    "chatInput": {},
    "messageCount": {},
    "messages": {}
  }; }
  static get events() { return [{
      "method": "onChatSubmitted",
      "name": "onChatSubmitted",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emits the chat input"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "element"; }
  static get watchers() { return [{
      "propName": "open",
      "methodName": "openDidChange"
    }, {
      "propName": "incomingMessages",
      "methodName": "receiveMessages"
    }]; }
}
