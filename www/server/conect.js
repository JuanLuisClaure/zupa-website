"use strict";

var _conectar = require("./3C/conectar");

var _dinamicSvg = require("./canvasCtrl/dinamicSvg");

function setup(io) {
  var allClients = [];
  io.on('connection', function (socket) {
    socket.on('join', function (person_name) {
      console.log(person_name); // allClients.push(socket.conn.id)
    });
    socket.on('del', function (person_name) {
      console.log(allClients);
    });
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
}

module.exports = {
  setup: setup
};