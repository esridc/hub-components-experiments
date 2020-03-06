export interface IHubMessage {
    text: string;
    action?: string;
    type?: string;
    user?: string;
  }
export interface IHubChat {
    messages?: Array<IHubMessage>;
    actions?: Array<IHubMessage>;
}