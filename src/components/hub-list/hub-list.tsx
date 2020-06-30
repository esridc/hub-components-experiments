import { Component, Host, h, Prop } from '@stencil/core';
import { users24 } from '@esri/calcite-ui-icons'
import * as HubTypes from '../../utils/hub-types'

@Component({
  tag: 'hub-list',
  styleUrl: 'hub-list.css',
  shadow: true,
})
export class HubList {

  @Prop() icon: string;
  @Prop() name: string;
  @Prop() url: string;
  @Prop() summary: string;

  @Prop() collection: HubTypes.IHubResource[]

  render() {
    return (
      <Host>
        <slot></slot>
        {this.collection.map((item) => 
        <div class="list-item">
            <span class="icon"><svg width="24" height="24"><path d={users24}></path></svg></span> 
            <span class="name"><a href={`#${item.url}`}></a>{item.name}</span>
            <span class="summary">{item.summary}</span>
        </div>
        )}
      </Host>
    );
  }

}
