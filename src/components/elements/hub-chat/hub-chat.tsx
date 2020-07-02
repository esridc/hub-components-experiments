import { Component, Host, h, State, Prop, Watch, Element, Event, EventEmitter } from '@stencil/core';
import { send24, speechBubbles32, x32} from "@esri/calcite-ui-icons";
import { IHubChat, IHubMessage } from '../../../utils/hub-types'

@Component({
  tag: 'hub-chat',
  styleUrl: 'hub-chat.css',
  shadow: true
})
export class HubChat {

  @Element() element: HTMLElement;
  chatInputEl: HTMLInputElement; 
  chatBoxEl: HTMLDivElement; 
  chatCircleEl: HTMLDivElement; 

  /**
   * Chat bot name
   */
  @Prop() name:string = "Sonar";

  /**
   * Current (or default) open state of the chatbox
   */
  @Prop({ mutable: true, reflect: true }) open:boolean = true;

  /**
   * Default input placeholder
   */
  @Prop() placeholder:string = "Send a message...";

  /**
   * Set property to pass in messages. Can be used for default welcome message.
   */
  @Prop({ mutable: true, reflect: true }) incomingMessages:IHubChat;

  /** Emits the chat input */
  @Event({ 
    eventName: 'onChatSubmitted',
    composed: true,
    cancelable: true,
    bubbles: true
  }) onChatSubmitted: EventEmitter;

  @State() chatInput:string; 
  @State() messageCount:number = 0;
  @State() messages:Array<any> = [];
  
  componentWillLoad() {
    this.incomingMessages.messages.map((message) => {
      console.log("HubChat willLoad", message);
      this.messageCount++;
      this.messages.push(message);
    })    
  }
  componentDidRender() {
    console.debug("HubChat componentDidRender", [this.open, this.incomingMessages])
    this.toggleChatbox(this.open);
  }

  @Watch('open')
  openDidChange(newOpenState) {
    console.log("HubChat openDidChange", newOpenState)
    this.toggleChatbox(newOpenState)
  }

  @Watch('incomingMessages')
  receiveMessages( newMessages:IHubChat ) {
    console.log("HubChat incomingMessagesDidChange", newMessages)
    window.setTimeout(() => {
      newMessages.messages.map((message) => {
        this.messageCount++;
        this.messages.push(message);
      })
    }, 1000);

  }

  // Send a message 
  sendMessage(message:IHubMessage) {

    // Always send as user and text
    let convertMessage =  {
      text: message.text, 
      user: 'self',
      type: 'text',
      route: message.route
    }

    this.messageCount++;
    this.messages.push(convertMessage);
    console.log("HubChat sendMessage", convertMessage);
    
    this.onChatSubmitted.emit( convertMessage );
  }

  submitChat(e) {
    e.preventDefault();
    console.debug("HubChat submitChat", [this.chatInputEl.value])

    this.sendMessage({
      text: this.chatInputEl.value, 
      user: 'self', 
      type: 'text'
    })
    
    // Clear out the user input
    this.chatInputEl.value = "";
        
  }

  // TODO: autosuggest like CLUI
  onInput(e): string {
    e.preventDefault();
  //   // use this.chatInputEl.value instead.
  //   // this.chatInput = e.target.value;
    return 'true';
  }

  sendAction(action:IHubMessage) {
    console.log("HubChat sendAction", action);
    this.sendMessage(action)
  }

  toggleChatbox(boxState:boolean = null) {
    console.debug("Hub Chat: toggleChatbox", boxState)
    if(boxState !== null) {
      this.open = boxState;
    } else {
      this.open = !this.open;
    }
    
    this.chatBoxEl.style.setProperty('transform', this.open ? "scale(1)" : "scale(0)")
    this.chatCircleEl.style.setProperty('transform', this.open ? "scale(0)" : "scale(1)")
  }

  render() {
    return (
      <Host>
        <div id="body">  
          <div id="chat-circle" class="btn btn-raised" onClick={() => this.toggleChatbox()} ref={(el: HTMLDivElement) => this.chatCircleEl = el}>
            <div id="chat-overlay"></div>
            <svg width="32" height="32"><path d={speechBubbles32}></path></svg>
          </div>
          
          <div class="chat-box" ref={(el: HTMLDivElement) => this.chatBoxEl = el}>
            <div class="chat-box-header">
              {this.name}
              <span class="chat-box-toggle" onClick={() => this.toggleChatbox()}>
                <svg width="32" height="32"><path d={x32}></path></svg>
              </span>
            </div>
            <div class="chat-box-body">
              <div class="chat-box-overlay">   
              </div>
              <div class="chat-logs">

              {this.messages.map((message) =>           
                //  add cm-msg- prefix below
                <div id={"cm-msg-" + this.messageCount} class={`cm-msg-${message.type} chat-msg ${message.user ? message.user : 'user2'}`}>
                  <span class="msg-avatar">
                    <img src={`https://i.pravatar.cc/150?u=${message.user ? message.user : 'user2'}@sonar`} />
                  </span>
                  <div innerHTML={message.text} class={`cm-msg-body cm-msg-${message.type}`} onClick={() => this.sendAction(message)}>
                    
                  </div>
                </div>
              )}       
              </div>
            </div>
            <div class="chat-input">      
              <form onSubmit={(e) => this.submitChat(e)}>
                <input type="text" id="chat-input" placeholder={this.placeholder} value={this.chatInput} onInput={e => this.onInput(e)} ref={(el: HTMLInputElement) => this.chatInputEl = el}/>
                <button type="submit" class="chat-submit" id="chat-submit">
                  <svg width="32" height="32"><path d={send24}></path></svg>
                </button>
              </form>      
            </div>
          </div>
        </div>
      </Host>
    );
  }

}