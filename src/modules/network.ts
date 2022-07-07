export class Network{

  private _layers: Array<number>

  constructor(){
    this._layers = []
  }

  get layers(){
    return this._layers
  }

  add(layer: any){
    this._layers.push(layer)
  }
}