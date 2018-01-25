const riot = require('riot')
import '../../componentes/onboarding/onboarding'
import dispatcher from '../../app/dispatcher'
riot.tag2('welcome', '<div class="grid-container" data-medida="single"> <div class="flex_item--header" data-color="transparente"> <a href="#">subscribete a las noticias semanales </a> </div> <div class="flex_item--body" data-color="transparente"> <figure style="text-align: center;"> <img src="./client/assets/img/zupa.png" class="img-fluid" width="25%"> </figure> <h6>DESDE AHORA PEDIR COMIDA ES DIVERTIDO.CONOCE EL MENU DE TUS TIENDAS FAVORITAS.</h6> <a href="#">sobre nosotros</a> <a href="#">contacto</a> <a href="#">restaurants</a> <a href="#">repartidores</a> </div> </div> <div class="flex_item--footer" data-color="transparente"> <a href="#">Conoce como funciona</a> </div> </div>', '', '', function(opts) {

const tag = this
tag.cards = [
  {name:"Real",id:"181", img:"./client/assets/img/welcome_card.jpg",title:"Holavida", parrafo:"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",},
  {name:"Amistoso",id:"182", img:"./client/assets/img/welcome_card.jpg",title:"ComoEstas?", parrafo:"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",},
  {name:"Amable",id:"182", img:"./client/assets/img/welcome_card.jpg",title:"SiguesPensandoEnMi?", parrafo:"reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",}

]

});
