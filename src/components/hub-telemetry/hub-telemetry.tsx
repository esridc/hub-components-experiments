import { Component, Host, h, Listen, Prop, State } from '@stencil/core';
import Telemetry from '@esri/telemetry';

@Component({
  tag: 'hub-telemetry',
  styleUrl: 'hub-telemetry.css',
  shadow: false,
})
export class HubTelemetry {

  @Prop() google:string = 'UA-47337822-17';
  @State() telemetry: Telemetry; 

  // TODO: investigate using `npm install --save-dev @types/google.analytics`
  // via https://stackoverflow.com/questions/45758852/angular-4-using-google-analytics
  private initializeGoogleAnalytics(googleConfig) {
    // @ts-ignore google specific code
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore google specific code
    function gtag(){dataLayer.push(arguments);}
    // @ts-ignore google specific code
    gtag('js', new Date());
    // @ts-ignore google specific code  
    gtag('config', googleConfig);
  

  }
  componentDidLoad() {

    this.initializeGoogleAnalytics(this.google);

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

    // TODO log telemetry depending on configured providers
    this.telemetry.logEvent({category: 'hub-component', action: 'hub-telemetry:loaded', label: this.google})
    
  }

  // use utils/telemetry-utils#sendTelemetry
  @Listen('hub-telemetry-event', { target: 'window' })
  handleEvent(event) {
    // {category: 'hub-telemetry-event', action: 'hub-telemetry-event', label: 'hub-telemetry-event'}
    this.telemetry.logEvent(event.detail)
  }
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
