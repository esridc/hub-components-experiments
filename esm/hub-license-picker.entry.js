import { r as registerInstance, h, H as Host } from './index-9fca3863.js';

const hubLicensePickerCss = ":host{display:block}.license-option{width:100%;max-height:200px}.license-option img{height:40px}";

let HubLicensePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.license = "cc0";
    // TODO: move this to an @esri/hub-licenses module
    this.licenses = {
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
    };
  }
  showModal() {
    this.pickerModal.active = true;
  }
  renderNoLicense() {
    return (h("div", null, h("h3", null, "No License Selected"), h("p", null, "You should select a license so people know how they can re-use your content.")));
  }
  renderLicense(licenseId) {
    const license = this.licenses[licenseId];
    console.log("renderLicense", license);
    if (!license) {
      return (this.renderNoLicense());
    }
    return (h("div", { class: "license-option" }, h("calcite-card", { selectable: true }, h("h3", { slot: "title" }, license.name), h("span", { slot: "subtitle" }, h("img", { slot: "", src: license.thumbnail }), " ", h("br", null), license.summary), h("calcite-link", { slot: "footer-leading", href: license.url }, "More info"))));
  }
  render() {
    return (h(Host, null, h("slot", null), this.license ? this.renderLicense(this.license) : this.renderNoLicense(), h("calcite-modal", { ref: (el) => this.pickerModal = el, "aria-labelledby": "modal-title", scale: "m", width: "m" }, h("h3", { slot: "header", id: "modal-title" }, "Choose a License"), h("div", { slot: "content" }, h("calcite-tabs", null, h("calcite-tab-nav", { slot: "tab-nav" }, h("calcite-tab-title", { active: true }, "Recommended Licenses"), h("calcite-tab-title", null, "Custom license")), h("calcite-tab", { active: true }, Object.keys(this.licenses).map(license => this.renderLicense(license))), h("calcite-tab", null, h("metadata-form", { sections: ['license'] })))), h("calcite-button", { slot: "secondary", width: "full", appearance: "outline" }, "Cancel"), h("calcite-button", { slot: "primary", width: "full" }, "Select License")), h("calcite-button", { onClick: (_ev) => this.showModal() }, "Choose a License")));
  }
};
HubLicensePicker.style = hubLicensePickerCss;

export { HubLicensePicker as hub_license_picker };
