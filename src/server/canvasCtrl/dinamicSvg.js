

//   // Get a reference to the canvas object
//   let canvas = document.getElementById('myCanvas');
//   // Create an empty project and a view for the canvas:
//   paper.setup(canvas);
//   // Create a Paper.js Path to draw a line into it
//
//   canvas.width = window.innerWidth
//   canvas.height = window.innerHeight
//   let transX = window.innerWidth * 0.5
//   let transY = window.innerHeight * 0.5
//
//
//   paper.view.translate(transX, transY);
//
//
//   let ejeX = new paper.Path();
//   let ejeY = new paper.Path();
//   let gridX = new paper.Path();
//   let gridY = new paper.Path();
//
//
//
//   // Give the stroke a color
//   ejeX.strokeColor = 'white';
//   ejeX.strokeWidth = 0.5;
//   ejeY.strokeColor = 'white';
//   ejeY.strokeWidth = 0.5;
//   gridX.strokeColor = 'white';
//   gridX.strokeWidth = 0.5;
//   gridY.strokeColor = 'white';
//   gridY.strokeWidth = 0.5;
//
//
//   let xA = new paper.Point(-window.innerWidth/2, 0)
//   let xB = new paper.Point( window.innerWidth/2, 0)
//   ejeY.add(xA, xB)
//
//   let yA = new paper.Point(0, -window.innerHeight/2);
//   let yB = new paper.Point(0,  window.innerHeight/2);
//   ejeX.add(yA, yB)
//
//
//
// let s = 0
// let z = 0
//
//
// let cir = new paper.Path.Circle({
//     center: [s, z],
//     radius: 30,
//     strokeColor: 'green',
//     strokeWidth:  1.5,
//     fillColor: 'red'
// });
//
//
//
//
// canvas.onmousemove = function(e) {
//     let pos = getMousePos(canvas, e)
//     cir.position = pos
//     console.log(pos);
// }





// paper.view.onFrame = (e)=>{
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
        let rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left - transX,
            y: evt.clientY - rect.top - transY
          }
        };

function setupCanvas(a){
  return  console.log('yeah elmensaje', a);
}

        module.exports = {
          obvio:setupCanvas
        }
