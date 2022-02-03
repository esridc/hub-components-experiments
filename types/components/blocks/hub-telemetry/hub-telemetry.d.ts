import Telemetry from '@esri/telemetry';
export declare class HubTelemetry {
  google: string;
  telemetry: Telemetry;
  private initializeGoogleAnalytics;
  componentDidLoad(): void;
  handleEvent(event: any): void;
  render(): any;
}
