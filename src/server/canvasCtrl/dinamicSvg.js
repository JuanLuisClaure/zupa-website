import { paper } from 'paper'



function iniciar(canvas){

  let si = paper.setup(canvas)
      // Get a reference to the canvas object
      // Create an empty project and a view for the canvas:



      // Create a Paper.js Path to draw a line into it

      // let transX = canvas.width * 0.5
      // let transY = canvas.height * 0.5
      // //
      //
      // paper.view.translate(transX, transY);
      //
      //
      // let ejeX = new paper.Path();
      // let ejeY = new paper.Path();
      // //
      // //
      // // //
      // // // Give the stroke a color
      // ejeX.strokeColor = 'black';
      // ejeX.strokeWidth = 5;
      // ejeY.strokeColor = 'black';
      // ejeY.strokeWidth = 5;
      // //
      // // //
      // let xA = new paper.Point(100, 0)
      // let xB = new paper.Point(200, 0)
      //
      //
      // let yea = ejeX.add(xA, xB)

      // let yA = new paper.Point(0, -canvas.height/2);
      // let yB = new paper.Point(0,  canvas.height/2);
      // ejeX.add(yA, yB)
      // console.log(paper.view);
      //
      //

}



function dibujarCirculo(){

  let ejeX = new paper.Path();
  ejeX.strokeColor = 'black';
  ejeX.strokeWidth = 5;
  let xA = new paper.Point(100, 100)
  let xB = new paper.Point(200, 200)
  let sea = ejeX.add(xA, xB)

  return sea

}


//
//
//
//





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



//

function getMousePos(canvas, evt) {
  let rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left - transX,
    y: evt.clientY - rect.top - transY
  }
};

function test(e){
  let s = 200
  let z = 200


  let cir = new paper.Path.Circle({
    center: [s, z],
    radius: 30,
    strokeColor: 'green',
    strokeWidth:  1.5,
    fillColor: 'red'
  });

  return cir
}

module.exports = {
  iniciar:iniciar,
  dibujarCirculo:dibujarCirculo,
  test:test
}




//
// PaperScope {
//   settings:
//    Base {
//      applyMatrix: true,
//      insertItems: true,
//      handleSize: 4,
//      hitTolerance: 0 },
//   project:
//    Project {
//      _scope: [Circular],
//      _index: 0,
//      _children: [],
//      _namedChildren: {},
//      _activeLayer: null,
//      _currentStyle:
//       Style {
//         _values: {},
//         _owner: null,
//         _project: [Circular],
//         _defaults: [Object] },
//      _view:
//       View {
//         _project: [Circular],
//         _scope: [Circular],
//         _element: null,
//         _pixelRatio: 1,
//         _viewSize: [Object],
//         _matrix: [Object],
//         _frameItems: {},
//         _frameItemCount: 0,
//         _itemEvents: [Object],
//         _autoUpdate: false,
//         _needsUpdate: false },
//      _selectionItems: {},
//      _selectionCount: 0,
//      _updateVersion: 0 },
//   projects:
//    [ Project {
//        _scope: [Circular],
//        _index: 0,
//        _children: [],
//        _namedChildren: {},
//        _activeLayer: null,
//        _currentStyle: [Object],
//        _view: [Object],
//        _selectionItems: {},
//        _selectionCount: 0,
//        _updateVersion: 0 } ],
//   tools: [],
//   _id: 0 }
