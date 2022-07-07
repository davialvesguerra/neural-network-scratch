import './style.css'

import { Network } from './modules/network'
import { NetworkView } from './views/networkView'
import { FCLayer } from './modules/FCLayer'

const app = document.querySelector<HTMLDivElement>('#app')!

const net = new Network()

net.add(new FCLayer(4,3))
net.add(new FCLayer(2,3))
net.add(new FCLayer(3,1))

const arcView = new NetworkView(net.layers) 
arcView.update()