import { on, off } from './3C/conectar'
import { obvio } from './canvasCtrl/dinamicSvg'



function setup(io) {


  var allClients = []



    io.on('connection', (socket)=>{

      socket.on('join', (person_name)=>{
        console.log(person_name);
        // allClients.push(socket.conn.id)
      });

      socket.on('del', (person_name)=>{
        console.log(allClients);
      });

    })


    // socket.on('join', (name)=>{
    //   console.log('nuevo cliente', name);
    // })
    //
    //

    // NOTE
    // if(socket.connect){
    //
    //   console.log(socket.conn.id)
    // }else{
    //
    //   console.log(socket.disconnect());
    // }
     //




    // io.on('connect', (socket) => {
    //   console.log(socket);
    //   socket.on('consultas', (ada)=>{
    //     obvio(ada)
    //   })
    // })
}



module.exports = {
  setup:setup
}
