import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'metadata-section-help',
  styleUrl: 'metadata-section-help.css',
  shadow: true,
})
export class MetadataSectionHelp {

  @Prop() title: string = "Basic Info";
  @Prop() description: string = "This information is used in search results, gallery cards and on the details views."; 
  
  render() {
    return (
      <Host>
        <slot></slot>
        <div class="metadata-section-help">
          <h3>{this.title}</h3>
          <p>{this.description}</p>
        </div>
      </Host>
    );
  }

}
