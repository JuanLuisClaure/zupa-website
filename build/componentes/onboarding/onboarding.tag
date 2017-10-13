const riot = require('riot')
import dispatcher from '../../app/dispatcher'
<onboarding>
<style media="screen">

  .flexContainer{
    display: flex;
    flex-direction:column;
    position: absolute;
    height: 100vh;
    width: 100vw;
    /*z-index: 1;*/
   }
  .flexCenter{
      justify-content: center;
      align-items: stretch;
  }
  .header{
  background-color: transparent;
  flex: 0 1 auto;
  order: 1;
  }
  .footer{
    background-color: transparent;
    flex: 0 1 auto;
    order: 3;
  }
  .content{
    background-color: transparent;
    flex: 51 1 auto;
    order:2;
  }
</style>


<div class="flexContainer" style="background-attachment:fixed;background-position: center;background-repeat: no-repeat;background-size: cover;background-blend-mode: color;background-image:{ imgBackground };" id="fondo">

  <div class="header" >
    <p>hola</p>
    <p>hola</p>
  </div>
  <div class="content flexCenter" >
      <a href="/#/conoces?" class="homeButton"  onclick={ entrarWeb }>Return Home</a>
  </div>
  <div class="footer" >
    <button type="button" name="button" onclick={ openSub  }></button>
      <div class="aaa" if={ abierto }>
          <input type="text" name="" value="aaaaaaaaaaaaaaaaa">
          <input type="text" name="" value="aaaaaaaaaaaaaaaaa">
          <input type="text" name="" value="aaaaaaaaaaaaaaaaa">
          <input type="text" name="" value="aaaaaaaaaaaaaaaaa">
          <input type="text" name="" value="aaaaaaaaaaaaaaaaa">
          <input type="text" name="" value="aaaaaaaaaaaaaaaaa">
          <input type="text" name="" value="aaaaaaaaaaaaaaaaa">
          <input type="text" name="" value="aaaaaaaaaaaaaaaaa">
          <input type="text" name="" value="aaaaaaaaaaaaaaaaa">
          <input type="text" name="" value="aaaaaaaaaaaaaaaaa">
          <input type="text" name="" value="aaaaaaaaaaaaaaaaa">
          <input type="text" name="" value="aaaaaaaaaaaaaaaaa">
          <input type="submit" name="" value="aaaaaaaaaaaaaaaaa">
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
    a:'linear-gradient(#EE8434, #EE8434), url(./client/assets/img/backThree.jpg)',
    b:'linear-gradient(#07A0C3, #07A0C3), url(./client/assets/img/backTwo.jpg)',
    c:'linear-gradient(#e96262, #e96262), url(./client/assets/img/backTwo.jpg);',
    d:'linear-gradient(#e96262, #e96262), url(./client/assets/img/zupa.png);'
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
