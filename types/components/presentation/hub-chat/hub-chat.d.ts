import { EventEmitter } from '../../../stencil-public-runtime';
import { IHubChat, IHubMessage } from '../../../utils/hub-types';
export declare class HubChat {
  element: HTMLElement;
  chatInputEl: HTMLInputElement;
  chatBoxEl: HTMLDivElement;
  chatCircleEl: HTMLDivElement;
  /**
   * Chat bot name
   */
  name: string;
  /**
   * Current (or default) open state of the chatbox
   */
  open: boolean;
  /**
   * Default input placeholder
   */
  placeholder: string;
  /**
   * Set property to pass in messages. Can be used for default welcome message.
   */
  incomingMessages: IHubChat;
  /** Emits the chat input */
  onChatSubmitted: EventEmitter;
  chatInput: string;
  messageCount: number;
  messages: Array<any>;
  componentWillLoad(): void;
  componentDidRender(): void;
  openDidChange(newOpenState: any): void;
  receiveMessages(newMessages: IHubChat): void;
  sendMessage(message: IHubMessage): void;
  submitChat(e: any): void;
  onInput(e: any): string;
  sendAction(action: IHubMessage): void;
  toggleChatbox(boxState?: boolean): void;
  render(): any;
}
