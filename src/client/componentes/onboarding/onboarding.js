const riot = require('riot')
import dispatcher from '../../app/dispatcher'
import intlTelInput from '../intCountry/intinput'

riot.tag2('onboarding', '<div class="flexContainer-main" riot-style="background-attachment:fixed;background-position: center;background-repeat: no-repeat;background-size: cover;background-blend-mode: color;background-image:{imgBackground};" id="fondo"> <div class="cabezera"> <div class="flexContainer-cabezera"> <div class="supuestamente text-left"> <p><button type="button" name="button" onclick="{openDes.bind(this, \'conoces?\')}">The app!</button></p> </div> <div class="supuestamente text-right"> <p><button type="button" name="button" onclick="{openDes.bind(this, \'presentacion\')}">the shops</button></p> </div> </div> </div> <div class="contenido"> <div class="flexContainer-center"> <legend if="{!abierto}"> <h3 id="mensaje"></h3> <button type="button" name="button" onclick="{openSub}">subscribe</button> <button type="button" name="button" onclick="{entrarWeb}">Comprar(BETA)</button> </legend> <div class="mdl-card mdl-shadow--4dp text-center" style="background-color:rgba(210, 210, 210, 0.47)!important;width:92%;" if="{abierto}"> <div class="mdl-card__supporting-text" style="word-wrap: break-word;"> <h3 id="sobre"></h3> <hr> </div> <div class="mdl-card__supporting-text"> <intltelinput opts="{this.necesidad}"></intltelinput> </div> </div> </div> </div> <div class="piedepagina "> <div class="flexContainer-cabezera"> <div class="supuestamente text-left"> <p><button type="button" name="button" onclick="{openDes.bind(this, \'contacto\')}">Contact Us</button></p> </div> <div class="supuestamente text-right"> <p><button type="button" name="button" onclick="{openDes.bind(this, \'contacto\')}">Want to work?</button></p> </div> </div> </div> </div>', 'onboarding .flexContainer-main,[data-is="onboarding"] .flexContainer-main{ position: absolute; display: flex; flex-direction:column; height: 100vh; width: 100vw; } onboarding .flexContainer-center,[data-is="onboarding"] .flexContainer-center{ display: flex; flex-direction:column; align-items: center; justify-content: center; margin: 17% auto; } onboarding .flexContainer-cabezera,[data-is="onboarding"] .flexContainer-cabezera{ display: flex; flex-direction: row; justify-content: space-around; align-items: baseline; } onboarding .cabezera,[data-is="onboarding"] .cabezera{ background-color: transparent; flex: 0 1 auto; order: 1; } onboarding .piedepagina,[data-is="onboarding"] .piedepagina{ background-color: transparent; flex: 0 1 auto; order: 3; } onboarding .contenido,[data-is="onboarding"] .contenido{ background-color: transparent; flex: 51 1 auto; order:2; } onboarding .supuestamente,[data-is="onboarding"] .supuestamente{ margin: 0 auto; width: 100%; }', '', function(opts) {
this.necesidad =  {
  puerta: this.abierto,
  veramo: this.openSub
}
this.abierto = false
this.listo = true
this.imgBackground = 'linear-gradient(#EE8434, #EE8434), url(./client/assets/img/backTwo.jpg)'

this.openSub = () => {
  this.abierto = !this.abierto
}
this.ahorateDescargamos = () => {
  alert('lo logramos')
}

this.openDes = (sub) => {

if (sub === 'conoces?') {
  this.isFuncionarMensajero(document.getElementById('sobre'), 'Conoce mas sobre la app')

  setTimeout(()=>{
    location.href = 'http://localhost:3000/#/' + sub
  }, 5000)

} else if (sub === 'presentacion') {
  this.isFuncionarMensajero(document.getElementById('sobre'), 'Aumenta tus ventas junto a Zupa')

  setTimeout(()=>{
    location.href = 'http://localhost:3000/#/' + sub
  }, 5000)

} else if (sub === 'contacto') {
  this.isFuncionarMensajero(document.getElementById('sobre'), 'Incrementa tus ingresos trabajando desde tu auto')

  setTimeout(()=>{
    location.href = 'http://localhost:3000/#/' + sub
  }, 5000)

} else if (sub === 'contacto') {
  this.isFuncionarMensajero(document.getElementById('sobre'), 'contactanos para cualquier duda')
  setTimeout(()=>{
    location.href = 'http://localhost:3000/#/' + sub
  }, 5000)
} else {

}

}

this.entrarWeb = () => {

  this.isFuncionarMensajero(document.getElementById('sobre'), 'DESCARGA LA APP')

  let data = 'Estamos en Beta'
  dispatcher.trigger('crear_toast', data)

}
this.on('mount', ()=>{

    let el = document.getElementById('fondo');
    this.isMensajero(document.getElementById('mensaje'), 'Bienvenidos a Zupa')

    el.addEventListener('click', (e) => {
      let esto = {
        posX:e.clientX,
        posY:e.clientY,
        ejeX:window.innerHeight,
        ejeY:window.innerWidth
      }
      this.mandarEsto(esto)
    })
})

this.mandarEsto = (esto) => {

  if(esto.posX <= esto.ejeX/2 && esto.posY <= esto.ejeY/2){

    let soy = 'quieroconocerzupa'

    this.preguntar(soy)
  } else if (esto.posX <= esto.ejeX/2 && esto.posY >= esto.ejeY/2) {
    let soy = 'quieroContactarme'

    this.preguntar(soy)
  } else if (esto.posX >= esto.ejeX/2 && esto.posY <= esto.ejeY/2) {
    let soy = 'soyunatienda'

    this.preguntar(soy)
  }  else if (esto.posX >= esto.ejeX/2 && esto.posY >= esto.ejeY/2) {
    let soy = 'quierotrabajardeRepartidor'

    this.preguntar(soy)
  } else {

  }

}

this.preguntar = (a) => {
  let img = {
    a:'linear-gradient(#EE8434, #EE8434), url(./client/assets/img/backTwo.jpg)',
    b:'linear-gradient(#07A0C3, #07A0C3), url(./client/assets/img/backTwo.jpg)',
    c:'linear-gradient(#EEF0F2, #EEF0F2), url(./client/assets/img/backTwo.jpg);',
    d:'linear-gradient(#e96262, #e96262), url(./client/assets/img/backTwo.jpg);'
  }

  if (a === 'quieroconocerzupa') {
    this.imgBackground = img.d
    this.update()
  } else if (a === 'soyunatienda') {
    this.imgBackground = img.b
    this.update()
  } else if (a === 'quierotrabajardeRepartidor') {
    this.imgBackground = img.a
    this.update()
  } else if (a === 'quieroContactarme') {
    this.imgBackground = img.c
    this.update()
  } else {
    console.warn('no hay este caso extraño');
  }

}

this.isFuncionarMensajero = (domElement, mensaje) => {

  let typewriter = new Typewriter(domElement);

    typewriter.deleteAll()
        .pauseFor(1000)
        .typeString(mensaje)
        .pauseFor(3000)
        .start();

}

this.isMensajero = (domElement, mensaje) => {

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
