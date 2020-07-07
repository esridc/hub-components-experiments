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
   * Option to allow for selected & de-selecting topics
   */
  @Prop({ }) allowSelection:boolean = true;

  /**
   * Event sent when a topic is selected or deselected
   */
  @Event() topicSelected: EventEmitter<ITopic>;

  /**
   * Event sent after any or all topics updated
   */
  @Event() topicsChanged: EventEmitter<Array<ITopic>>;
  @Event() editorUpdated:EventEmitter;

  /**
   * Internal variable that merges available topics + selected topics
   */
  @State() topicsState: Array<ITopic>

  componentWillLoad() {
    console.log("hub-topic-picker: this.allowSelection", this.allowSelection)
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
    this.editorUpdated.emit(this.topicsSelected);
  }

  onTopicSelected(selectedName: string, selectedState: boolean) {
    
    // If selection isn't allowed, block events
    if(!this.allowSelection) {
      return false;
    }

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
            class={this.allowSelection ? "topic-selectable" : ""}
            onClick={(_ref) => this.onTopicSelected(topic.name, !topic.selected)}
            value={topic.name}
            appearance={topic.selected ? 'solid' : 'clear'}
            dismissible={this.allowSelection && topic.selected}
            >{topic.name}</calcite-chip> 
        )}
      </Host>
    );
  }

}
