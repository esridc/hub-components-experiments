export interface IHubMessage {
    text: string;
    action?: string;
    type?: string;
    user?: string;
    route?: string;
  }
export interface IHubChat {
    messages?: Array<IHubMessage>;
    actions?: Array<IHubMessage>;
}