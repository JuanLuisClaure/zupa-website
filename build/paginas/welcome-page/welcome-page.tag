const riot = require('riot')
import '../../componentes/onboarding/onboarding'
import dispatcher from '../../app/dispatcher'
<welcome>


<style >
.grid-container{
  display: grid;
  background-image: url('./client/assets/img/backOne.jpg');
  background-attachment:fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: color
}

.grid-container[data-medida="single"]{
  grid-template-columns:repeat(1, 1fr);
  grid-template-rows: 17vh 66vh 17vh;
}

.estilos-prueba{
  background-color: rgba(74, 211, 215, 0.62);


}
.flex_item--header{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.flex_item--body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.flex_item--footer{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.flex_item--header[data-color="transparente"]{
  background-color:rgba(207, 207, 208, 0.49)!important;

}
.flex_item--body[data-color="transparente"]{
  background-color:rgba(207, 207, 208, 0.49)!important;

}
.flex_item--footer[data-color="transparente"]{
  background-color:rgba(207, 207, 208, 0.49)!important;

}


</style>
<div class="grid-container" data-medida="single">
      <div class="flex_item--header" data-color="transparente">
        <a href="#">sobre nosotros</a>
        <a href="#">contacto</a>
          <figure style="text-align: center;">
            <img src="./client/assets/img/zupa.png" class="img-fluid" width="55%">
          </figure>
        <a href="#">restaurants</a>
        <a href="#">repartidores</a>
      </div>
      <div class="flex_item--body" data-color="transparente">
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
