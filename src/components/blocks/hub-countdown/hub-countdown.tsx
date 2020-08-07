import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'hub-countdown',
  styleUrl: 'hub-countdown.css',
  shadow: true,
})
export class HubCountdown {

  @Prop() endDate:Date;
  @Prop() remainingText:string = "days left";
  @State() currentDate:Date;
  @State() daysRemaining:number;

  componentWillLoad() {
    this.currentDate = new Date();
    var diff = Math.abs(this.endDate.getTime() - this.currentDate.getTime());
    this.daysRemaining = Math.ceil(diff / (1000 * 3600 * 24));     

  }
  render() {
    return (
      <Host>
        <slot></slot>
        <strong>{this.daysRemaining}</strong> {this.remainingText}
      </Host>
    );
  }

}
