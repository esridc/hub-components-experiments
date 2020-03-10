import { Component, Prop, Listen, h } from '@stencil/core';
import '@esri/calcite-components';

@Component({
  tag: 'hub-button',
  styleUrl: 'hub-button.css'
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
