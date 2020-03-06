# hub-sonar-chat



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute | Description | Type       | Default                                                                                                                                                            |
| -------------- | --------- | ----------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sendMessages` | --        |             | `IHubChat` | `{messages: [     {text: "Welcome to Sonar", type: "text", user: "user"},      {text: "Search for Datasets", type: "action", user: "user", route: "/index"},   ]}` |
| `service`      | `service` |             | `string`   | `null`                                                                                                                                                             |


## Dependencies

### Depends on

- [hub-chat](../hub-chat)

### Graph
```mermaid
graph TD;
  hub-sonar-chat --> hub-chat
  style hub-sonar-chat fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
