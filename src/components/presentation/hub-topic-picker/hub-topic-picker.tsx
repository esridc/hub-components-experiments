import { Component, Event, EventEmitter, Host, h, Prop, State, Watch } from '@stencil/core';

interface ITopic {
  name: string
  selected: boolean
}

@Component({
  tag: 'hub-topic-picker',
  styleUrl: 'hub-topic-picker.css',
  shadow: true,
})

export class HubTopicPicker {

  /**
   * Array of topics to be displayed
   */
  @Prop() topicsAvailable: Array<string> = ['education', 'health', 'recreation', 'transportation'];
  
  /** 
   * Array of topics that are current selected
   */
  @Prop({ mutable: true, reflect: true }) topicsSelected: Array<string> = ['education', 'transportation'];
  
  /**
   * Event sent when a topic is selected or deselected
   */
  @Event() topicSelected: EventEmitter<ITopic>;

  /**
   * Event sent after any or all topics updated
   */
  @Event() topicsChanged: EventEmitter<Array<ITopic>>;

  /**
   * Internal variable that merges available topics + selected topics
   */
  @State() topicsState: Array<ITopic>

  componentWillLoad() {
    this.updateTopics();
  }

  @Watch('topicsSelected')
  updateTopics() {
    this.topicsState = []
    this.topicsAvailable.forEach(element => {
      this.topicsState.push({
        name: element,
        selected: this.topicsSelected.includes(element)
      })
    });
    // Send event that topics changed
    this.topicsChanged.emit(this.topicsState);
  }

  onTopicSelected(selectedName: string, selectedState: boolean) {
    this.topicSelected.emit({name: selectedName, selected: selectedState})

    if(selectedState) {
      this.topicsSelected = [...this.topicsSelected, selectedName];
    } else {
      this.topicsSelected = this.topicsSelected.filter((topic) => { return (topic !== selectedName )})
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
        {this.topicsState.map((topic) => 
          <calcite-chip 
            onClick={(_ref) => this.onTopicSelected(topic.name, !topic.selected)}
            value={topic.name}
            appearance={topic.selected ? 'solid' : 'clear'}
            dismissible={topic.selected}
            >{topic.name}</calcite-chip> 
        )}
      </Host>
    );
  }

}
