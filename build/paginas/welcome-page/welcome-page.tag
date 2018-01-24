const riot = require('riot')
import '../../componentes/onboarding/onboarding'
import dispatcher from '../../app/dispatcher'
<welcome>

<div class="grid-container" data-medida="single">
      <div class="flex_item--header" data-color="transparente">
        <a href="#">sobre nosotros</a>
        <a href="#">contacto</a>
        <a href="#">restaurants</a>
        <a href="#">repartidores</a>
      </div>
      <div class="flex_item--body" data-color="transparente">
        <figure style="text-align: center;">
          <img src="./client/assets/img/zupa.png" class="img-fluid" width="25%">
        </figure>
        <h1>ZUPAMENTE FACIL</h1>
        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h6>
      </div>
      <div class="flex_item--footer" data-color="transparente">
          <button type="button" name="button">Descargar App</button>
          <button type="button" name="button">Presentacion</button>
      </div>
</div>

<script>

const tag = this
tag.cards = [
  {name:"Real",id:"181", img:"./client/assets/img/welcome_card.jpg",title:"Holavida", parrafo:"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",},
  {name:"Amistoso",id:"182", img:"./client/assets/img/welcome_card.jpg",title:"ComoEstas?", parrafo:"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",},
  {name:"Amable",id:"182", img:"./client/assets/img/welcome_card.jpg",title:"SiguesPensandoEnMi?", parrafo:"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",}
  // {name:"Sincero",id:"181", img:"./client/assets/img/welcome_card.jpg",title:"vivesMisExperiencias", parrafo:"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",},
  // {name:"Correcto",id:"182", img:"./client/assets/img/welcome_card.jpg",title:"otanSolodejaste", parrafo:"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",},
  // {name:"Trabajador",id:"182", img:"./client/assets/img/welcome_card.jpg",title:"AlTiempoRealiceSu", parrafo:"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",},
  // {name:"Amoroso",id:"181", img:"./client/assets/img/welcome_card.jpg",title:"TrabajoCosechandoMiVida", parrafo:"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",}
]

</script>




</welcome>
