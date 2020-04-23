import { Element, State, Component, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'drop-area',
  styleUrl: 'drop-area.scss',
  shadow: true
})
export class DropArea {

  @Element() public dropArea: HTMLElement;
  
  @Prop() allowedTypes:Array<string> = ["image/*"]

  /** Emits the chat input */
  @Event({ 
    eventName: 'onFilesSubmitted',
    composed: true,
    cancelable: true,
    bubbles: true
  }) onFilesSubmitted: EventEmitter;  

  @State() public highlighted: boolean = false;
  // @State() public uploads: DropElement[] = [];

  componentDidLoad() {
    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      this.dropArea.addEventListener(eventName, this.preventDefaults, false)
      document.body.addEventListener(eventName, this.preventDefaults, false)
    });

    // // Highlight drop area when item is dragged over it
    ['dragenter', 'dragover'].forEach(eventName => {
      this.dropArea.addEventListener(eventName, ()=> this.highlighted = true, false)
    });

    ['dragleave', 'drop'].forEach(eventName => {
      this.dropArea.addEventListener(eventName, ()=> this.highlighted = false, false)
    });

    this.dropArea.addEventListener('drop', this.handleDrop, false)

  }
  handleDrop = (e) => {
    var dt = e.dataTransfer
    var files = dt.files

    this.handleFiles(files)
  }

  handleFiles = (files) => {
    files = [...files]
    console.log("Handle Files", files)
    this.onFilesSubmitted.emit( files );
  }

  preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
  }  
  render() {
    return <div id="drop-area">
      <form class={{ 'highlight' : this.highlighted }}>
        <h3>Drag Files to Upload</h3>
        <p>Maximum Size: 200 gb </p>
        <p>
          Supported types: Spreadsheet CSV, Excel, Shapefile, GeoJSON, ArcGIS GeoService, PDF, Word DOC, Images
        </p>
        <input type="file" id="fileElem" multiple accept={this.allowedTypes.join(",")} onChange={(event: any) => this.handleFiles(event.target.files)}/>
        <label class="button retry" htmlFor="fileElem">Browse</label>
      </form>
    </div>
  }

}
