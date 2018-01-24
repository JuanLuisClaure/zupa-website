webpackJsonp([3],{

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(172);

var _dispatcher = __webpack_require__(23);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const riot = __webpack_require__(10);

riot.tag2('welcome', '<div class="grid-container" data-medida="single"> <div class="flex_item--header" data-color="transparente"> <a href="#">sobre nosotros</a> <a href="#">contacto</a> <figure style="text-align: center;"> <img src="./client/assets/img/zupa.png" class="img-fluid" width="55%"> </figure> <a href="#">restaurants</a> <a href="#">repartidores</a> </div> <div class="flex_item--body" data-color="transparente"> <h1>ZUPAMENTE FACIL</h1> <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h6> </div> <div class="flex_item--footer" data-color="transparente"> <button type="button" name="button">Descargar App</button> <button type="button" name="button">Presentacion</button> </div> </div>', 'welcome .grid-container,[data-is="welcome"] .grid-container{ display: grid; background-image: url(\'./client/assets/img/backOne.jpg\'); background-attachment:fixed; background-position: center; background-repeat: no-repeat; background-size: cover; background-blend-mode: color } welcome .grid-container[data-medida="single"],[data-is="welcome"] .grid-container[data-medida="single"]{ grid-template-columns:repeat(1, 1fr); grid-template-rows: 17vh 66vh 17vh; } welcome .estilos-prueba,[data-is="welcome"] .estilos-prueba{ background-color: rgba(74, 211, 215, 0.62); } welcome .flex_item--header,[data-is="welcome"] .flex_item--header{ display: flex; justify-content: space-around; align-items: center; } welcome .flex_item--body,[data-is="welcome"] .flex_item--body{ display: flex; flex-direction: column; justify-content: center; align-items: center; } welcome .flex_item--footer,[data-is="welcome"] .flex_item--footer{ display: flex; justify-content: space-around; align-items: center; } welcome .flex_item--header[data-color="transparente"],[data-is="welcome"] .flex_item--header[data-color="transparente"]{ background-color:rgba(207, 207, 208, 0.49)!important; } welcome .flex_item--body[data-color="transparente"],[data-is="welcome"] .flex_item--body[data-color="transparente"]{ background-color:rgba(207, 207, 208, 0.49)!important; } welcome .flex_item--footer[data-color="transparente"],[data-is="welcome"] .flex_item--footer[data-color="transparente"]{ background-color:rgba(207, 207, 208, 0.49)!important; }', '', function (opts) {
  const tag = this;
  tag.cards = [{
    name: "Real",
    id: "181",
    img: "./client/assets/img/welcome_card.jpg",
    title: "Holavida",
    parrafo: "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }, {
    name: "Amistoso",
    id: "182",
    img: "./client/assets/img/welcome_card.jpg",
    title: "ComoEstas?",
    parrafo: "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }, {
    name: "Amable",
    id: "182",
    img: "./client/assets/img/welcome_card.jpg",
    title: "SiguesPensandoEnMi?",
    parrafo: "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }];
});

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dispatcher = __webpack_require__(23);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _intinput = __webpack_require__(173);

var _intinput2 = _interopRequireDefault(_intinput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const riot = __webpack_require__(10);

riot.tag2('onboarding', '<div class="flexContainer-main" riot-style="background-attachment:fixed;background-position: center;background-repeat: no-repeat;background-size: cover;background-blend-mode: color;background-image:{imgBackground};" id="fondo"> <div class="cabezera"> <div class="flexContainer-cabezera"> <div class="supuestamente text-left"> <p><button type="button" name="button" onclick="{openDes.bind(this, \'conoces?\')}">The app!</button></p> </div> <div class="supuestamente text-right"> <p><button type="button" name="button" onclick="{openDes.bind(this, \'presentacion\')}">the shops</button></p> </div> </div> </div> <div class="contenido"> <div class="flexContainer-center"> <legend if="{!abierto}"> <h3 id="mensaje"></h3> <button type="button" name="button" onclick="{openSub}">subscribe</button> <button type="button" name="button" onclick="{entrarWeb}">Comprar(BETA)</button> </legend> <div class="mdl-card mdl-shadow--4dp text-center" style="background-color:rgba(210, 210, 210, 0.47)!important;width:92%;" if="{abierto}"> <div class="mdl-card__supporting-text" style="word-wrap: break-word;"> <h3 id="sobre"></h3> <hr> </div> <div class="mdl-card__supporting-text"> <intltelinput opts="{this.necesidad}"></intltelinput> </div> </div> </div> </div> <div class="piedepagina "> <div class="flexContainer-cabezera"> <div class="supuestamente text-left"> <p><button type="button" name="button" onclick="{openDes.bind(this, \'contacto\')}">Contact Us</button></p> </div> <div class="supuestamente text-right"> <p><button type="button" name="button" onclick="{openDes.bind(this, \'contacto\')}">Want to work?</button></p> </div> </div> </div> </div>', 'onboarding .flexContainer-main,[data-is="onboarding"] .flexContainer-main{ position: absolute; display: flex; flex-direction:column; height: 100vh; width: 100vw; } onboarding .flexContainer-center,[data-is="onboarding"] .flexContainer-center{ display: flex; flex-direction:column; align-items: center; justify-content: center; margin: 17% auto; } onboarding .flexContainer-cabezera,[data-is="onboarding"] .flexContainer-cabezera{ display: flex; flex-direction: row; justify-content: space-around; align-items: baseline; } onboarding .cabezera,[data-is="onboarding"] .cabezera{ background-color: transparent; flex: 0 1 auto; order: 1; } onboarding .piedepagina,[data-is="onboarding"] .piedepagina{ background-color: transparent; flex: 0 1 auto; order: 3; } onboarding .contenido,[data-is="onboarding"] .contenido{ background-color: transparent; flex: 51 1 auto; order:2; } onboarding .supuestamente,[data-is="onboarding"] .supuestamente{ margin: 0 auto; width: 100%; }', '', function (opts) {
  this.necesidad = {
    puerta: this.abierto,
    veramo: this.openSub
  };
  this.abierto = false;
  this.listo = true;
  this.imgBackground = 'linear-gradient(#EE8434, #EE8434), url(./client/assets/img/backTwo.jpg)';

  this.openSub = () => {
    this.abierto = !this.abierto;
  };

  this.ahorateDescargamos = () => {
    alert('lo logramos');
  };

  this.openDes = sub => {
    if (sub === 'conoces?') {
      this.isFuncionarMensajero(document.getElementById('sobre'), 'Conoce mas sobre la app');
      setTimeout(() => {
        location.href = 'http://localhost:3000/#/' + sub;
      }, 5000);
    } else if (sub === 'presentacion') {
      this.isFuncionarMensajero(document.getElementById('sobre'), 'Aumenta tus ventas junto a Zupa');
      setTimeout(() => {
        location.href = 'http://localhost:3000/#/' + sub;
      }, 5000);
    } else if (sub === 'contacto') {
      this.isFuncionarMensajero(document.getElementById('sobre'), 'Incrementa tus ingresos trabajando desde tu auto');
      setTimeout(() => {
        location.href = 'http://localhost:3000/#/' + sub;
      }, 5000);
    } else if (sub === 'contacto') {
      this.isFuncionarMensajero(document.getElementById('sobre'), 'contactanos para cualquier duda');
      setTimeout(() => {
        location.href = 'http://localhost:3000/#/' + sub;
      }, 5000);
    } else {}
  };

  this.entrarWeb = () => {
    this.isFuncionarMensajero(document.getElementById('sobre'), 'DESCARGA LA APP');
    let data = 'Estamos en Beta';

    _dispatcher2.default.trigger('crear_toast', data);
  };

  this.on('mount', () => {
    let el = document.getElementById('fondo');
    this.isMensajero(document.getElementById('mensaje'), 'Bienvenidos a Zupa');
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
      this.preguntar(soy);
    } else if (esto.posX <= esto.ejeX / 2 && esto.posY >= esto.ejeY / 2) {
      let soy = 'quieroContactarme';
      this.preguntar(soy);
    } else if (esto.posX >= esto.ejeX / 2 && esto.posY <= esto.ejeY / 2) {
      let soy = 'soyunatienda';
      this.preguntar(soy);
    } else if (esto.posX >= esto.ejeX / 2 && esto.posY >= esto.ejeY / 2) {
      let soy = 'quierotrabajardeRepartidor';
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
    let typewriter = new Typewriter(domElement);
    typewriter.deleteAll().pauseFor(1000).typeString(mensaje).pauseFor(3000).start();
  };

  this.isMensajero = (domElement, mensaje) => {
    let typewriter = new Typewriter(domElement, {
      loop: true
    });
    typewriter.deleteAll().pauseFor(1000).deleteAll().typeString('Compra rapido y facil').pauseFor(3000).deleteAll().typeString('Descarga la app').pauseFor(3000).deleteAll().typeString('yeahasha').pauseFor(3000).deleteAll().start();
  };
});

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const riot = __webpack_require__(10);

riot.tag2('intltelinput', '<div class="formcenter"> <div class="style-tag"> <select id="selected" onchange="{this.verValor}"> <option each="{x in this.allCountries}" riot-value="{x.code}">{x.name} - {x.ios2}</option> </select> </div> <div class="ahorasi"> <input id="country" riot-value="{this.jobs}"> <input id="number"> </div> <div class="clear"> <input id="nombre"> <button type="button" name="button" onclick="{this.needhelp}">Mandar</button> </div> </div>', 'intltelinput .has-float-label,[data-is="intltelinput"] .has-float-label{ display: block; position: relative; } intltelinput .has-float-label label,[data-is="intltelinput"] .has-float-label label,intltelinput .has-float-label > span,[data-is="intltelinput"] .has-float-label > span{ position: absolute; left: 0; top: 0; cursor: text; font-size: 75%; opacity: 1; -webkit-transition: all .2s; transition: all .2s; } intltelinput .has-float-label select,[data-is="intltelinput"] .has-float-label select{ -webkit-appearance: none; -moz-appearance: none; appearance: none; } intltelinput .has-float-label textarea,[data-is="intltelinput"] .has-float-label textarea{ width: 100%; } intltelinput .has-float-label input,[data-is="intltelinput"] .has-float-label input,intltelinput .has-float-label select,[data-is="intltelinput"] .has-float-label select,intltelinput .has-float-label textarea,[data-is="intltelinput"] .has-float-label textarea{ font-size: inherit; padding-top: 1em; margin-bottom: 2px; border: 0; border-radius: 0; border-bottom: 2px solid rgba(0, 0, 0, 0.1); } intltelinput .has-float-label input::-webkit-input-placeholder,[data-is="intltelinput"] .has-float-label input::-webkit-input-placeholder,intltelinput .has-float-label select::-webkit-input-placeholder,[data-is="intltelinput"] .has-float-label select::-webkit-input-placeholder,intltelinput .has-float-label textarea::-webkit-input-placeholder,[data-is="intltelinput"] .has-float-label textarea::-webkit-input-placeholder{ opacity: 1; -webkit-transition: all .2s; transition: all .2s; } intltelinput .has-float-label input::-moz-placeholder,[data-is="intltelinput"] .has-float-label input::-moz-placeholder,intltelinput .has-float-label select::-moz-placeholder,[data-is="intltelinput"] .has-float-label select::-moz-placeholder,intltelinput .has-float-label textarea::-moz-placeholder,[data-is="intltelinput"] .has-float-label textarea::-moz-placeholder{ opacity: 1; transition: all .2s; } intltelinput .has-float-label input:-ms-input-placeholder,[data-is="intltelinput"] .has-float-label input:-ms-input-placeholder,intltelinput .has-float-label select:-ms-input-placeholder,[data-is="intltelinput"] .has-float-label select:-ms-input-placeholder,intltelinput .has-float-label textarea:-ms-input-placeholder,[data-is="intltelinput"] .has-float-label textarea:-ms-input-placeholder{ opacity: 1; transition: all .2s; } intltelinput .has-float-label input::placeholder,[data-is="intltelinput"] .has-float-label input::placeholder,intltelinput .has-float-label select::placeholder,[data-is="intltelinput"] .has-float-label select::placeholder,intltelinput .has-float-label textarea::placeholder,[data-is="intltelinput"] .has-float-label textarea::placeholder{ opacity: 1; -webkit-transition: all .2s; transition: all .2s; } intltelinput .has-float-label input:placeholder-shown:not(:focus)::-webkit-input-placeholder,[data-is="intltelinput"] .has-float-label input:placeholder-shown:not(:focus)::-webkit-input-placeholder,intltelinput .has-float-label select:placeholder-shown:not(:focus)::-webkit-input-placeholder,[data-is="intltelinput"] .has-float-label select:placeholder-shown:not(:focus)::-webkit-input-placeholder,intltelinput .has-float-label textarea:placeholder-shown:not(:focus)::-webkit-input-placeholder,[data-is="intltelinput"] .has-float-label textarea:placeholder-shown:not(:focus)::-webkit-input-placeholder{ opacity: 0; } intltelinput .has-float-label input:placeholder-shown:not(:focus)::-moz-placeholder,[data-is="intltelinput"] .has-float-label input:placeholder-shown:not(:focus)::-moz-placeholder,intltelinput .has-float-label select:placeholder-shown:not(:focus)::-moz-placeholder,[data-is="intltelinput"] .has-float-label select:placeholder-shown:not(:focus)::-moz-placeholder,intltelinput .has-float-label textarea:placeholder-shown:not(:focus)::-moz-placeholder,[data-is="intltelinput"] .has-float-label textarea:placeholder-shown:not(:focus)::-moz-placeholder{ opacity: 0; } intltelinput .has-float-label input:placeholder-shown:not(:focus):-ms-input-placeholder,[data-is="intltelinput"] .has-float-label input:placeholder-shown:not(:focus):-ms-input-placeholder,intltelinput .has-float-label select:placeholder-shown:not(:focus):-ms-input-placeholder,[data-is="intltelinput"] .has-float-label select:placeholder-shown:not(:focus):-ms-input-placeholder,intltelinput .has-float-label textarea:placeholder-shown:not(:focus):-ms-input-placeholder,[data-is="intltelinput"] .has-float-label textarea:placeholder-shown:not(:focus):-ms-input-placeholder{ opacity: 0; } intltelinput .has-float-label input:placeholder-shown:not(:focus)::placeholder,[data-is="intltelinput"] .has-float-label input:placeholder-shown:not(:focus)::placeholder,intltelinput .has-float-label select:placeholder-shown:not(:focus)::placeholder,[data-is="intltelinput"] .has-float-label select:placeholder-shown:not(:focus)::placeholder,intltelinput .has-float-label textarea:placeholder-shown:not(:focus)::placeholder,[data-is="intltelinput"] .has-float-label textarea:placeholder-shown:not(:focus)::placeholder{ opacity: 0; } intltelinput .has-float-label input:placeholder-shown:not(:focus) + *,[data-is="intltelinput"] .has-float-label input:placeholder-shown:not(:focus) + *,intltelinput .has-float-label select:placeholder-shown:not(:focus) + *,[data-is="intltelinput"] .has-float-label select:placeholder-shown:not(:focus) + *,intltelinput .has-float-label textarea:placeholder-shown:not(:focus) + *,[data-is="intltelinput"] .has-float-label textarea:placeholder-shown:not(:focus) + *{ font-size: 155%; opacity: .92; top: 1.25em; } intltelinput .has-float-label input:focus,[data-is="intltelinput"] .has-float-label input:focus,intltelinput .has-float-label select:focus,[data-is="intltelinput"] .has-float-label select:focus,intltelinput .has-float-label textarea:focus,[data-is="intltelinput"] .has-float-label textarea:focus{ outline: none; border-color: rgba(0, 0, 0, 0.5); } intltelinput .has-float-label select,[data-is="intltelinput"] .has-float-label select{ padding-right: 1em; background: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3E%3Cpath fill=\'%23333\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3E%3C/svg%3E") no-repeat right 0.5em bottom 0.25em; background-size: 8px 10px; } intltelinput input[type=text],[data-is="intltelinput"] input[type=text],intltelinput textarea,[data-is="intltelinput"] textarea{ -webkit-transition: all 0.30s ease-in-out; -moz-transition: all 0.30s ease-in-out; -ms-transition: all 0.30s ease-in-out; -o-transition: all 0.30s ease-in-out; outline: none; padding: 3px 0px 3px 3px; margin: 5px 1px 3px 0px; border: 1px solid #DDDDDD; } intltelinput input[type=text]:focus,[data-is="intltelinput"] input[type=text]:focus,intltelinput textarea:focus,[data-is="intltelinput"] textarea:focus{ box-shadow: 0 0 5px rgba(81, 203, 238, 1); padding: 3px 0px 3px 3px; margin: 5px 1px 3px 0px; border: 1px solid rgba(81, 203, 238, 1); } intltelinput .ahorasi,[data-is="intltelinput"] .ahorasi{ display: flex; flex-direction: row; } intltelinput .formcenter,[data-is="intltelinput"] .formcenter{ display: flex; flex-direction: column; width:50%; margin: 0 auto; } intltelinput .style-tag select,[data-is="intltelinput"] .style-tag select{ flex: 0 0 auto; order: 1; outline: none; color: #74646e; border: 1px solid #C8BFC4; border-radius: 4px; box-shadow: inset 1px 1px 2px #ddd8dc; background: rgba(48, 141, 200, 0.77); } intltelinput .style-tag,[data-is="intltelinput"] .style-tag{ border: 1px solid #111; border-radius: 3px; overflow: hidden; background: url(http://www.stackoverflow.com/favicon.ico) 96% / 20% no-repeat #eee; } intltelinput #number,[data-is="intltelinput"] #number{ flex: 0 1 auto; order: 2; border:1px solid white; background: rgba(48, 141, 200, 0.77); } intltelinput #country,[data-is="intltelinput"] #country{ flex: 0 5 auto; order: 1; width: 31%; border:1px solid white; background: rgba(48, 141, 200, 0.77); } intltelinput #nombre,[data-is="intltelinput"] #nombre{ flex: 0 0 auto; order: 2; border:1px solid white; background: rgba(48, 141, 200, 0.77); }', '', function (opts) {
  this.jobs = '----';
  this.on('mount', () => {
    console.log(this.opts);
  });

  this.verValor = () => {
    let othe = document.getElementById('selected');
    let elem = document.getElementById('number');
    let name = document.getElementById('nombre');
    this.jobs = othe.value;
    console.log(othe.value + elem.value + name.value);
  };

  this.needhelp = () => {
    parent.openSub;
    let othe = document.getElementById('country');
    let elem = document.getElementById('number');
    let name = document.getElementById('nombre');
    console.log(othe.value + elem.value + ' from ' + name.value);
  };

  this.allCountries = [{
    name: "Bolivia",
    ios2: "bo",
    code: "591"
  }, {
    name: "Åland Islands",
    ios2: "ax",
    code: "358"
  }, {
    name: "Colombia",
    ios2: "co",
    code: "42"
  }, {
    name: "AEEUU",
    ios2: "eu",
    code: "11"
  }];
});

/***/ })

});
//# sourceMappingURL=3.map