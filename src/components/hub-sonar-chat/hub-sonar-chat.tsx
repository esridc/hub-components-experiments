import { Component, Host, Prop, Listen, h } from '@stencil/core';
import { IHubChat } from '../../utils/hub-types'

@Component({
  tag: 'hub-sonar-chat',
  styleUrl: 'hub-sonar-chat.css',
  shadow: true
})
export class HubSonarChat {

  @Prop() service:string = null;

  name:string = "Sonar";
  open:boolean = true;
  placeholder:string = "Ask a question...";
  @Prop() sendMessages:IHubChat = {messages: [
    {text: "Welcome to Sonar", type: "text", user: "user"}, 
    {text: "Search for Datasets", type: "action", user: "user", route: "/index"},
  ]}

  @Listen("onChatSubmitted")
  async onChatSubmittedHandler(event: CustomEvent): Promise<any> {
    console.debug("HubSonarChat: onChatSubmitted", event)
    let messages = undefined;

    if(this.service) {

      let path = event.detail.route ? event.detail.route : '/index'
      let url = `${this.service}${path}`;
      
      console.debug("HubSonarChat: service", url)
      
      let response = await fetch( url );
      messages = await response.json();

      console.debug("HubSonarChat: response", messages)

    } else {
      messages = {
        messages: [{text: "Thanks for " + event.detail.text, type: "text", user: "user"}],
        actions: [{text: "Search for Data"}]
      }
    }
    
    this.sendMessages = messages;
    return new Promise((_resolve, _reject) => {})
    // return "true";
  }


  render() {
    return (
      <Host>
        <hub-chat
            open={this.open}
            name={this.name}
            placeholder={this.placeholder}
            incomingMessages={this.sendMessages}
        ></hub-chat>
      </Host>
    );
  }

}
