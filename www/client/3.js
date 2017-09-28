webpackJsonp([3],{

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(190);

const riot = __webpack_require__(15);

riot.tag2('welcome', '<div if="{!estar}"> <onboarding></onboarding> <onboarding></onboarding> <onboarding></onboarding> <onboarding></onboarding> <onboarding></onboarding> <onboarding></onboarding> <onboarding></onboarding> <onboarding></onboarding> <onboarding></onboarding> <onboarding></onboarding> <onboarding></onboarding> <onboarding></onboarding> <onboarding></onboarding> <onboarding></onboarding> <onboarding></onboarding> <onboarding></onboarding> </div>', '', '', function (opts) {
  this.estar = false;

  this.abrirEstar = () => {
    this.estar = !this.estar;
    this.update();
  };
});

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dispatcher = __webpack_require__(28);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const riot = __webpack_require__(15);

riot.tag2('onboarding', '<div class="flexContainer flexCenter itemCenter fullHeight centerImage"> <div class="flexContainer header "> <p>hola</p> </div> <div class="flexContainer flexCenter itemCenter fullHeight"> <a href="/#/conoces?" class="homeButton">Return Home</a> </div> <div class="flexContainer footer "> <p>adios!</p> </div> </div>', 'onboarding .flexi-container,[data-is="onboarding"] .flexi-container{ display: flex; flex-direction:column; height: 100%; } onboarding .header,[data-is="onboarding"] .header{ background-color: red; } onboarding .footer,[data-is="onboarding"] .footer{ background-color: green; } onboarding .flexContainer,[data-is="onboarding"] .flexContainer{ display: flex; flex-direction:column; } onboarding .flexCenter,[data-is="onboarding"] .flexCenter{ justify-content: center; } onboarding .fullHeight,[data-is="onboarding"] .fullHeight{ height: 100vh; } onboarding .itemCenter,[data-is="onboarding"] .itemCenter{ align-items: center; } onboarding .centerImage,[data-is="onboarding"] .centerImage{ background: url(\'./client/assets/img/backThree.jpg\') center; background-size: cover; }', '', function (opts) {
  this.entrarWeb = () => {
    this.parent.abrirEstar();
    let data = 'Entrando a la website yeah';

    _dispatcher2.default.trigger('crear_toast', data);
  };
});

/***/ })

});
//# sourceMappingURL=3.map