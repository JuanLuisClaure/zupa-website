"use strict";

var _conectar = require("./3C/conectar");

function setup(io) {
  io.on('connect', function (socket) {
    console.log('se conecto los websocket');
  });
}

module.exports = {
  setup: setup
};