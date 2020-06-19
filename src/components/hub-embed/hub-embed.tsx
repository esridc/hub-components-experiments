import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'hub-embed',
  styleUrl: 'hub-embed.css',
  shadow: true,
})
export class HubEmbed {

  modalEl: HTMLCalciteModalElement; 
  inputEl: HTMLInputElement; 
  confirmEl: HTMLCalcitePopoverElement;

  @Prop() title: string = "Embed this card";
  @Prop() description: string = "You can add this card to your own site. Copy the code below and paste into your site editor."
  @Prop() code:string = '&gt;hub-survey&lt;';

  componentDidLoad() {
    this.inputEl.value = this.code;
  }

  copyText() {
    /* Select the text field */
    this.inputEl.select();
    this.inputEl.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    console.log("copied code!");
    // this.confirmEl = 
    this.modalEl.close();
}

  showModal() {
    this.modalEl.open();
  }
  render() {
    return (
      <Host>
        <slot></slot>
        <calcite-button onClick={(_ev: Event) => this.showModal()} slot="primary" width="full">
            Embed
        </calcite-button>
        <calcite-modal ref={(el: HTMLCalciteModalElement) => this.modalEl = el} aria-labelledby="modal-title">
          <h3 slot="header" id="modal-title">{this.title}</h3>
          <div slot="content">
            <input ref={(el: HTMLInputElement) => this.inputEl = el} readonly/>
          </div>
          <calcite-button onClick={(_ev: Event) => this.copyText()} slot="primary" width="full">
            Copy
          </calcite-button>
        </calcite-modal> 
        {/* <calcite-popover ref={(el: HTMLCalcitePopoverElement ) => this.confirmEl = el} id="code-popover" offset-distance="6" offset-skidding="0" reference-element="code-button"
          add-click-handle close-button="false">
          <div style="padding:12px 16px">Copied to your clipboard</div>
      </calcite-popover>                */}
      </Host>
    );
  }

}
