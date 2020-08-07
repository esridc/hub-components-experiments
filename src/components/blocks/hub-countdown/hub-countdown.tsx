import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'hub-countdown',
  styleUrl: 'hub-countdown.css',
  shadow: true,
})
export class HubCountdown {
  /**
   * Start Date as a 'YYYY-MM-DD' string. e.g. "2020-12-31"
   * Leave blank to set to current time
   */  
  @Prop({ mutable: true }) start:string = null;
  
  /**
   * End Date as a 'YYYY-MM-DD'string. e.g. "2020-12-31"
   * Leave blank to set to current time
   */
  @Prop({ mutable: true }) end:string = null;
  
  /**
   * Text to add after the date difference
   */
  @Prop() endText:string = "days left";
  
  @State() endDate:Date;
  @State() startDate:Date;
  @State() daysRemaining:number;

  componentWillLoad() {
    this.endDate = this.end ? new Date(this.end) : new Date();
    this.startDate = this.start ? new Date(this.start) : new Date();

    console.log("hub-countdown: endDate", this.endDate)
    var diff = Math.abs(this.endDate.getTime() - this.startDate.getTime());
    this.daysRemaining = Math.ceil(diff / (1000 * 3600 * 24));     

  }
  render() {
    return (
      <Host>
        <slot></slot>
        <strong>{this.daysRemaining}</strong> {this.endText}
      </Host>
    );
  }

}
