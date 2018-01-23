"use strict";

var _conectar = require("./3C/conectar");

function setup(io) {
  io.on('connect', function (socket) {
    console.log('socket connectto zupa.delivery server. thanks for check in');
  });
}

module.exports = {
  setup: setup
};