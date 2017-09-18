import { on, off } from './3C/conectar'


function setup(io) {
    io.on('connect', (socket) => {
      console.log('se conecto los websocket')
    })
}


module.exports = {
  setup:setup
}
