"use strict";

var _conectar = require("./3C/conectar");

// import { iniciar, test, dibujarCirculo } from './canvasCtrl/dinamicSvg'
function setup(io) {
  var allClients = [];
  io.on('connection', function (socket) {
    socket.emit('solicitud', 'tu nombre?');
    socket.on('join', function (canvas) {//allClients.push(socket.conn.id)
      // let yeas = iniciar(canvas)
      // console.log(yeas);
    }); // socket.on('consultas', mandarCanvas);
  }); // socket.on('join', (name)=>{
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
} // function mandarCanvas(x){
//   // let yeas = dibujarCirculo()
//   console.log(yeas);
// }


module.exports = {
  setup: setup
};