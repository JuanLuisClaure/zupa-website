webpackJsonp([3],{

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(162);

const riot = __webpack_require__(15);

riot.tag2('welcome', '<onboarding></onboarding>', '', '', function (opts) {});

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dispatcher = __webpack_require__(28);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const riot = __webpack_require__(15);

riot.tag2('onboarding', '<div class="flexContainer-main" riot-style="background-attachment:fixed;background-position: center;background-repeat: no-repeat;background-size: cover;background-blend-mode: color;background-image:{imgBackground};" id="fondo"> <div class="cabezera"> <div class="flexContainer-cabezera"> <div class="supuestamente text-left"> <p><a href="/#/conoces?">The app!</a></p> </div> <div class="supuestamente text-right"> <p><a href="/#/presentacion">the shops</a></p> </div> </div> </div> <div class="contenido"> <div class="flexContainer-center"> <h1 id="mensaje"></h1> <div class="mdl-card mdl-shadow--4dp" if="{!abierto}" style="background-color:rgb(222, 222, 222)!important;"> <div class="mdl-card__supporting-text" style="word-wrap: break-word;"> <h3 id="sobre"></h3> </div> <div class="mdl-card__supporting-text"> <button type="button" name="button" onclick="{openSub}">subscribe</button> <button type="button" name="button" onclick="{entrarWeb}">Comprar Web</button> </div> </div> <div class="mdl-card mdl-shadow--4dp" if="{abierto}" style="background-color:rgb(222, 222, 222)!important;"> <div class="mdl-card__supporting-text" style="word-wrap: break-word;"> <h3 id="sobre"></h3> </div> <div class="mdl-card__supporting-text"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <button type="button" name="button" onclick="{openSub}">summit</button> </div> </div> </div> </div> <div class="piedepagina "> <div class="flexContainer-cabezera"> <div class="supuestamente text-left"> <p><a href="/#/contacto">Contact Us</a></p> </div> <div class="supuestamente text-right"> <p><a href="/#/contacto">Want to work?</a></p> </div> </div> </div> </div>', 'onboarding .flexContainer-main,[data-is="onboarding"] .flexContainer-main{ position: absolute; display: flex; flex-direction:column; height: 100vh; width: 100vw; } onboarding .flexContainer-center,[data-is="onboarding"] .flexContainer-center{ display: flex; flex-direction:column; align-items: center; justify-content: center; margin: 0 auto; } onboarding .flexContainer-cabezera,[data-is="onboarding"] .flexContainer-cabezera{ display: flex; flex-direction: row; justify-content: space-around; align-items: baseline; } onboarding .cabezera,[data-is="onboarding"] .cabezera{ background-color: transparent; flex: 0 1 auto; order: 1; } onboarding .piedepagina,[data-is="onboarding"] .piedepagina{ background-color: transparent; flex: 0 1 auto; order: 3; } onboarding .contenido,[data-is="onboarding"] .contenido{ background-color: transparent; flex: 51 1 auto; order:2; } onboarding .supuestamente,[data-is="onboarding"] .supuestamente{ margin: 0 auto; width: 100%; }', '', function (opts) {
  this.abierto = false;

  this.openSub = () => {
    this.abierto = !this.abierto;
  };

  this.entrarWeb = () => {
    let data = 'Entrando a la website yeah';

    _dispatcher2.default.trigger('crear_toast', data);
  };

  this.on('mount', () => {
    let el = document.getElementById('fondo');
    let app = document.getElementById('mensaje');
    this.isFuncionarMensajero(app, 'Hola como estas epseramos que tengas un hermoso dia');
    el.addEventListener('click', e => {
      let esto = {
        posX: e.clientX,
        posY: e.clientY,
        ejeX: window.innerHeight,
        ejeY: window.innerWidth
      };
      this.mandarEsto(esto);
    });
  });

  this.mandarEsto = esto => {
    if (esto.posX <= esto.ejeX / 2 && esto.posY <= esto.ejeY / 2) {
      let soy = 'quieroconocerzupa';
      let ass = document.getElementById('sobre');
      this.isFuncionarMensajero(ass, soy);
      this.preguntar(soy);
    } else if (esto.posX <= esto.ejeX / 2 && esto.posY >= esto.ejeY / 2) {
      let soy = 'quieroContactarme';
      let ass = document.getElementById('sobre');
      this.isFuncionarMensajero(ass, soy);
      this.preguntar(soy);
    } else if (esto.posX >= esto.ejeX / 2 && esto.posY <= esto.ejeY / 2) {
      let soy = 'soyunatienda';
      let ass = document.getElementById('sobre');
      this.isFuncionarMensajero(ass, soy);
      this.preguntar(soy);
    } else if (esto.posX >= esto.ejeX / 2 && esto.posY >= esto.ejeY / 2) {
      let soy = 'quierotrabajardeRepartidor';
      let ass = document.getElementById('sobre');
      this.isFuncionarMensajero(ass, soy);
      this.preguntar(soy);
    } else {}
  };

  this.preguntar = a => {
    let img = {
      a: 'linear-gradient(#EE8434, #EE8434), url(./client/assets/img/backTwo.jpg)',
      b: 'linear-gradient(#07A0C3, #07A0C3), url(./client/assets/img/backTwo.jpg)',
      c: 'linear-gradient(#EEF0F2, #EEF0F2), url(./client/assets/img/backTwo.jpg);',
      d: 'linear-gradient(#e96262, #e96262), url(./client/assets/img/backTwo.jpg);'
    };

    if (a === 'quieroconocerzupa') {
      this.imgBackground = img.d;
      this.update();
    } else if (a === 'soyunatienda') {
      this.imgBackground = img.b;
      this.update();
    } else if (a === 'quierotrabajardeRepartidor') {
      this.imgBackground = img.a;
      this.update();
    } else if (a === 'quieroContactarme') {
      this.imgBackground = img.c;
      this.update();
    } else {
      console.warn('no hay este caso extraño');
    }
  };

  this.isFuncionarMensajero = (domElement, mensaje) => {
    let typewriter = new Typewriter(domElement, {
      loop: true
    });
    typewriter.typeString(mensaje).pauseFor(2500).deleteAll().typeString('saving...').pauseFor(2500).deleteChars(7).typeString('saving...').pauseFor(2500).start();
  };
});

/***/ })

});
//# sourceMappingURL=3.map