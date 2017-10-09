"use strict";

var io = require('socket.io-client');

var request = require('request');
/*
 * This is the jar (like a cookie container) we will use always
 */


var j = request.jar();
var socket = io('/', {
  'forceNew': true
});
socket.on('connect', function () {
  console.log(j);
  socket.emit('join', j);
});