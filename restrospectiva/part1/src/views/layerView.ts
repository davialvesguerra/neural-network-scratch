import { NeuronView } from "./neuronView"

export class LayerView{
  static layer(lenNeurons: number){
    let layer = ''

    for(let i:number = 0; i < lenNeurons; i++){
      layer += NeuronView.shapeNeuron()

    }
    return layer
  }
}