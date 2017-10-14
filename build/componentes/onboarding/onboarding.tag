const riot = require('riot')
import dispatcher from '../../app/dispatcher'
<onboarding>
<style media="screen">

  .flexContainer-main{
    position: absolute;
    display: flex;
    flex-direction:column;
    height: 100vh;
    width: 100vw;
    /*z-index: 1;*/
   }
   .flexContainer-center{
     display: flex;
     flex-direction:column;
     align-items: center;
     justify-content: center;
     margin: 0 auto;
   }
   .flexContainer-cabezera{
     display: flex;
     flex-direction: row;
     justify-content: space-around;
     align-items: baseline;
   }

  .cabezera{
  background-color: transparent;
  flex: 0 1 auto;
  order: 1;
  }
  .piedepagina{
    background-color: transparent;
    flex: 0 1 auto;
    order: 3;
  }
  .contenido{
    background-color: transparent;
    flex: 51 1 auto;
    order:2;
  }
  .supuestamente{
    margin: 0 auto;
    width: 100%;
  }
</style>



<div class="flexContainer-main" style="background-attachment:fixed;background-position: center;background-repeat: no-repeat;background-size: cover;background-blend-mode: color;background-image:{ imgBackground };" id="fondo">

  <div class="cabezera" >

    <div class="flexContainer-cabezera">
      <div class="supuestamente text-left">
        <p><a href="/#/conoces?">The app!</a></p>
      </div>
      <div class="supuestamente text-right">
        <p><a href="/#/presentacion">the shops</a></p>
      </div>
    </div>

  </div>


  <div class="contenido" >

    <div class="flexContainer-center">




        <h1 id="mensaje"></h1>

        <div class="mdl-card mdl-shadow--4dp" if={ !abierto } style="background-color:rgb(222, 222, 222)!important;">
          <div class="mdl-card__supporting-text" style="word-wrap: break-word;">

            <h3 id="sobre"></h3>

          </div>
          <div class="mdl-card__supporting-text">
            <button type="button" name="button" onclick={ openSub  }>subscribe</button>
            <button type="button" name="button" onclick={ entrarWeb }>Comprar Web</button>
          </div>
        </div>

        <div class="mdl-card mdl-shadow--4dp" if={ abierto } style="background-color:rgb(222, 222, 222)!important;">
          <!-- <div class="mdl-card__media"><img src="./client/assets/img/zupa.png" width="173" height="157" border="0"
           alt="" style="padding:10px;">
          </div> -->
          <div class="mdl-card__supporting-text" style="word-wrap: break-word;">
            <h3 id="sobre"></h3>
          </div>
          <div class="mdl-card__supporting-text">
            <input type="text" name="" value="aaaaaaaaaaaaaaaaa">
            <input type="text" name="" value="aaaaaaaaaaaaaaaaa">
            <button type="button" name="button" onclick={ openSub  }>summit</button>
          </div>
        </div>




  </div>

  </div>



  <div class="piedepagina ">
    <div class="flexContainer-cabezera">
      <div class="supuestamente text-left">
      <p><a href="/#/contacto">Contact Us</a></p>
      </div>
      <div class="supuestamente text-right">
        <p><a href="/#/contacto">Want to work?</a></p>
      </div>
    </div>
  </div>

</div>



<script>
this.abierto = false

this.openSub = () => {
  this.abierto = !this.abierto
}

this.entrarWeb = () => {
  // let el = document.getElementById('myCanvas')
  // let elId = el.classList.add('none')

  let data = 'Entrando a la website yeah'
  dispatcher.trigger('crear_toast', data)


}
this.on('mount', ()=>{

    let el = document.getElementById('fondo');
    let app = document.getElementById('mensaje');

    this.isFuncionarMensajero(app, 'Hola como estas epseramos que tengas un hermoso dia')



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
    // Yo soy el tab de losque quiere conocer
    let soy = 'quieroconocerzupa'
    let ass = document.getElementById('sobre');
    this.isFuncionarMensajero(ass, soy)
    this.preguntar(soy)
  } else if (esto.posX <= esto.ejeX/2 && esto.posY >= esto.ejeY/2) {
    let soy = 'quieroContactarme'

    let ass = document.getElementById('sobre');
    this.isFuncionarMensajero(ass, soy)
    this.preguntar(soy)
  } else if (esto.posX >= esto.ejeX/2 && esto.posY <= esto.ejeY/2) {
    let soy = 'soyunatienda'

    let ass = document.getElementById('sobre');
    this.isFuncionarMensajero(ass, soy)
    this.preguntar(soy)
  }  else if (esto.posX >= esto.ejeX/2 && esto.posY >= esto.ejeY/2) {
    let soy = 'quierotrabajardeRepartidor'

    let ass = document.getElementById('sobre');
    this.isFuncionarMensajero(ass, soy)
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


  //
  // switch (a) {
  //   case ():
  //
  //     break;
  //     case ():
  //
  //       console.log('c');
  //       break;
  //       case :
  //
  //         console.log('b');
  //         break;
  //         case :
  //
  //           console.log('d');
  //           break;
  //   default:
  //     this.imgBackground = null
  // }


}



this.isFuncionarMensajero = (domElement, mensaje) => {







  let typewriter = new Typewriter(domElement, {
        loop: true
    });

    typewriter.typeString(mensaje)
        .pauseFor(2500)
        .deleteAll()
        .typeString('saving...')
        .pauseFor(2500)
        .deleteChars(7)
        .typeString('saving...')
        .pauseFor(2500)
        .start();

}
// this.on('mount', ()=>{
//   // let el = document.getElementById('myCanvas')
//   let tabla = document.getElementById('super')
//   // el.setAttribute('style', 'background-color: rgba(229, 25, 25, 0) !important;pointer-events: none!important;')
//
//   tabla.addEventListener('click', (e)=>{
//     socket.emit('consultas', e)
//   })
//
//   let elId = el.classList.remove('none')
// })





</script>

</onboarding>
