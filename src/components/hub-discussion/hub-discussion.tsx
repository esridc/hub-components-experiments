import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hub-discussion',
  styleUrl: 'hub-discussion.css',
  shadow: true,
})
export class HubDiscussion {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
