# hub-follow-button

`<hub-event clientid="WXC842NRBVB6NZ2r" eventtitle="Maryland Ave NE Streetscape Project Groundbreaking" orgurl="https://cityx.maps.arcgis.com"></hub-event>`

<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description                                  | Type      | Default                    |
| ----------------- | ------------------- | -------------------------------------------- | --------- | -------------------------- |
| `attending`       | `attending`         |                                              | `boolean` | `undefined`                |
| `clientid`        | `clientid`          | ClientID to identify the app launching OAuth | `string`  | `undefined`                |
| `eventDate`       | `event-date`        |                                              | `string`  | `undefined`                |
| `eventGroupId`    | `event-group-id`    |                                              | `string`  | `undefined`                |
| `eventOrganizer`  | `event-organizer`   |                                              | `string`  | `undefined`                |
| `eventServiceUrl` | `event-service-url` |                                              | `string`  | `undefined`                |
| `eventUrl`        | `event-url`         |                                              | `string`  | `undefined`                |
| `eventtitle`      | `eventtitle`        | identifier for the ArcGIS Hub initiative     | `string`  | `undefined`                |
| `orgurl`          | `orgurl`            | url of the ArcGIS Online organization        | `string`  | `"https://www.arcgis.com"` |
| `session`         | `session`           | Serialized authentication information.       | `string`  | `undefined`                |


## Dependencies

### Depends on

- [hub-card](../hub-card)

### Graph
```mermaid
graph TD;
  hub-event --> hub-card
  hub-card --> calcite-card
  hub-card --> calcite-button
  calcite-card --> calcite-loader
  calcite-card --> calcite-checkbox
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  style hub-event fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
