# hub-telemetry

This component adds support for tracking usage telemetry across any other components. 

## Using Telemetry 

To track telemetry in a site with other Hub Components, just add this `<hub-telemetry>` component first. You can also configure specific telemetry services such as Google by adding the key.
## Adding Telemetry to a Component

To add support for telemetry to a component, using the `sendTelemetry()` method from `utils/telemetry-utils`. 

Within your component, add calls like
```ts
sendTelemetry({
  category: 'hub-component',
  action: 'hub-suggest-input:loaded', 
  label: 'search'
}); 
```
or from [Search input](https://github.com/esridc/hub-components-experiments/blob/2387b3b2881bee0b4c1575b260febc00a110cbe7/src/components/presentation/hub-suggest-input/hub-suggest-input.tsx#L82-L86)

```ts
sendTelemetry({
  category: 'hub-component',
  action: 'hub-suggest-input:query', 
  label: this.query
}); 
```

## How it works

Within the `sendTelemetry()` a global event `hub-telemetry-event` is sent that is then received by the `<hub-telemetry>` component and stored using Telemetry.js. 

Another alternative to consider would be using [@stencil/store](https://stenciljs.com/docs/stencil-store) as an hub-component internal event bus that would not overlap with global window events.

```sequence
User->hubComponent:click
hubComponent->sendTelemetry():
sendTelemetry()-->hubTelemetryComponent:hubTelemetryEvent
hubTelemetryComponent->GoogleAnalytics:Telemetry_logEvent()
```

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default            |
| -------- | --------- | ----------- | -------- | ------------------ |
| `google` | `google`  |             | `string` | `'UA-47337822-17'` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
