import { Component, Prop, Listen, Element, h } from '@stencil/core';
import { getLocaleComponentStrings } from '../../utils/locale';

@Component({
  tag: 'hub-button',
  styleUrl: 'hub-button.css'
})

export class HubButton {

  @Element() element: HTMLElement;
  strings: any;

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

  async componentWillLoad(): Promise<void> {
    this.strings = await getLocaleComponentStrings(this.element);
    // this.text = this.strings.title;
    this.text = this.strings.t("hub-button.title");
  }

  @Listen('click') handleKeyDown() {
    this.action()
  }

  render() {
    return <button class="hub-btn">
        {this.icon}
        {this.text}
      
      </button>;
  }
}
