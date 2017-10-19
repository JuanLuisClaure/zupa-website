webpackJsonp([3],{

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(163);

const riot = __webpack_require__(15);

riot.tag2('welcome', '<onboarding></onboarding>', '', '', function (opts) {});

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dispatcher = __webpack_require__(28);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _intinput = __webpack_require__(164);

var _intinput2 = _interopRequireDefault(_intinput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const riot = __webpack_require__(15);

riot.tag2('onboarding', '<div class="flexContainer-main" riot-style="background-attachment:fixed;background-position: center;background-repeat: no-repeat;background-size: cover;background-blend-mode: color;background-image:{imgBackground};" id="fondo"> <div class="cabezera"> <div class="flexContainer-cabezera"> <div class="supuestamente text-left"> <p><button type="button" name="button" onclick="{openDes.bind(this, \'conoces?\')}">The app!</button></p> </div> <div class="supuestamente text-right"> <p><button type="button" name="button" onclick="{openDes.bind(this, \'presentacion\')}">the shops</button></p> </div> </div> </div> <div class="contenido"> <div class="flexContainer-center"> <legend> <h3 if="{listo}" id="mensaje"></h3> </legend> <div class="mdl-card mdl-shadow--4dp text-center" style="background-color:rgba(210, 210, 210, 0.47)!important;width:92%;"> <div class="mdl-card__supporting-text" style="word-wrap: break-word;"> <h3 id="sobre"></h3> <hr> </div> <div class="mdl-card__supporting-text" if="{abierto}"> <button type="button" name="button" onclick="{openSub}">subscribe</button> <button type="button" name="button" onclick="{entrarWeb}">Comprar(BETA)</button> </div> <div class="mdl-card__supporting-text" if="{!abierto}"> <intltelinput></intltelinput> </div> </div> </div> </div> <div class="piedepagina "> <div class="flexContainer-cabezera"> <div class="supuestamente text-left"> <p><button type="button" name="button" onclick="{openDes.bind(this, \'contacto\')}">Contact Us</button></p> </div> <div class="supuestamente text-right"> <p><button type="button" name="button" onclick="{openDes.bind(this, \'contacto\')}">Want to work?</button></p> </div> </div> </div> </div>', 'onboarding .flexContainer-main,[data-is="onboarding"] .flexContainer-main{ position: absolute; display: flex; flex-direction:column; height: 100vh; width: 100vw; } onboarding .flexContainer-center,[data-is="onboarding"] .flexContainer-center{ display: flex; flex-direction:column; align-items: center; justify-content: center; margin: 17% auto; } onboarding .flexContainer-cabezera,[data-is="onboarding"] .flexContainer-cabezera{ display: flex; flex-direction: row; justify-content: space-around; align-items: baseline; } onboarding .cabezera,[data-is="onboarding"] .cabezera{ background-color: transparent; flex: 0 1 auto; order: 1; } onboarding .piedepagina,[data-is="onboarding"] .piedepagina{ background-color: transparent; flex: 0 1 auto; order: 3; } onboarding .contenido,[data-is="onboarding"] .contenido{ background-color: transparent; flex: 51 1 auto; order:2; } onboarding .supuestamente,[data-is="onboarding"] .supuestamente{ margin: 0 auto; width: 100%; }', '', function (opts) {
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

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const riot = __webpack_require__(15);

const all = __webpack_require__(165);

riot.tag2('intltelinput', '<div class="ahorasi"> <select id="selected"> <option value="+591">BO</option> <option value="+11">US</option> </select> <input class="mdl-textfield__input" placeholder="Deja tu telefono de whatsapp" id="number"> </div> <input class="mdl-textfield__input" placeholder="Deja tu telefono de whatsapp" id="number"> <button type="button" name="button" onclick="{verValor}"> ver valor</button>', 'intltelinput .has-float-label,[data-is="intltelinput"] .has-float-label{ display: block; position: relative; } intltelinput .has-float-label label,[data-is="intltelinput"] .has-float-label label,intltelinput .has-float-label > span,[data-is="intltelinput"] .has-float-label > span{ position: absolute; left: 0; top: 0; cursor: text; font-size: 75%; opacity: 1; -webkit-transition: all .2s; transition: all .2s; } intltelinput .has-float-label select,[data-is="intltelinput"] .has-float-label select{ -webkit-appearance: none; -moz-appearance: none; appearance: none; } intltelinput .has-float-label textarea,[data-is="intltelinput"] .has-float-label textarea{ width: 100%; } intltelinput .has-float-label input,[data-is="intltelinput"] .has-float-label input,intltelinput .has-float-label select,[data-is="intltelinput"] .has-float-label select,intltelinput .has-float-label textarea,[data-is="intltelinput"] .has-float-label textarea{ font-size: inherit; padding-top: 1em; margin-bottom: 2px; border: 0; border-radius: 0; border-bottom: 2px solid rgba(0, 0, 0, 0.1); } intltelinput .has-float-label input::-webkit-input-placeholder,[data-is="intltelinput"] .has-float-label input::-webkit-input-placeholder,intltelinput .has-float-label select::-webkit-input-placeholder,[data-is="intltelinput"] .has-float-label select::-webkit-input-placeholder,intltelinput .has-float-label textarea::-webkit-input-placeholder,[data-is="intltelinput"] .has-float-label textarea::-webkit-input-placeholder{ opacity: 1; -webkit-transition: all .2s; transition: all .2s; } intltelinput .has-float-label input::-moz-placeholder,[data-is="intltelinput"] .has-float-label input::-moz-placeholder,intltelinput .has-float-label select::-moz-placeholder,[data-is="intltelinput"] .has-float-label select::-moz-placeholder,intltelinput .has-float-label textarea::-moz-placeholder,[data-is="intltelinput"] .has-float-label textarea::-moz-placeholder{ opacity: 1; transition: all .2s; } intltelinput .has-float-label input:-ms-input-placeholder,[data-is="intltelinput"] .has-float-label input:-ms-input-placeholder,intltelinput .has-float-label select:-ms-input-placeholder,[data-is="intltelinput"] .has-float-label select:-ms-input-placeholder,intltelinput .has-float-label textarea:-ms-input-placeholder,[data-is="intltelinput"] .has-float-label textarea:-ms-input-placeholder{ opacity: 1; transition: all .2s; } intltelinput .has-float-label input::placeholder,[data-is="intltelinput"] .has-float-label input::placeholder,intltelinput .has-float-label select::placeholder,[data-is="intltelinput"] .has-float-label select::placeholder,intltelinput .has-float-label textarea::placeholder,[data-is="intltelinput"] .has-float-label textarea::placeholder{ opacity: 1; -webkit-transition: all .2s; transition: all .2s; } intltelinput .has-float-label input:placeholder-shown:not(:focus)::-webkit-input-placeholder,[data-is="intltelinput"] .has-float-label input:placeholder-shown:not(:focus)::-webkit-input-placeholder,intltelinput .has-float-label select:placeholder-shown:not(:focus)::-webkit-input-placeholder,[data-is="intltelinput"] .has-float-label select:placeholder-shown:not(:focus)::-webkit-input-placeholder,intltelinput .has-float-label textarea:placeholder-shown:not(:focus)::-webkit-input-placeholder,[data-is="intltelinput"] .has-float-label textarea:placeholder-shown:not(:focus)::-webkit-input-placeholder{ opacity: 0; } intltelinput .has-float-label input:placeholder-shown:not(:focus)::-moz-placeholder,[data-is="intltelinput"] .has-float-label input:placeholder-shown:not(:focus)::-moz-placeholder,intltelinput .has-float-label select:placeholder-shown:not(:focus)::-moz-placeholder,[data-is="intltelinput"] .has-float-label select:placeholder-shown:not(:focus)::-moz-placeholder,intltelinput .has-float-label textarea:placeholder-shown:not(:focus)::-moz-placeholder,[data-is="intltelinput"] .has-float-label textarea:placeholder-shown:not(:focus)::-moz-placeholder{ opacity: 0; } intltelinput .has-float-label input:placeholder-shown:not(:focus):-ms-input-placeholder,[data-is="intltelinput"] .has-float-label input:placeholder-shown:not(:focus):-ms-input-placeholder,intltelinput .has-float-label select:placeholder-shown:not(:focus):-ms-input-placeholder,[data-is="intltelinput"] .has-float-label select:placeholder-shown:not(:focus):-ms-input-placeholder,intltelinput .has-float-label textarea:placeholder-shown:not(:focus):-ms-input-placeholder,[data-is="intltelinput"] .has-float-label textarea:placeholder-shown:not(:focus):-ms-input-placeholder{ opacity: 0; } intltelinput .has-float-label input:placeholder-shown:not(:focus)::placeholder,[data-is="intltelinput"] .has-float-label input:placeholder-shown:not(:focus)::placeholder,intltelinput .has-float-label select:placeholder-shown:not(:focus)::placeholder,[data-is="intltelinput"] .has-float-label select:placeholder-shown:not(:focus)::placeholder,intltelinput .has-float-label textarea:placeholder-shown:not(:focus)::placeholder,[data-is="intltelinput"] .has-float-label textarea:placeholder-shown:not(:focus)::placeholder{ opacity: 0; } intltelinput .has-float-label input:placeholder-shown:not(:focus) + *,[data-is="intltelinput"] .has-float-label input:placeholder-shown:not(:focus) + *,intltelinput .has-float-label select:placeholder-shown:not(:focus) + *,[data-is="intltelinput"] .has-float-label select:placeholder-shown:not(:focus) + *,intltelinput .has-float-label textarea:placeholder-shown:not(:focus) + *,[data-is="intltelinput"] .has-float-label textarea:placeholder-shown:not(:focus) + *{ font-size: 155%; opacity: .92; top: 1.25em; } intltelinput .has-float-label input:focus,[data-is="intltelinput"] .has-float-label input:focus,intltelinput .has-float-label select:focus,[data-is="intltelinput"] .has-float-label select:focus,intltelinput .has-float-label textarea:focus,[data-is="intltelinput"] .has-float-label textarea:focus{ outline: none; border-color: rgba(0, 0, 0, 0.5); } intltelinput .has-float-label select,[data-is="intltelinput"] .has-float-label select{ padding-right: 1em; background: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3E%3Cpath fill=\'%23333\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3E%3C/svg%3E") no-repeat right 0.5em bottom 0.25em; background-size: 8px 10px; } intltelinput input[type=text],[data-is="intltelinput"] input[type=text],intltelinput textarea,[data-is="intltelinput"] textarea{ -webkit-transition: all 0.30s ease-in-out; -moz-transition: all 0.30s ease-in-out; -ms-transition: all 0.30s ease-in-out; -o-transition: all 0.30s ease-in-out; outline: none; padding: 3px 0px 3px 3px; margin: 5px 1px 3px 0px; border: 1px solid #DDDDDD; } intltelinput input[type=text]:focus,[data-is="intltelinput"] input[type=text]:focus,intltelinput textarea:focus,[data-is="intltelinput"] textarea:focus{ box-shadow: 0 0 5px rgba(81, 203, 238, 1); padding: 3px 0px 3px 3px; margin: 5px 1px 3px 0px; border: 1px solid rgba(81, 203, 238, 1); } intltelinput .ahorasi,[data-is="intltelinput"] .ahorasi{ display: flex; flex-direction: row; width:50%; margin: 0 auto; } intltelinput select,[data-is="intltelinput"] select{ flex: 0 6 auto; order: 1; } intltelinput #number,[data-is="intltelinput"] #number{ flex: 0 1 auto; order: 2; }', '', function (opts) {
  this.on('mount', () => {
    console.log('ready');
    let elem = document.getElementById('number');
    const cleave = new Cleave(elem, {
      blocks: [3, 2, 3],
      delimiters: ['-', '-', '-'],
      phone: true,
      phoneRegionCode: 'BO'
    });
    cleave.getRawValue();
  });

  this.verValor = () => {
    let elem = document.getElementById('number');
    let othe = document.getElementById('selected');
    console.log(othe.value + elem.value);
  };
});

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

!function () {
  function t(t, n) {
    var e = t.split("."),
        r = q;
    e[0] in r || !r.execScript || r.execScript("var " + e[0]);

    for (var i; e.length && (i = e.shift());) e.length || void 0 === n ? r = r[i] ? r[i] : r[i] = {} : r[i] = n;
  }

  function n(t, n) {
    function e() {}

    e.prototype = n.prototype, t.M = n.prototype, t.prototype = new e(), t.prototype.constructor = t, t.N = function (t, e, r) {
      for (var i = Array(arguments.length - 2), a = 2; a < arguments.length; a++) i[a - 2] = arguments[a];

      return n.prototype[e].apply(t, i);
    };
  }

  function e(t, n) {
    null != t && this.a.apply(this, arguments);
  }

  function r(t) {
    t.b = "";
  }

  function i(t, n) {
    t.sort(n || a);
  }

  function a(t, n) {
    return t > n ? 1 : n > t ? -1 : 0;
  }

  function l(t) {
    var n,
        e = [],
        r = 0;

    for (n in t) e[r++] = t[n];

    return e;
  }

  function o(t, n) {
    this.b = t, this.a = {};

    for (var e = 0; e < n.length; e++) {
      var r = n[e];
      this.a[r.b] = r;
    }
  }

  function u(t) {
    return t = l(t.a), i(t, function (t, n) {
      return t.b - n.b;
    }), t;
  }

  function s(t, n) {
    switch (this.b = t, this.g = !!n.G, this.a = n.c, this.j = n.type, this.h = !1, this.a) {
      case Y:
      case k:
      case J:
      case K:
      case L:
      case U:
      case T:
        this.h = !0;
    }

    this.f = n.defaultValue;
  }

  function f() {
    this.a = {}, this.f = this.i().a, this.b = this.g = null;
  }

  function c(t, n) {
    for (var e = u(t.i()), r = 0; r < e.length; r++) {
      var i = e[r],
          a = i.b;

      if (null != n.a[a]) {
        t.b && delete t.b[i.b];
        var l = 11 == i.a || 10 == i.a;
        if (i.g) for (var i = p(n, a) || [], o = 0; o < i.length; o++) {
          var s = t,
              f = a,
              h = l ? i[o].clone() : i[o];
          s.a[f] || (s.a[f] = []), s.a[f].push(h), s.b && delete s.b[f];
        } else i = p(n, a), l ? (l = p(t, a)) ? c(l, i) : m(t, a, i.clone()) : m(t, a, i);
      }
    }
  }

  function p(t, n) {
    var e = t.a[n];
    if (null == e) return null;

    if (t.g) {
      if (!(n in t.b)) {
        var r = t.g,
            i = t.f[n];
        if (null != e) if (i.g) {
          for (var a = [], l = 0; l < e.length; l++) a[l] = r.b(i, e[l]);

          e = a;
        } else e = r.b(i, e);
        return t.b[n] = e;
      }

      return t.b[n];
    }

    return e;
  }

  function h(t, n, e) {
    var r = p(t, n);
    return t.f[n].g ? r[e || 0] : r;
  }

  function g(t, n) {
    var e;
    if (null != t.a[n]) e = h(t, n, void 0);else t: {
      if (e = t.f[n], void 0 === e.f) {
        var r = e.j;
        if (r === Boolean) e.f = !1;else if (r === Number) e.f = 0;else {
          if (r !== String) {
            e = new r();
            break t;
          }

          e.f = e.h ? "0" : "";
        }
      }

      e = e.f;
    }
    return e;
  }

  function b(t, n) {
    return t.f[n].g ? null != t.a[n] ? t.a[n].length : 0 : null != t.a[n] ? 1 : 0;
  }

  function m(t, n, e) {
    t.a[n] = e, t.b && (t.b[n] = e);
  }

  function y(t, n) {
    var e,
        r = [];

    for (e in n) 0 != e && r.push(new s(e, n[e]));

    return new o(t, r);
  }
  /*
  Protocol Buffer 2 Copyright 2008 Google Inc.
  All other code copyright its respective owners.
  Copyright (C) 2010 The Libphonenumber Authors
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */


  function v() {
    f.call(this);
  }

  function d() {
    f.call(this);
  }

  function _() {
    f.call(this);
  }

  function S() {}

  function A() {}

  function w() {}
  /*
  Copyright (C) 2010 The Libphonenumber Authors.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */


  function N() {
    this.a = {};
  }

  function x(t, n) {
    if (null == n) return null;
    n = n.toUpperCase();
    var e = t.a[n];

    if (null == e) {
      if (e = tt[n], null == e) return null;
      e = new w().a(_.i(), e), t.a[n] = e;
    }

    return e;
  }

  function j(t) {
    return t = X[t], null == t ? "ZZ" : t[0];
  }

  function C(t) {
    this.H = RegExp(" "), this.B = "", this.m = new e(), this.v = "", this.h = new e(), this.u = new e(), this.j = !0, this.w = this.o = this.D = !1, this.F = N.b(), this.s = 0, this.b = new e(), this.A = !1, this.l = "", this.a = new e(), this.f = [], this.C = t, this.J = this.g = $(this, this.C);
  }

  function $(t, n) {
    var e;

    if (null != n && isNaN(n) && n.toUpperCase() in tt) {
      if (e = x(t.F, n), null == e) throw "Invalid region code: " + n;
      e = g(e, 10);
    } else e = 0;

    return e = x(t.F, j(e)), null != e ? e : at;
  }

  function B(t) {
    for (var n = t.f.length, e = 0; n > e; ++e) {
      var i = t.f[e],
          a = g(i, 1);
      if (t.v == a) return !1;
      var l;
      l = t;
      var o = i,
          u = g(o, 1);
      if (-1 != u.indexOf("|")) l = !1;else {
        u = u.replace(lt, "\\d"), u = u.replace(ot, "\\d"), r(l.m);
        var s;
        s = l;
        var o = g(o, 2),
            f = "999999999999999".match(u)[0];
        f.length < s.a.b.length ? s = "" : (s = f.replace(new RegExp(u, "g"), o), s = s.replace(RegExp("9", "g"), " ")), 0 < s.length ? (l.m.a(s), l = !0) : l = !1;
      }
      if (l) return t.v = a, t.A = st.test(h(i, 4)), t.s = 0, !0;
    }

    return t.j = !1;
  }

  function E(t, n) {
    for (var e = [], r = n.length - 3, i = t.f.length, a = 0; i > a; ++a) {
      var l = t.f[a];
      0 == b(l, 3) ? e.push(t.f[a]) : (l = h(l, 3, Math.min(r, b(l, 3) - 1)), 0 == n.search(l) && e.push(t.f[a]));
    }

    t.f = e;
  }

  function R(t, n) {
    t.h.a(n);
    var e = n;

    if (rt.test(e) || 1 == t.h.b.length && et.test(e)) {
      var i,
          e = n;
      "+" == e ? (i = e, t.u.a(e)) : (i = nt[e], t.u.a(i), t.a.a(i)), n = i;
    } else t.j = !1, t.D = !0;

    if (!t.j) {
      if (!t.D) if (H(t)) {
        if (P(t)) return F(t);
      } else if (0 < t.l.length && (e = t.a.toString(), r(t.a), t.a.a(t.l), t.a.a(e), e = t.b.toString(), i = e.lastIndexOf(t.l), r(t.b), t.b.a(e.substring(0, i))), t.l != G(t)) return t.b.a(" "), F(t);
      return t.h.toString();
    }

    switch (t.u.b.length) {
      case 0:
      case 1:
      case 2:
        return t.h.toString();

      case 3:
        if (!H(t)) return t.l = G(t), M(t);
        t.w = !0;

      default:
        return t.w ? (P(t) && (t.w = !1), t.b.toString() + t.a.toString()) : 0 < t.f.length ? (e = V(t, n), i = I(t), 0 < i.length ? i : (E(t, t.a.toString()), B(t) ? O(t) : t.j ? D(t, e) : t.h.toString())) : M(t);
    }
  }

  function F(t) {
    return t.j = !0, t.w = !1, t.f = [], t.s = 0, r(t.m), t.v = "", M(t);
  }

  function I(t) {
    for (var n = t.a.toString(), e = t.f.length, r = 0; e > r; ++r) {
      var i = t.f[r],
          a = g(i, 1);
      if (new RegExp("^(?:" + a + ")$").test(n)) return t.A = st.test(h(i, 4)), n = n.replace(new RegExp(a, "g"), h(i, 2)), D(t, n);
    }

    return "";
  }

  function D(t, n) {
    var e = t.b.b.length;
    return t.A && e > 0 && " " != t.b.toString().charAt(e - 1) ? t.b + " " + n : t.b + n;
  }

  function M(t) {
    var n = t.a.toString();

    if (3 <= n.length) {
      for (var e = t.o && 0 < b(t.g, 20) ? p(t.g, 20) || [] : p(t.g, 19) || [], r = e.length, i = 0; r > i; ++i) {
        var a,
            l = e[i];
        (a = null == t.g.a[12] || t.o || h(l, 6)) || (a = g(l, 4), a = 0 == a.length || it.test(a)), a && ut.test(g(l, 2)) && t.f.push(l);
      }

      return E(t, n), n = I(t), 0 < n.length ? n : B(t) ? O(t) : t.h.toString();
    }

    return D(t, n);
  }

  function O(t) {
    var n = t.a.toString(),
        e = n.length;

    if (e > 0) {
      for (var r = "", i = 0; e > i; i++) r = V(t, n.charAt(i));

      return t.j ? D(t, r) : t.h.toString();
    }

    return t.b.toString();
  }

  function G(t) {
    var n,
        e = t.a.toString(),
        i = 0;
    return 1 != h(t.g, 10) ? n = !1 : (n = t.a.toString(), n = "1" == n.charAt(0) && "0" != n.charAt(1) && "1" != n.charAt(1)), n ? (i = 1, t.b.a("1").a(" "), t.o = !0) : null != t.g.a[15] && (n = new RegExp("^(?:" + h(t.g, 15) + ")"), n = e.match(n), null != n && null != n[0] && 0 < n[0].length && (t.o = !0, i = n[0].length, t.b.a(e.substring(0, i)))), r(t.a), t.a.a(e.substring(i)), e.substring(0, i);
  }

  function H(t) {
    var n = t.u.toString(),
        e = new RegExp("^(?:\\+|" + h(t.g, 11) + ")"),
        e = n.match(e);
    return null != e && null != e[0] && 0 < e[0].length ? (t.o = !0, e = e[0].length, r(t.a), t.a.a(n.substring(e)), r(t.b), t.b.a(n.substring(0, e)), "+" != n.charAt(0) && t.b.a(" "), !0) : !1;
  }

  function P(t) {
    if (0 == t.a.b.length) return !1;
    var n,
        i = new e();

    t: {
      if (n = t.a.toString(), 0 != n.length && "0" != n.charAt(0)) for (var a, l = n.length, o = 1; 3 >= o && l >= o; ++o) if (a = parseInt(n.substring(0, o), 10), a in X) {
        i.a(n.substring(o)), n = a;
        break t;
      }
      n = 0;
    }

    return 0 == n ? !1 : (r(t.a), t.a.a(i.toString()), i = j(n), "001" == i ? t.g = x(t.F, "" + n) : i != t.C && (t.g = $(t, i)), t.b.a("" + n).a(" "), t.l = "", !0);
  }

  function V(t, n) {
    var e = t.m.toString();

    if (0 <= e.substring(t.s).search(t.H)) {
      var i = e.search(t.H),
          e = e.replace(t.H, n);
      return r(t.m), t.m.a(e), t.s = i, e.substring(0, t.s + 1);
    }

    return 1 == t.f.length && (t.j = !1), t.v = "", t.h.toString();
  }

  var q = this;
  e.prototype.b = "", e.prototype.set = function (t) {
    this.b = "" + t;
  }, e.prototype.a = function (t, n, e) {
    if (this.b += String(t), null != n) for (var r = 1; r < arguments.length; r++) this.b += arguments[r];
    return this;
  }, e.prototype.toString = function () {
    return this.b;
  };
  var T = 1,
      U = 2,
      Y = 3,
      k = 4,
      J = 6,
      K = 16,
      L = 18;
  f.prototype.set = function (t, n) {
    m(this, t.b, n);
  }, f.prototype.clone = function () {
    var t = new this.constructor();
    return t != this && (t.a = {}, t.b && (t.b = {}), c(t, this)), t;
  };
  var Z;
  n(v, f);
  var z;
  n(d, f);
  var Q;
  n(_, f), v.prototype.i = function () {
    return Z || (Z = y(v, {
      0: {
        name: "NumberFormat",
        I: "i18n.phonenumbers.NumberFormat"
      },
      1: {
        name: "pattern",
        required: !0,
        c: 9,
        type: String
      },
      2: {
        name: "format",
        required: !0,
        c: 9,
        type: String
      },
      3: {
        name: "leading_digits_pattern",
        G: !0,
        c: 9,
        type: String
      },
      4: {
        name: "national_prefix_formatting_rule",
        c: 9,
        type: String
      },
      6: {
        name: "national_prefix_optional_when_formatting",
        c: 8,
        type: Boolean
      },
      5: {
        name: "domestic_carrier_code_formatting_rule",
        c: 9,
        type: String
      }
    })), Z;
  }, v.ctor = v, v.ctor.i = v.prototype.i, d.prototype.i = function () {
    return z || (z = y(d, {
      0: {
        name: "PhoneNumberDesc",
        I: "i18n.phonenumbers.PhoneNumberDesc"
      },
      2: {
        name: "national_number_pattern",
        c: 9,
        type: String
      },
      3: {
        name: "possible_number_pattern",
        c: 9,
        type: String
      },
      6: {
        name: "example_number",
        c: 9,
        type: String
      },
      7: {
        name: "national_number_matcher_data",
        c: 12,
        type: String
      },
      8: {
        name: "possible_number_matcher_data",
        c: 12,
        type: String
      }
    })), z;
  }, d.ctor = d, d.ctor.i = d.prototype.i, _.prototype.i = function () {
    return Q || (Q = y(_, {
      0: {
        name: "PhoneMetadata",
        I: "i18n.phonenumbers.PhoneMetadata"
      },
      1: {
        name: "general_desc",
        c: 11,
        type: d
      },
      2: {
        name: "fixed_line",
        c: 11,
        type: d
      },
      3: {
        name: "mobile",
        c: 11,
        type: d
      },
      4: {
        name: "toll_free",
        c: 11,
        type: d
      },
      5: {
        name: "premium_rate",
        c: 11,
        type: d
      },
      6: {
        name: "shared_cost",
        c: 11,
        type: d
      },
      7: {
        name: "personal_number",
        c: 11,
        type: d
      },
      8: {
        name: "voip",
        c: 11,
        type: d
      },
      21: {
        name: "pager",
        c: 11,
        type: d
      },
      25: {
        name: "uan",
        c: 11,
        type: d
      },
      27: {
        name: "emergency",
        c: 11,
        type: d
      },
      28: {
        name: "voicemail",
        c: 11,
        type: d
      },
      24: {
        name: "no_international_dialling",
        c: 11,
        type: d
      },
      9: {
        name: "id",
        required: !0,
        c: 9,
        type: String
      },
      10: {
        name: "country_code",
        c: 5,
        type: Number
      },
      11: {
        name: "international_prefix",
        c: 9,
        type: String
      },
      17: {
        name: "preferred_international_prefix",
        c: 9,
        type: String
      },
      12: {
        name: "national_prefix",
        c: 9,
        type: String
      },
      13: {
        name: "preferred_extn_prefix",
        c: 9,
        type: String
      },
      15: {
        name: "national_prefix_for_parsing",
        c: 9,
        type: String
      },
      16: {
        name: "national_prefix_transform_rule",
        c: 9,
        type: String
      },
      18: {
        name: "same_mobile_and_fixed_line_pattern",
        c: 8,
        defaultValue: !1,
        type: Boolean
      },
      19: {
        name: "number_format",
        G: !0,
        c: 11,
        type: v
      },
      20: {
        name: "intl_number_format",
        G: !0,
        c: 11,
        type: v
      },
      22: {
        name: "main_country_for_code",
        c: 8,
        defaultValue: !1,
        type: Boolean
      },
      23: {
        name: "leading_digits",
        c: 9,
        type: String
      },
      26: {
        name: "leading_zero_possible",
        c: 8,
        defaultValue: !1,
        type: Boolean
      }
    })), Q;
  }, _.ctor = _, _.ctor.i = _.prototype.i, S.prototype.a = function (t) {
    throw new t.b(), Error("Unimplemented");
  }, S.prototype.b = function (t, n) {
    if (11 == t.a || 10 == t.a) return n instanceof f ? n : this.a(t.j.prototype.i(), n);

    if (14 == t.a) {
      if ("string" == typeof n && W.test(n)) {
        var e = Number(n);
        if (e > 0) return e;
      }

      return n;
    }

    if (!t.h) return n;

    if (e = t.j, e === String) {
      if ("number" == typeof n) return String(n);
    } else if (e === Number && "string" == typeof n && ("Infinity" === n || "-Infinity" === n || "NaN" === n || W.test(n))) return Number(n);

    return n;
  };
  var W = /^-?[0-9]+$/;
  n(A, S), A.prototype.a = function (t, n) {
    var e = new t.b();
    return e.g = this, e.a = n, e.b = {}, e;
  }, n(w, A), w.prototype.b = function (t, n) {
    return 8 == t.a ? !!n : S.prototype.b.apply(this, arguments);
  }, w.prototype.a = function (t, n) {
    return w.M.a.call(this, t, n);
  };
  /*
  Copyright (C) 2010 The Libphonenumber Authors
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */

  var X = {
    591: ["BO"]
  },
      tt = {
    BO: [null, [null, null, "[23467]\\d{7}", "\\d{7,8}"], [null, null, "(?:2(?:2\\d{2}|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d{2}|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:2\\d|3[234]|4[248]|5[24]|6[2-6]|7\\d))|4(?:4\\d{2}|6(?:11|[24689]\\d|72)))\\d{4}", "\\d{7,8}", null, null, "22123456"], [null, null, "[67]\\d{7}", "\\d{8}", null, null, "71234567"], [null, null, "NA", "NA"], [null, null, "NA", "NA"], [null, null, "NA", "NA"], [null, null, "NA", "NA"], [null, null, "NA", "NA"], "BO", 591, "00(1\\d)?", "0", null, null, "0(1\\d)?", null, null, null, [[null, "([234])(\\d{7})", "$1 $2", ["[234]"], null, "0$CC $1"], [null, "([67]\\d{7})", "$1", ["[67]"], null, "0$CC $1"]], null, [null, null, "NA", "NA"], null, null, [null, null, "NA", "NA"], [null, null, "NA", "NA"], null, null, [null, null, "NA", "NA"]]
  };

  N.b = function () {
    return N.a ? N.a : N.a = new N();
  };

  var nt = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "０": "0",
    "１": "1",
    "２": "2",
    "３": "3",
    "４": "4",
    "５": "5",
    "６": "6",
    "７": "7",
    "８": "8",
    "９": "9",
    "٠": "0",
    "١": "1",
    "٢": "2",
    "٣": "3",
    "٤": "4",
    "٥": "5",
    "٦": "6",
    "٧": "7",
    "٨": "8",
    "٩": "9",
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9"
  },
      et = RegExp("[+＋]+"),
      rt = RegExp("([0-9０-９٠-٩۰-۹])"),
      it = /^\(?\$1\)?$/,
      at = new _();
  m(at, 11, "NA");
  var lt = /\[([^\[\]])*\]/g,
      ot = /\d(?=[^,}][^,}])/g,
      ut = RegExp("^[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*(\\$\\d[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*)+$"),
      st = /[- ]/;
  C.prototype.K = function () {
    this.B = "", r(this.h), r(this.u), r(this.m), this.s = 0, this.v = "", r(this.b), this.l = "", r(this.a), this.j = !0, this.w = this.o = this.D = !1, this.f = [], this.A = !1, this.g != this.J && (this.g = $(this, this.C));
  }, C.prototype.L = function (t) {
    return this.B = R(this, t);
  }, t("Cleave.AsYouTypeFormatter", C), t("Cleave.AsYouTypeFormatter.prototype.inputDigit", C.prototype.L), t("Cleave.AsYouTypeFormatter.prototype.clear", C.prototype.K);
}.call("object" == typeof global && global ? global : window);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)))

/***/ })

});
//# sourceMappingURL=3.map