const riot = require('riot')
import dispatcher from '../../app/dispatcher'
<onboarding>

<style>
  .flexi-container{
    display: flex;
    flex-direction:column;
    height: 100%;
  }
  .header{
    background-color: red;
  }
  .footer{
    background-color: green;
  }
  .flexContainer {
    display: flex;
    flex-direction:column;
  }
  .flexCenter {
      justify-content: center;
  }
  .fullHeight {
      height: 100vh;
  }
  .itemCenter {
      align-items: center;
  }
  .centerImage {
      background: url('./client/assets/img/backThree.jpg') center;
      background-size: cover;
  }
</style>


<div class="flexContainer flexCenter itemCenter fullHeight centerImage">


      <div class="flexContainer header ">
          <p>hola</p>
      </div>
      <div class="flexContainer flexCenter itemCenter fullHeight">
          <a href="/#/conoces?" class="homeButton">Return Home</a>
      </div>
      <div class="flexContainer footer ">
          <p>adios!</p>
      </div>

</div>





<script>
this.entrarWeb = () => {
    this.parent.abrirEstar()
    let data = 'Entrando a la website yeah'
    dispatcher.trigger('crear_toast', data)
}

</script>

</onboarding>
