export declare class HubCountdown {
  /**
   * Start Date as a 'YYYY-MM-DD' string. e.g. "2020-12-31"
   * Leave blank to set to current time
   */
  start: string;
  /**
   * End Date as a 'YYYY-MM-DD'string. e.g. "2020-12-31"
   * Leave blank to set to current time
   */
  end: string;
  /**
   * Text to add after the date difference
   */
  endText: string;
  endDate: Date;
  startDate: Date;
  daysRemaining: number;
  calculateDiff(): void;
  componentWillRender(): void;
  render(): any;
}
