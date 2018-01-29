const riot = require('riot')
import '../../componentes/onboarding/onboarding'
import dispatcher from '../../app/dispatcher'
riot.tag2('welcome', '<div class="grid-container" data-medida="single"> <div class="flex_item--header"> <div class="flex_item--links"> <a href="#">subscribirse</a> </div> <button class="flex_item--other mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"> <i class="material-icons">restaurant_menu</i> </button> </div> <div class="flex_item--body" data-color="transparente"> <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" style="text-align: center;flex-grow: 3; width:100vw;"> <figure> <img src="./client/assets/img/backTwo.jpg" class="img-fluid" width="25%"> </figure> </button> <div class="flex_item--nav"> <a href="#">sobre nosotros</a> <a href="#">contacto</a> <a href="#">restaurants</a> <a href="#">repartidores</a> </div> <div class="flex_item--accion"> <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Descargar App</button> <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Presentacion</button> </div> </div> <div class="flex_item--footer" style="align-content: center;"> <button class="flex_item--faq mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"> <div type="button"> <i class="material-icons">live_help</i> </div> </button> <div class="flex_item--links"> <div class="lista"> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> <a href="#">alguna pregunta</a> </div> </div> </div> </div>', '', '', function(opts) {

  const tag = this

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
