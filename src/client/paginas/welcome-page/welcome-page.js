const riot = require('riot')
import '../../componentes/onboarding/onboarding'
import dispatcher from '../../app/dispatcher'
riot.tag2('welcome', '<div class="grid-container" data-medida="single"> <div class="flex_item--header" data-color="transparente"> <a href="#">subscribete a las noticias semanales </a> </div> <div class="flex_item--body" data-color="transparente"> <figure style="text-align: center;"> <img src="./client/assets/img/zupa.png" class="img-fluid" width="25%"> </figure> <h6 id="mensaje"></h6> <a href="#">sobre nosotros</a> <a href="#">contacto</a> <a href="#">restaurants</a> <a href="#">repartidores</a> </div> <div class="flex_item--footer"> <h5 class="flex_item--faq">FAQ</h5> <div class="flex_item--question"> <a href="#">Conoce como funciona</a> <a href="#">Conoce como funciona</a> <a href="#">Conoce como funciona</a> <a href="#">Conoce como funciona</a> <a href="#">Conoce como funciona</a> <a href="#">Conoce como funciona</a> <a href="#">Conoce como funciona</a> <a href="#">Conoce como funciona</a> </div> </div> </div>', 'welcome .flex_item--faq,[data-is="welcome"] .flex_item--faq{ justify-content: flex-start; } welcome .flex_item--question,[data-is="welcome"] .flex_item--question{ flex-wrap: nowrap; }', '', function(opts) {

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
