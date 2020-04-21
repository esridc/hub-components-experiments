import { Component, Host, h, Prop } from '@stencil/core';

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const formatValue = (value: any, options: Intl.NumberFormatOptions) => {
  if (isNumeric(value)) {
    // format as number
    // NOTE: I'm assuming undefined will use the user's locale,
    // but we may need to pass navigator.language(s) explicitly
    return new Intl.NumberFormat(undefined, options).format(value);
  } else if (value instanceof Date) {
    return new Intl.DateTimeFormat().format(value);
  } else {
    return value;
  }
}

const getFormatOptions = (maximumFractionDigits, useGrouping, currency) => {
  const options: Intl.NumberFormatOptions = {
    style: 'decimal',
    maximumFractionDigits,
    useGrouping
  };
  if (currency) {
    options.style = 'currency';
    options.currency = currency;
  }
  return options;
}

const StatisticTitle = (title: string, align: string) => {
  // TODO: replace text-align BS class w/ custom class
  // TODO: would be nice to include hr here, but would need a wrapping div
  // or something like https://github.com/auderer/stencil-fragment
  // or could replace <hr /> w/ CSS
  const classes = `ss-title-row text-${align}`;
  return (
    <div class={classes} title={title}>
      <span class="ss-title">{title}</span>
    </div>
  );
};

@Component({
  tag: 'hub-statistic',
  styleUrl: 'statistic.css',
  shadow: true
})
export class Statistic {

  @Prop() value: any;
  @Prop() align = "left";
  // TODO: use CSS variable for color and/or align?
  @Prop() color = "#ff0000";
  @Prop() decimalPlaces: number = 2;
  // TODO: rename this, title is a native attribute
  @Prop() title: string = "";
  @Prop() trailingLabel: string = "";
  // TODO: type for align (i.e. 'left' | 'right' | 'center')?
  @Prop() titleAlign: string = "left";
  @Prop() trailingTextAlign: string = "left";
  @Prop() formatNumberGroupings: boolean = true;
  @Prop() currencyCode: string = "";

  render() {

    const valueStyle = {
      color: this.color,
      // TODO: how to handle font-size, {{summary-stat-card}} sets this based on width
      // CSS variable? prop?
      fontSize: '72px'
    }

    // format the value
    const formatted = formatValue(
      this.value,
      getFormatOptions(
        this.decimalPlaces,
        this.formatNumberGroupings,
        this.currencyCode
      )
    );
    
    // TODO: should this component handle loading and error states like {{summary-statistic-card}} does?
    // TODO: source
    return (
      <Host>
        { this.title && StatisticTitle(this.title, this.titleAlign) }
        { this.title && <hr class="ss-title-spacer" /> }
        <div class={`text-${this.align}`}>
          <span class="ss-value" style={valueStyle}>{formatted}</span><span class="ss-trail-label">{this.trailingLabel}</span>
        </div>
        <div class={`text-${this.trailingTextAlign}`}>
          <div class="trailingText"><slot></slot></div>
        </div>
        <div class="ss-detail"></div>
      </Host>
    );
  }
}
