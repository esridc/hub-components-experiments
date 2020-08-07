import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hub-license-picker',
  styleUrl: 'hub-license-picker.css',
  shadow: true,
})
export class HubLicensePicker {
  pickerModal: HTMLCalciteModalElement;

  showModal() {
    this.pickerModal.open();
  }
  
  render() {
    return (
      <Host>
        <slot></slot>
        <h3>No License Selected</h3>
        <p>You should select a license so people know how they can re-use your content.</p>

        <calcite-modal 
          ref={(el: HTMLCalciteModalElement) => this.pickerModal = el} 
          aria-labelledby="modal-title"
          size="medium"
          >
          <h3 slot="header" id="modal-title">Recommended Licenses</h3>
          <div slot="content">
            ...
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
