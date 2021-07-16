import { 
  Component, 
  Element,
  Event,
  EventEmitter,
  Host, 
  h,
  Prop
} from '@stencil/core';

import { isFramework } from '../../../utils/framework';

@Component({
  tag: 'hub-link',
  shadow: true,
})
export class HubLink {

  // Host Element
  @Element() el: HTMLElement;
  // Link Element
  linkEl: HTMLAnchorElement;

  /** 
   * Event sent when relative=true and link clicked
   */
  @Event() linkClicked: EventEmitter<string>;


  /**
   *  If true, links send events
   */
  @Prop({ reflect: true, mutable: true }) evented:boolean = false;
  
  /**
   * Link to display
   */
  @Prop({ reflect: true, mutable: true }) link:string = "https://google.com";

  componentWillLoad() {
    console.debug("hub-link: isFramework(this.el)", isFramework(this.el))
    if(isFramework(this.el)) {
      this.evented = true;
    }
  }
  componentDidLoad() {
    this.linkEl.addEventListener('click', e => {
      if(this.evented) {
        this.linkClicked.emit(this.link);
        e.preventDefault();
        e.stopPropagation();  
      }
    })
  }

  render() {
    return (
      <Host>
        <a ref={(el: HTMLAnchorElement) => this.linkEl = el} target="_new" href={this.link}>
          <slot>View link {this.link}</slot>
        </a>
      </Host>
    );
  }

}
