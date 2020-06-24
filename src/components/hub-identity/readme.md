# hub-identity



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute        | Description                                  | Type      | Default                    |
| ---------------- | ---------------- | -------------------------------------------- | --------- | -------------------------- |
| `clientid`       | `clientid`       | ClientID to identify the app launching OAuth | `string`  | `undefined`                |
| `displaysignin`  | `displaysignin`  |                                              | `boolean` | `true`                     |
| `displaysignout` | `displaysignout` |                                              | `boolean` | `true`                     |
| `orgurl`         | `orgurl`         | url of the ArcGIS Online organization        | `string`  | `"https://www.arcgis.com"` |
| `session`        | `session`        | Serialized authentication information.       | `string`  | `undefined`                |
| `signin`         | `signin`         |                                              | `string`  | `"Sign In"`                |
| `signout`        | `signout`        |                                              | `string`  | `"Sign Out"`               |


## Dependencies

### Depends on

- calcite-button

### Graph
```mermaid
graph TD;
  hub-identity --> calcite-button
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  style hub-identity fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
