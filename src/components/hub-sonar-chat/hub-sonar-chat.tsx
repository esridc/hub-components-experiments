import { Component, Host, Prop, Listen, h } from '@stencil/core';
import { IHubChat } from '../../utils/hub-types'

@Component({
  tag: 'hub-sonar-chat',
  styleUrl: 'hub-sonar-chat.css',
  shadow: true
})
export class HubSonarChat {

  name:string = "Sonar";
  open:boolean = true;
  placeholder:string = "Ask a question...";
  @Prop() welcomeMessages:IHubChat = {messages: [
    {text: "Welcome to Sonar", type: "text", user: "user"}, 
    {text: "Search for Datasets", type: "action", user: "user"},
  ]}

  @Listen("onChatSubmitted")
  onChatSubmittedHandler(event: CustomEvent): string {
    console.debug("HubSonarChat: onChatSubmitted", event)
    
    this.welcomeMessages = {
      messages: [{text: "Thanks for " + event.detail.text, type: "text", user: "user"}],
      actions: [{text: "Search for Data"}]
    }
    return "true";
  }


  render() {
    console.log("HubSonarChat render", this.welcomeMessages)
    return (
      <Host>
        <hub-chat
            open={this.open}
            name={this.name}
            placeholder={this.placeholder}
            incomingMessages={this.welcomeMessages}
        ></hub-chat>
      </Host>
    );
  }

}
