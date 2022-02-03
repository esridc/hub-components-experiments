/// <reference types="react" />
import '@esri/calcite-components';
export declare class HubButton {
  /**
   * Button text to display
   */
  text: string;
  /**
   * Icon to display alongside the text
   */
  icon: JSX.Element;
  /**
   * action to trigger when the button is clicked
   */
  action: Function;
  handleKeyDown(): void;
  render(): any;
}
