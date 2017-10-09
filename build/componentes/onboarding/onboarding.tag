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
    z-index: 1;
    background-color: rgba(229, 25, 25, 0) !important;

  }
  .flexCenter{
      justify-content: center;
      align-items: stretch;
  }
  .header{
  background-color: rgba(9, 29, 213, 1);
  flex: 0 1 auto;
  order: 1;
  }
  .footer{
    background-color: rgba(9, 29, 213, 1);
    flex: 0 1 auto;
    order: 3;
  }
  .content{
    background-color: rgba(9, 29, 213, 0.77);
    flex: 51 1 auto;
    order:2;
  }
</style>


<div class="flexContainer" id="super">

  <div class="header" >
    <p>hola</p>
    <p>hola</p>
  </div>
  <div class="content flexCenter" >
      <a href="/#/conoces?" class="homeButton"  onclick={ entrarWeb }>Return Home</a>
  </div>
  <div class="footer" >
    <button type="button" name="button" onclick={ openSub }></button>
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
  let el = document.getElementById('myCanvas')
  let elId = el.classList.add('none')
  let data = 'Entrando a la website yeah'
  dispatcher.trigger('crear_toast', data)
}



this.on('mount', ()=>{
  let el = document.getElementById('myCanvas')
  let tabla = document.getElementById('super')
  el.setAttribute('style', 'background-color: rgba(229, 25, 25, 0) !important;pointer-events: none!important;')

  tabla.addEventListener('click', (e)=>{
    socket.emit('consultas', e)
    this.update()
  })

  let elId = el.classList.remove('none')
})





</script>

</onboarding>
