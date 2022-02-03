export var ContentType;
(function (ContentType) {
  ContentType[ContentType["dataset"] = 1000] = "dataset";
  ContentType[ContentType["document"] = 1001] = "document";
  ContentType[ContentType["map"] = 1002] = "map";
  ContentType[ContentType["app"] = 1003] = "app";
  ContentType[ContentType["site"] = 1004] = "site";
  ContentType[ContentType["initiative"] = 1005] = "initiative";
  ContentType[ContentType["template"] = 1006] = "template";
})(ContentType || (ContentType = {}));
export var CommunityType;
(function (CommunityType) {
  CommunityType[CommunityType["member"] = 1] = "member";
  CommunityType[CommunityType["team"] = 2] = "team";
})(CommunityType || (CommunityType = {}));
export var VisibilityOptions;
(function (VisibilityOptions) {
  VisibilityOptions[VisibilityOptions["private"] = 0] = "private";
  VisibilityOptions[VisibilityOptions["org"] = 1] = "org";
  VisibilityOptions[VisibilityOptions["public"] = 2] = "public";
})(VisibilityOptions || (VisibilityOptions = {}));
export var ControlOptions;
(function (ControlOptions) {
  ControlOptions[ControlOptions["view"] = 0] = "view";
  ControlOptions[ControlOptions["edit"] = 1] = "edit";
  ControlOptions[ControlOptions["admin"] = 2] = "admin";
})(ControlOptions || (ControlOptions = {}));
export var EventType;
(function (EventType) {
  EventType[EventType["event"] = 0] = "event";
})(EventType || (EventType = {}));
// TODO: figure out how this can work like { ...ContentType, ...CommunityType, ...EventType}
export var HubType;
(function (HubType) {
  HubType[HubType["member"] = 1] = "member";
  HubType[HubType["team"] = 2] = "team";
  HubType[HubType["event"] = 100] = "event";
  HubType[HubType["dataset"] = 1000] = "dataset";
  HubType[HubType["document"] = 1001] = "document";
  HubType[HubType["map"] = 1002] = "map";
  HubType[HubType["app"] = 1003] = "app";
  HubType[HubType["site"] = 1004] = "site";
  HubType[HubType["initiative"] = 1005] = "initiative";
  HubType[HubType["template"] = 1006] = "template";
  HubType[HubType["organization"] = 1007] = "organization";
})(HubType || (HubType = {}));
