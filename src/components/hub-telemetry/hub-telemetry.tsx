import { Component, Host, h, Listen, Prop, State } from '@stencil/core';
import Telemetry from '@esri/telemetry';

@Component({
  tag: 'hub-telemetry',
  styleUrl: 'hub-telemetry.css',
  shadow: false,
})
export class HubTelemetry {

  @Prop() config:string = 'UA-47337822-17';
  @State() telemetry: Telemetry; 

  componentDidLoad() {
    this.telemetry = new Telemetry({
      google: {
        dimensions: {
          datasetId: 6,
          attribute: 7,
          serviceQuery: 8,
          searchQuery: 9,
          objectId: 10,
          facetValue: 11
        }
      }
    })    
    this.telemetry.logEvent({category: 'hub-component', action: 'hub-telemetry:loaded', label: this.config})
  }

  // use utils/telemetry-utils#sendTelemetry
  @Listen('hub-telemetry-event', { target: 'window' })
  handleEvent(event) {
    // {category: 'hub-telemetry-event', action: 'hub-telemetry-event', label: 'hub-telemetry-event'}
    this.telemetry.logEvent(event.details)
    console.log('received hub-telemetry-event: event ->', event.details);
  }
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
