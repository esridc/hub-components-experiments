declare class APIProxy {
  private proxy;
  constructor(env: string);
  build(resourceType: ResourceType): HubResource;
}
declare class ProxyHub {
  dataset(): Dataset;
}
declare class ProxyPortal {
  dataset(): Dataset;
}
declare enum ResourceType {
  Dataset = 0
}
interface HubResource {
  get(_id: string): string;
}
declare class Dataset implements HubResource {
  get(_id: string): string;
}
declare class DatasetHub extends Dataset {
  get(_id: string): string;
}
declare class DatasetPortal extends Dataset {
  get(_id: string): string;
}
declare let api: APIProxy;
declare let dataset: string;
