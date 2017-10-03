"use strict";
'use stric'; // Get a reference to the canvas object

var canvas = document.getElementById('myCanvas'); // Create an empty project and a view for the canvas:

paper.setup(canvas); // Create a Paper.js Path to draw a line into it:

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var transX = window.innerWidth * 0.5;
var transY = window.innerHeight * 0.5;
paper.view.translate(transX, transY);
var ejeX = new paper.Path();
var ejeY = new paper.Path();
var gridX = new paper.Path();
var gridY = new paper.Path(); // Give the stroke a color

ejeX.strokeColor = 'white';
ejeX.strokeWidth = 0.5;
ejeY.strokeColor = 'white';
ejeY.strokeWidth = 0.5;
gridX.strokeColor = 'white';
gridX.strokeWidth = 0.5;
gridY.strokeColor = 'white';
gridY.strokeWidth = 0.5;
var xA = new paper.Point(-window.innerWidth / 2, 0);
var xB = new paper.Point(window.innerWidth / 2, 0);
ejeY.add(xA, xB);
var yA = new paper.Point(0, -window.innerHeight / 2);
var yB = new paper.Point(0, window.innerHeight / 2);
ejeX.add(yA, yB);
var s = 0;
var z = 0;
var cir = new paper.Path.Circle({
  center: [s, z],
  radius: 30,
  strokeColor: 'green',
  strokeWidth: 1.5,
  fillColor: 'red'
});
var a = new paper.Point(-40, -window.innerWidth / 2);
var b = new paper.Point(40, window.innerWidth / 2);
gridY.add(a, b);

canvas.onmousemove = function (e) {
  var pos = getMousePos(canvas, e);
  cir.position = pos;
  console.log(pos);
}; // paper.view.onFrame = (e)=>{
//
//   let dx = Math.random() * 2
//   let dy = Math.sin(dx)
//
//        if(cir.position.x - cir.radius > window.innerWidth || cir.position.x - cir.radius < 0){
//          dx = -dx
//        }
//        if(cir.position.y - cir.radius > window.innerHeight || cir.position.y - cir.radius < 0){
//          dy = -dy
//        }
//
//        dx += dx
//        dy += dy
//
// }
//


function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left - transX,
    y: evt.clientY - rect.top - transY
  };
}

;