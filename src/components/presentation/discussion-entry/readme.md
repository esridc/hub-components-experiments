# discussion-entry



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type      | Default     |
| --------------- | ---------------- | ----------- | --------- | ----------- |
| `allowDelete`   | `allow-delete`   |             | `boolean` | `false`     |
| `allowEdit`     | `allow-edit`     |             | `boolean` | `false`     |
| `allowReply`    | `allow-reply`    |             | `boolean` | `true`      |
| `annotationId`  | `annotation-id`  |             | `string`  | `undefined` |
| `authorImage`   | `author-image`   |             | `string`  | `undefined` |
| `authorName`    | `author-name`    |             | `string`  | `undefined` |
| `description`   | `description`    |             | `string`  | `undefined` |
| `publishedDate` | `published-date` |             | `string`  | `undefined` |


## Events

| Event                   | Description | Type               |
| ----------------------- | ----------- | ------------------ |
| `eventDeleteAnnotation` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [hub-discussion](../../containers/hub-discussion)

### Graph
```mermaid
graph TD;
  hub-discussion --> discussion-entry
  style discussion-entry fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
