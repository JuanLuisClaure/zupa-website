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

riot.tag2('onboarding', '<div class="flexContainer"> <div class="header"> <p>hola</p> <p>hola</p> </div> <div class="content flexCenter"> <a href="/#/conoces?" class="homeButton" onclick="{entrarWeb}">Return Home</a> </div> <div class="footer"> <button type="button" name="button" onclick="{openSub}"></button> <div class="aaa" if="{abierto}"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="text" name="" value="aaaaaaaaaaaaaaaaa"> <input type="submit" name="" value="aaaaaaaaaaaaaaaaa"> </div> </div> </div>', 'onboarding .flexContainer,[data-is="onboarding"] .flexContainer{ display: flex; flex-direction:column; position: absolute; height: 100vh; width: 100vw; z-index: -1; background-color: rgba(229, 25, 25, 0) !important; } onboarding .flexCenter,[data-is="onboarding"] .flexCenter{ justify-content: center; align-items: stretch; } onboarding .header,[data-is="onboarding"] .header{ background-color: rgba(9, 29, 213, 1); flex: 0 1 auto; order: 1; } onboarding .footer,[data-is="onboarding"] .footer{ background-color: rgba(9, 29, 213, 1); flex: 0 1 auto; order: 3; } onboarding .content,[data-is="onboarding"] .content{ background-color: rgba(9, 29, 213, 0.77); flex: 51 1 auto; order:2; }', '', function (opts) {
  this.abierto = false;

  this.openSub = () => {
    this.abierto = !this.abierto;
  };

  this.entrarWeb = () => {
    let el = document.getElementById('myCanvas');
    let elId = el.classList.add('none');
    let data = 'Entrando a la website yeah';

    _dispatcher2.default.trigger('crear_toast', data);
  };

  this.on('mount', () => {
    let el = document.getElementById('myCanvas');
    el.setAttribute('style', 'background-color: rgba(229, 25, 25, 0) !important;');
    let elId = el.classList.remove('none');
  });
});

/***/ })

});
//# sourceMappingURL=3.map