webpackJsonp([2],{

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dispatcher = __webpack_require__(28);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

__webpack_require__(185);

__webpack_require__(187);

__webpack_require__(188);

__webpack_require__(189);

__webpack_require__(184);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const riot = __webpack_require__(15);

riot.tag2('contactpage', '<navheader></navHeader> <headroom></headroom> <div id="main"> <div class="container"> <div class="row fh5co-feature"> <div class="flexcontainer"> </div> </div> <div class="row fh5co-feature fh5co-reverse"> <div class="flexcontainer"> <div> <button type="button" name="button">Ver presentacion</button> </div> <div> <button type="button" name="button">Descargar Propuesta</button> </div> </div> </div> <div class="row fh5co-feature "> <div class="flexcontainer"> <div> <button type="button" name="button">Ver presentacion</button> </div> <div> <button type="button" name="button" onclick="{hacecesto}">Descargar Propuesta</button> </div> </div> </div> <h1 id="idDos"> este el id dos</h1> </div> </div> <div id="get-started" style="background:#EE8434;"> <div class="container"> </div> </div> <infofooter></infoFooter> <navfooter></navFooter>', '', '', function (opts) {
  this.hacecesto = () => {
    console.log(getOpts());
    let data = 'tiendasDb';

    _dispatcher2.default.trigger('crear_modal', data);
  };
});

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dispatcher = __webpack_require__(28);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const riot = __webpack_require__(15);

riot.tag2('tiendasdb', '<div class="flexcontainer"> <div each="{x in tiendas}"> <div class="mdl-card mdl-shadow--3dp"> <div class="mdl-card__title mdl-card--expand" riot-style="color: #fff;height: 176px;background:url({x.image}) center / cover;"> <h4> Featured event:<br> May 24, 2016<br> 7-11pm </h4> </div> </div> </div> </div>', 'tiendasdb .flexcontainer,[data-is="tiendasdb"] .flexcontainer{ display: flex; flex-direction: row; align-items: center; justify-content: center; position: absolute; bottom: 20%; }', '', function (opts) {
  this.tiendas = [];
  this.on('mount', () => {
    _dispatcher2.default.trigger('read', 'Shops');

    _dispatcher2.default.on('Shops_returned', this.renderizar);
  });

  this.renderizar = data => {
    if (data.length > 2) {}

    console.log(data, 'esto es tiendas');
    this.tiendas = data;
    this.update();
  };
});

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(186);

const riot = __webpack_require__(15);

riot.tag2('navheader', '<onscroll> <div class="container-full flex-container {(pos.top>-333)? \'header-state-one\':\'header-state-two\'}"> <div class="flex-size-header"> <div class="{(pos.top>-333)? \'nav-img\':\'nav-burguer\'}" onclick="{abrirSideBar}"> <i class="{(pos.top>-333)? \'hide\':\'material-icons\'}">menu</i> <img src="./client/assets/img/zupa.png" alt="zupa.delivery" id="img-logo" class="img-fluid {(pos.top>-333)? \'img-flip\':\'hide\'}"> </div> <div class="{(pos.top>-333)? \'nav-title\':\'nav-title-two\'}"> <h4 class="{(pos.top>-333)? \'hide\':\'show\'}">Zupa</h4> </div> <div class="{(pos.top>-333)? \'nav-space\':\'nav-space-two\'}"></div> <div class="nav-links"> <ul class="box"> <li><a href="#/conoces?">Sobre Nosotros</a></li> <li><a href="#/presentacion">Restaurantes</a></li> <li><a href="#/contacto">Contactanos!</a></li> </ul> </div> <div class="{(pos.top>-333)? \'nav-button\':\'nav-button-two\'}"> <button class="mdl-button mdl-js-button mdl-button--raised" id="{(pos.top>-333)? \'boton-descargar-white\':\'boton-descargar-red\'}" onclick="{descargarApp}">Descargar La app</button> </div> </div> </div> <aside class="sidebar-abrir" role="navigation" if="{abierto}"> <div class="mdl-card"> <div class="mdl-card__title"> <h2 class="mdl-card__title-text">Bienvenido a Zupa</h2> </div> <div class="mdl-card__supporting-text"> <span class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"> <i class="material-icons">file_download</i> ¡Descargar la App! </span> <p> Somos una empresa enfocada en ofrecer la mejor y la mas facil forma de pedir comida a travez de una App. Encuentra tus negocios de comida Favoritos y pide desde la comodidad de tu sillon.</p> <ul class="demo-list-icon mdl-list"> <li class="mdl-list__item"> <a href="ww.facebook.com/zupadelivery" class="mdl-list__item-primary-content"> <i class="material-icons mdl-list__item-icon">chat_bubble_outline</i> Snapchat </a> </li> <li class="mdl-list__item"> <a href="ww.facebook.com/zupadelivery" class="mdl-list__item-primary-content"> <i class="material-icons mdl-list__item-icon">photo</i> Instagram </a> </li> <li class="mdl-list__item"> <a href="ww.facebook.com/zupadelivery" class="mdl-list__item-primary-content"> <i class="material-icons mdl-list__item-icon">people</i> Facebook </a> </li> <li class="mdl-list__item"> <a href="ww.facebook.com/zupadelivery" class="mdl-list__item-primary-content"> <i class="material-icons mdl-list__item-icon">mail</i> Correo </a> </li> </ul> </div> <div class="mdl-card__actions mdl-card--border"> </div> <div class="mdl-card__menu"> <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"> <i class="material-icons">share</i> </button> </div> </div> </aside> <div class="sidebar-overlay" if="{abierto}" onclick="{abrirSideBar}"> </div> </onscroll>', '', '', function (opts) {});

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dispatcher = __webpack_require__(28);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const riot = __webpack_require__(15);

riot.tag2('onscroll', '<yield></yield>', '', '', function (opts) {
  this.on('before-mount', function () {
    window.addEventListener('scroll', this.handleScroll, {
      passive: true
    });
    window.addEventListener('resize', this.handleScroll, {
      passive: true
    });
    this.inviewport = this.inViewport();
    this.prevPos = this.pos;
    return this.update();
  });
  this.on('unmount', function () {
    window.removeEventListener('scroll', this.handleScroll, {
      passive: true
    });
    return window.removeEventListener('resize', this.handleScroll, {
      passive: true
    });
  });

  this.handleScroll = e => {
    let newval = this.inViewport();
    this.diff = this.calcDiff();

    if (newval !== this.inviewport || this.diff > 5) {
      this.prevPos = this.pos;
      this.inviewport = newval;
      return this.update();
    }
  };

  this.calcDiff = () => {
    if (!this.prevPos) {
      return 0;
    }

    return Math.abs(this.pos.top - this.prevPos.top) + Math.abs(this.pos.left - this.prevPos.left) + Math.abs(this.pos.right - this.prevPos.right) + Math.abs(this.pos.bottom - this.prevPos.bottom);
  };

  this.inViewport = () => {
    let pos = this.root.getBoundingClientRect();
    let winheight = window.innerHeight || document.documentElement.clientHeight;
    let winwidth = window.innerWidth || document.documentElement.clientWidth;
    this.pos = {
      top: pos.top,
      left: pos.left,
      right: winwidth - pos.right,
      bottom: winheight - pos.bottom
    };
    return pos.bottom >= 0 && pos.right >= 0 && pos.top <= winheight && pos.left <= winwidth;
  };

  this.abierto = false;

  this.abrirSideBar = () => {
    if (this.abierto === false) {
      this.abierto = true;
    } else {
      this.abierto = false;
    }
  };

  const isMobile = {
    getUserAgent: () => {
      return navigator.userAgent;
    },
    Android: function () {
      return (/Android/i.test(isMobile.getUserAgent()) && !isMobile.Windows()
      );
    },
    BlackBerry: function () {
      return (/BlackBerry|BB10|PlayBook/i.test(isMobile.getUserAgent())
      );
      ;
    },
    iPhone: function () {
      return (/iPhone/i.test(isMobile.getUserAgent()) && !isMobile.iPad() && !isMobile.Windows()
      );
    },
    iPod: function () {
      return (/iPod/i.test(isMobile.getUserAgent())
      );
    },
    iPad: function () {
      return (/iPad/i.test(isMobile.getUserAgent())
      );
    },
    iOS: function () {
      return isMobile.iPad() || isMobile.iPod() || isMobile.iPhone();
    },
    Opera: function () {
      return (/Opera Mini/i.test(isMobile.getUserAgent())
      );
    },
    Windows: function () {
      return (/Windows Phone|IEMobile|WPDesktop/i.test(isMobile.getUserAgent())
      );
    },
    KindleFire: function () {
      return (/Kindle Fire|Silk|KFAPWA|KFSOWI|KFJWA|KFJWI|KFAPWI|KFAPWI|KFOT|KFTT|KFTHWI|KFTHWA|KFASWI|KFTBWI|KFMEWI|KFFOWI|KFSAWA|KFSAWI|KFARWI/i.test(isMobile.getUserAgent())
      );
    },
    any: function () {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
  };

  this.descargarApp = e => {
    if (isMobile.any()) {
      console.log('es web');
      let data = 'un mensaje beelo y conmovedor';

      _dispatcher2.default.trigger('crear_toast', data);
    } else if (isMobile.iOS()) {
      console.log('es iOS');
    } else if (isMobile.Android()) {
      console.log('Es android');
    }
  };
});

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const riot = __webpack_require__(15);

riot.tag2('navfooter', '<div id="footer-dos" class="container-full flex-container none-m none-l none-xl"> <div class="flex-size-footer"> <div class="incio-link text-center"> <a href="#/conoces?"> <i class="material-icons">mail</i> <p>inicio</p> </a> </div> <div class="incio-link text-center"> <a href="#/conoces?"> <i class="material-icons">person</i> <p>delivery</p> </a> </div> <div class="presentacion-link text-center"> <a href="#/presentacion"> <i class="material-icons">send</i> <p>empresas</p> </a> </div> <div class="contactanos-link text-center"> <a href="#/contacto"> <i class="material-icons">people</i> <p>contacto</p> </a> </div> </div> </div>', 'navfooter #footer-dos,[data-is="navfooter"] #footer-dos{ z-index: 9; position: fixed; bottom: 0; width: 100%; background-color: #fff; box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.85); padding: 1% 0%; } navfooter .flex-size-footer,[data-is="navfooter"] .flex-size-footer{ display:flex; flex-flow: row; align-items: baseline; justify-content:space-around; }', '', function (opts) {});

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(184);

const riot = __webpack_require__(15);

riot.tag2('headroom', '<div id="fh5co-header" riot-style="background-attachment:fixed;background-position: center;background-repeat: no-repeat;background-size: cover;background-blend-mode: color;background-image:{colorBackground};"> <div class="container" if="{panelUno}"> </div> <div class="container" if="{panelDos}"> </div> <div class="container" if="{panelTres}"> </div> </div>', '', '', function (opts) {
  this.location = window.location.href;
  this.full = window.location.protocol + "//" + window.location.host;

  if (this.location == this.full + '/#/conoces?') {
    this.colorBackground = 'linear-gradient(#e96262, #e96262), url(./client/assets/img/backOne.jpg)';
    this.panelUno = true;
    this.panelDos = false;
    this.panelTres = false;
    this.update();
  } else if (this.location == this.full + '/#/contacto') {
    this.colorBackground = 'linear-gradient(#EE8434, #EE8434), url(./client/assets/img/backThree.jpg)';
    this.panelUno = false;
    this.panelDos = false;
    this.panelTres = true;
    this.update();
  } else {
    this.colorBackground = 'linear-gradient(#07A0C3, #07A0C3), url(./client/assets/img/backTwo.jpg)';
    this.panelUno = false;
    this.panelDos = true;
    this.panelTres = false;
    this.update();
  }
});

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const riot = __webpack_require__(15);

riot.tag2('infofooter', '<footer class="mdl-mega-footer asisehace"> <div class="mdl-mega-footer__top-section"> <div class="mdl-mega-footer__left-section"> <div class="mdl-logo"> <div class="mdl-logo" style="background-position:center;background-repeat:no-repeat;background-size:contain;background-blend-mode: color;background-image:linear-gradient(#eee, #eee), url(./client/assets/img/zupa.png);"> <p style="color:transparent;">zupa</p> </div> </div> </div> <div class="mdl-mega-footer__right-section"> <button class="mdl-mega-footer__social-btn"> <i class="material-icons">keyboard_arrow_up</i> </button> </div> </div> <div class="mdl-mega-footer__middle-section"> <hr> <div class="mdl-mega-footer__drop-down-section" style="background-color:#434A48;margin:0px 40px 0px 40px;"> <h4 class="mdl-mega-footer__heading">Tiendas</h4> <ul class="mdl-mega-footer__link-list"> <li><a href="#">Presentacion</a></li> <li><a href="#">Help Center</a></li> <li><a href="#">Community</a></li> </ul> </div> <div class="mdl-mega-footer__drop-down-section" style="background-color:#434A48;margin:0px 40px 0px 40px;"> <h4 class="mdl-mega-footer__heading">Tiendas</h4> <ul class="mdl-mega-footer__link-list"> <li><a href="#">Presentacion</a></li> <li><a href="#">Help Center</a></li> <li><a href="#">Community</a></li> </ul> </div> <div class="mdl-mega-footer__drop-down-section" style="background-color:#434A48;margin:0px 40px 0px 40px;"> <h4 class="mdl-mega-footer__heading">Tiendas</h4> <ul class="mdl-mega-footer__link-list"> <li><a href="#">Presentacion</a></li> <li><a href="#">Help Center</a></li> <li><a href="#">Community</a></li> </ul> </div> <div class="mdl-mega-footer__drop-down-section" style="background-color:#434A48;margin:0px 40px 0px 40px;"> <h4 class="mdl-mega-footer__heading">Tiendas</h4> <ul class="mdl-mega-footer__link-list"> <li><a href="#">Presentacion</a></li> <li><a href="#">Help Center</a></li> <li><a href="#">Community</a></li> </ul> </div> </div> <div class="mdl-mega-footer__bottom-section"> <hr> <div class="mdl-mega-footer__left-section"> <p>Made with Love</p> </div> <div class="mdl-mega-footer__right-section"> <ul class="mdl-mini-footer__link-list"> <li><a href="#">Help</a></li> <li><a href="#">Derechos</a></li> <li><a href="#">Content Marketing</a></li> </ul> </div> </div> </footer>', 'infofooter .asisehace,[data-is="infofooter"] .asisehace{ position:fixed; bottom:0; left:0; width:100%; height:50%; background:#000; color:#fff; z-index:-1; }', '', function (opts) {});

/***/ })

});
//# sourceMappingURL=2.map