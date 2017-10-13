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

riot.tag2('onboarding', '<div class="flexContainer" riot-style="background-attachment:fixed;background-position: center;background-repeat: no-repeat;background-size: cover;background-blend-mode: color;background-image:{imgBackground};" id="fondo"> <div class="header"> <p>hola</p> <p>hola</p> </div> <div class="content flexCenter"> <a href="/#/conoces?" class="homeButton" onclick="{entrarWeb}">Return Home</a> </div> <div class="footer"> <button type="button" name="button" onclick="{openSub}"></button> <div class="aaa" if="{abierto}"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="submit" name="" value="aaaaaaaaaaaaaaaaa"> </div> </div> </div>', 'onboarding .flexContainer,[data-is="onboarding"] .flexContainer{ display: flex; flex-direction:column; position: absolute; height: 100vh; width: 100vw; } onboarding .flexCenter,[data-is="onboarding"] .flexCenter{ justify-content: center; align-items: stretch; } onboarding .header,[data-is="onboarding"] .header{ background-color: transparent; flex: 0 1 auto; order: 1; } onboarding .footer,[data-is="onboarding"] .footer{ background-color: transparent; flex: 0 1 auto; order: 3; } onboarding .content,[data-is="onboarding"] .content{ background-color: transparent; flex: 51 1 auto; order:2; }', '', function (opts) {
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
      a: 'linear-gradient(#EE8434, #EE8434), url(./client/assets/img/backThree.jpg)',
      b: 'linear-gradient(#07A0C3, #07A0C3), url(./client/assets/img/backTwo.jpg)',
      c: 'linear-gradient(#e96262, #e96262), url(./client/assets/img/backTwo.jpg);',
      d: 'linear-gradient(#e96262, #e96262), url(./client/assets/img/zupa.png);'
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
});

/***/ })

});
//# sourceMappingURL=3.map