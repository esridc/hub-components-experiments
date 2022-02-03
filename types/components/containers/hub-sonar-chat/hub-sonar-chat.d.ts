import { IHubChat } from '../../../utils/hub-types';
export declare class HubSonarChat {
  service: string;
  name: string;
  open: boolean;
  placeholder: string;
  sendMessages: IHubChat;
  onChatSubmittedHandler(event: CustomEvent): Promise<any>;
  render(): any;
}
