export declare class HubLicensePicker {
  license: string;
  pickerModal: HTMLCalciteModalElement;
  licenses: {
    cc0: {
      name: string;
      summary: string;
      url: string;
      thumbnail: string;
    };
    "cc-by": {
      name: string;
      summary: string;
      url: string;
      thumbnail: string;
    };
    "cc-by-sa": {
      name: string;
      summary: string;
      url: string;
      thumbnail: string;
    };
    "cc-by-nc": {
      name: string;
      summary: string;
      url: string;
      thumbnail: string;
    };
  };
  showModal(): void;
  renderNoLicense(): any;
  renderLicense(licenseId: string): any;
  render(): any;
}
