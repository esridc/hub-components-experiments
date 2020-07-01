import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hub-statistic',
  styleUrl: 'hub-statistic.scss',
  shadow: true,
})
export class HubStatistic {

  @Prop() value: string | number;
  @Prop() label: string;
  @Prop() units: string;
  @Prop() size: 's' | 'm' | 'l';

  render() {
    return (
      <Host>
        <slot></slot>
        <div class={`statistic-${this.size}`}>
          <span class="label">{this.label}</span>
          <span class="value">{this.value}</span>
          <span class="units">{this.units}</span>
        </div>
      </Host>
    );
  }

}
