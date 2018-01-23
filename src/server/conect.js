import { on, off } from './3C/conectar'


function setup(io) {
    io.on('connect', (socket) => {
      console.log('socket connectto zupa.delivery server. thanks for check in')

    })
}


module.exports = {
  setup:setup
}
