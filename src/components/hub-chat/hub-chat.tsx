import { Component, Host, h, State, Prop, Watch, Element, Event, EventEmitter } from '@stencil/core';
import { send24, speechBubbles32, x32} from "@esri/calcite-ui-icons";

@Component({
  tag: 'hub-chat',
  styleUrl: 'hub-chat.css',
  shadow: true
})
export class HubChat {

  @Element() element: HTMLElement;
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

  /** Emits the chat input */
  @Event() onChatSubmitted: EventEmitter;

  @State() chatInput:string; 
  @State() messageCount:number = 0;
  @State() messages:Array<any> = [];
    
  componentDidRender() {
    this.toggleChatbox(this.open);
  }

  @Watch('open')
  openDidChange(newOpenState) {
    console.debug("Hub Chat openDidChange", newOpenState)
    this.toggleChatbox(newOpenState)
  }
  submitChat = (e) => {
    e.preventDefault();
    this.messageCount++;
    this.messages.push({text: this.chatInput, user: 'self'});
    
    this.onChatSubmitted.emit({
      text: this.chatInput, 
      user: 'self'
    });
  }
  
  onInput(e): string {
    e.preventDefault();
    this.chatInput = e.target.value;
    return 'true';
  }


  toggleChatbox = (boxState:boolean = null) => {
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
                <div id={"cm-msg-" + this.messageCount} class={"chat-msg " + message.user}>
                  <span class="msg-avatar">
                    <img src={`https://i.pravatar.cc/150?u=${message.user}@sonar`} />
                  </span>
                  <div class="cm-msg-text">
                    {message.text}
                  </div>
                </div>
              )}       
              </div>
            </div>
            <div class="chat-input">      
              <form onSubmit={(e) => this.submitChat(e)}>
                <input type="text" id="chat-input" placeholder={this.placeholder} value={this.chatInput} onInput={e => this.onInput(e)}/>
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