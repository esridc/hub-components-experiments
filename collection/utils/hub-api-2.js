// using [Builder](https://refactoring.guru/design-patterns/builder)
class APIProxy {
  constructor(env) {
    this.proxy = null;
    switch (env) {
      case "portal":
        this.proxy = new ProxyPortal();
        break;
      case "hub":
        this.proxy = new ProxyHub();
        break;
    }
  }
  build(resourceType) {
    switch (resourceType) {
      case ResourceType.Dataset:
        return this.proxy.dataset();
    }
  }
}
class ProxyHub {
  dataset() {
    return new DatasetHub();
  }
}
class ProxyPortal {
  dataset() {
    return new DatasetPortal();
  }
}
var ResourceType;
(function (ResourceType) {
  ResourceType[ResourceType["Dataset"] = 0] = "Dataset";
})(ResourceType || (ResourceType = {}));
class Dataset {
  get(_id) { return "No Type Set"; }
}
class DatasetHub extends Dataset {
  get(_id) { return "DatasetHub"; }
}
class DatasetPortal extends Dataset {
  get(_id) { return "DatasetPortal"; }
}
// 
let api = new APIProxy("portal");
let dataset = api.build(ResourceType.Dataset).get('4ef');
console.log("API: dataset", dataset);
