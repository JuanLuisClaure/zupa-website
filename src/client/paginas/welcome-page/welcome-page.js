const riot = require('riot')
import '../../componentes/onboarding/onboarding'
import dispatcher from '../../app/dispatcher'
riot.tag2('welcome', '<div class="grid-container" data-medida="single"> <div class="flex_item--header"> <div class="flex_item--links"> <a href="#">subscribirse</a> </div> <button class="flex_item--other mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"> <i class="material-icons">restaurant_menu</i> </button> </div> <div class="flex_item--body" data-color="transparente"> <div class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" style="text-align: center;flex-grow: 3; width:100vw; padding: 0px 0px!important;"> <figure> <img src="./client/assets/img/intento.png" class="img-fluid"> </figure> </div> <div class="flex_item--nav "> <div class="links_style mdl-card mdl-shadow--4dp" data-s="{cambiaAlgo}"> <a href="#" ref="test">sobre nosotros</a> </div> <div class="links_style mdl-card mdl-shadow--4dp" data-s="{cambiaAlgo}"> <a href="#">Contacto</a> </div> <div class="links_style mdl-card mdl-shadow--4dp" data-s="{cambiaAlgo}"> <a href="#">Restaurantes</a> </div> <div class="links_style mdl-card mdl-shadow--4dp" data-s="{cambiaAlgo}"> <a href="#">Delivery</a> </div> </div> <div class="flex_item--accion"> <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" style="background-color:#f4f4f4;color:#e96262;" onclick="{makeSomeCss}">Descargar App</button> <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" style="background-color:#f4f4f4;color:#e96262;">Presentacion</button> </div> </div> <div class="flex_item--footer" style="align-content: center;"> <button class="flex_item--faq mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"> <div type="button"> <i class="material-icons">live_help</i> </div> </button> <div class="flex_item--links"> <div class="lista"> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> </div> </div> </div> </div>', '', '', function(opts) {

  const tag = this
  tag.cambiaAlgo = 'fin'
  tag.makeSomeCss = () => {
      let a = tag.refs.test
      let b = 'entrada'
      let c = 3000
      tag.animationMethod(a, b, c)
  }

  tag.animationMethod = (element, res, time) => {

switch (res) {
  case 'active':

tag.cambiaAlgo = 'entrada'
tag.cambiaAlgo = 'salida'
tag.cambiaAlgo = 'fin'

      console.log(element, res, time);

    break;
    case 'entrada':

      var promise1 = new Promise(function(resolve, reject) {

        let x = ()=>{tag.cambiaAlgo = 'entrada'}
        resolve(x)

      });
      var promise2 = new Promise(function(resolve, reject) {

        let x = setTimeout(function() {
          tag.cambiaAlgo = 'fin'
        }, time);
        resolve(x)

      });

      Promise.all([promise1, promise2]).then(function(value) {

        console.log(tag.cambiaAlgo);

      });

      break;
      case 'mientras':

        console.log(res);
        break;
        case 'salida':

          console.log(res);
          break;
          case 'desactive':

            console.log(res);
            break;
  default:
    console.log('todomal');

}

  }

  tag.isFuncionarMensajero = (domElement, mensaje) => {

    let typewriter = new Typewriter(domElement);

    typewriter.deleteAll()
    .pauseFor(1000)
    .typeString(mensaje)
    .pauseFor(3000)
    .start();

  }

  tag.isMensajero = (domElement, mensaje) => {

    let typewriter = new Typewriter(domElement, {
      loop: true
    });

    typewriter.deleteAll()
    .pauseFor(1000)
    .deleteAll()
    .typeString('Compra rapido y facil')
    .pauseFor(3000)
    .deleteAll()
    .typeString('Descarga la app')
    .pauseFor(3000)
    .deleteAll()
    .typeString('yeahasha')
    .pauseFor(3000)
    .deleteAll()
    .start();

  }

});
