export interface IHubResource {
  canEdit(_itemId: string, _username: string): Promise<boolean>;
  search(query: any): any;
  create(itemParams: any, authentication: any): Promise<any>;
  get(itemId: string): Promise<IHubResource>;
  update(itemId: string, resourceParams: any): Promise<boolean>;
  delete(itemId: string): Promise<boolean>;
}
export declare let HubService: {
  create(type: 'portal' | 'hub'): IHubResource;
};
export declare class PortalContent implements IHubResource {
  portalUrl: string;
  canEdit(_itemId: string, _username: string): Promise<boolean>;
  search(_query: any): Promise<any>;
  create(itemParams: any, authentication: any): Promise<any>;
  get(itemId: string): Promise<any>;
  update(_itemId: string, _resourceParams: any): Promise<any>;
  delete(_itemId: string): Promise<any>;
}
export declare class HubContent implements IHubResource {
  hubUrl: string;
  canEdit(_itemId: string, _username: string): Promise<boolean>;
  search(_query: any): Promise<any>;
  create(itemParams: any, authentication: any): Promise<any>;
  get(itemId: string): Promise<any>;
  update(_itemId: string, _resourceParams: any): Promise<any>;
  delete(_itemId: string): Promise<any>;
}
