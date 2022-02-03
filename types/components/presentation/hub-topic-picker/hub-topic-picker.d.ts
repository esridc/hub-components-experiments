import { EventEmitter } from '../../../stencil-public-runtime';
interface ITopic {
  name: string;
  selected: boolean;
}
export declare class HubTopicPicker {
  /**
   * Array of topics to be displayed
   */
  topicsAvailable: Array<string>;
  values: string;
  options: string;
  /**
   * Array of topics that are current selected
   */
  topicsSelected: Array<string>;
  /**
   * Option to allow for selected & de-selecting topics
   */
  allowSelection: boolean;
  /**
   * Event sent when a topic is selected or deselected
   */
  topicSelected: EventEmitter<ITopic>;
  /**
   * Event sent after any or all topics updated
   */
  topicsChanged: EventEmitter<Array<ITopic>>;
  editorUpdated: EventEmitter;
  /**
   * Internal variable that merges available topics + selected topics
   */
  topicsState: Array<ITopic>;
  componentWillLoad(): void;
  updateTopics(): void;
  onTopicSelected(selectedName: string, selectedState: boolean): boolean;
  render(): any;
}
export {};
