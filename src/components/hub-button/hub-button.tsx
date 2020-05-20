import { Component, Prop, Listen, h } from '@stencil/core';
import '@esri/calcite-components';
import { sendTelemetry } from '../../utils/telemetry-utils';

@Component({
  tag: 'hub-button',
  styleUrl: 'hub-button.scss'
})

export class HubButton {
  /**
   * Button text to display
   */
  @Prop({ mutable: true }) text: string = "Click Me";

  /**
   * Icon to display alongside the text
   */
  @Prop() icon: JSX.Element;

  /**
   * action to trigger when the button is clicked
   */
  @Prop() action: Function = function() { return 'foo' };

  @Listen('click') handleKeyDown() {
    console.log("hub-button click")

    // send Telemetry to <hub-telemetry>
    sendTelemetry({
        category: 'hub-component',
        action: 'hub-button:click', 
        label: this.text
    });
    
    this.action()
  }

  render() {
    // return <button class="hub-btn">
    //     {this.icon}
    //     {this.text}
    //   </button>;

    return <calcite-button 
      appearance="solid" 
      color="blue" 
      scale="m" 
      round={false}
      floating={true} 
      href="" >
      {this.text} 
    </calcite-button>
  }
}
