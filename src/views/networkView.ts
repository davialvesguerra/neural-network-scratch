import { LayerView } from "./layerView"


export class NetworkView{
  private _arc: Array<number>
  private _designArc: HTMLElement | null

  constructor(arc: any){
    this._arc = arc
    this._designArc = document.querySelector('#netArchitecture')
  }

  get designArc(){
    return this._designArc
  }

  update(){
    this._arc.forEach((layer: any, indexLayer: number)=>{
      const lenLayer = layer.input_size

      const layerDesign = `
        <div id="layer_${indexLayer}" class="layer"> 
          <p>Layer ${indexLayer}</p></br>
          ${LayerView.layer(lenLayer)}
        </div>
      `
      if(this._designArc){
        this._designArc.innerHTML += layerDesign
      }

    })
  }
}