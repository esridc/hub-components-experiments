import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hub-license-picker',
  styleUrl: 'hub-license-picker.css',
  shadow: true,
})
export class HubLicensePicker {
  @Prop() license:string = "cc0";

  pickerModal: HTMLCalciteModalElement;

  // TODO: move this to an @esri/hub-licenses module
  licenses = {
    "cc0": {
      name: "Creative Commons Zero (CC0)",
      summary: "No rights reserved. Content is in the public domain for re-use by anyone for any purpose.",
      url: "https://creativecommons.org/share-your-work/public-domain/cc0/",
      thumbnail: "https://www.researchgate.net/profile/Donat_Agosti/publication/51971424/figure/fig2/AS:203212943564807@1425461149299/Logo-of-the-CC-Zero-or-CC0-Public-Domain-Dedication-License-No-Rights-Reserved-CC.png"
    }, 
    "cc-by": {
      name: "Creative Commons Attribution (CC By)",
      summary: "This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator. The license allows for commercial use.",
      url: "https://creativecommons.org/licenses/by/4.0/",
      thumbnail: "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png"
    }, 
    "cc-by-sa": {
      name: "Creative Commons Attribution Share-Alike (CC By-SA)",
      summary: "This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator. The license allows for commercial use. If you remix, adapt, or build upon the material, you must license the modified material under identical terms.",
      url: "https://creativecommons.org/licenses/by-sa/4.0/",
      thumbnail: "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-sa.png"
    }, 
    "cc-by-nc": {
      name: "Creative Commons Attribution Non-Commercial (CC By-NC)",
      summary: "This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format for noncommercial purposes only, and only so long as attribution is given to the creator. ",
      url: "https://creativecommons.org/licenses/by-nc/4.0/",
      thumbnail: "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-nc.png"
    }
  }
  showModal() {
    this.pickerModal.active = true;
  }

  renderNoLicense() {
    return (<div>
    <h3>No License Selected</h3>
    <p>You should select a license so people know how they can re-use your content.</p>
    </div>);
  }
  renderLicense(licenseId:string) {
    const license = this.licenses[licenseId];
    console.log("renderLicense", license)
    if(!license) {
      return( this.renderNoLicense() );
    }
    return (
      <div class="license-option">
      <calcite-card
        selectable={true}
        >
        <h3 slot="title">{license.name}</h3>
        <span slot="subtitle"><img slot="" src={license.thumbnail} /> <br/>{license.summary}</span>
        <calcite-link theme="dark" slot="footer-leading" href={license.url}>More info</calcite-link>
      </calcite-card>        
      </div>
    )
  }
  render() {
    return (
      <Host>
        <slot></slot>
        {this.license ? this.renderLicense(this.license) : this.renderNoLicense() }
        <calcite-modal 
          ref={(el: HTMLCalciteModalElement) => this.pickerModal = el} 
          aria-labelledby="modal-title"
          scale="m"
          width="m"
          >
          <h3 slot="header" id="modal-title">Choose a License</h3>
          <div slot="content">
            <calcite-tabs>
              <calcite-tab-nav slot="tab-nav">
                <calcite-tab-title active>Recommended Licenses</calcite-tab-title>
                <calcite-tab-title>Custom license</calcite-tab-title>
              </calcite-tab-nav>
              <calcite-tab active>
                  {Object.keys(this.licenses).map(license => 
                    this.renderLicense(license)
                  )}
              </calcite-tab>
              <calcite-tab>
                <metadata-form
                  sections={['license']}
                ></metadata-form>
              </calcite-tab>
            </calcite-tabs>
          </div>
          <calcite-button slot="secondary" width="full" appearance="outline">
            Cancel
          </calcite-button>
          <calcite-button slot="primary" width="full">
            Select License
          </calcite-button> 
        </calcite-modal>  
        <calcite-button 
          onClick={(_ev: Event) => this.showModal()}
        >Choose a License</calcite-button>
      </Host>
    );
  }

}
