const riot = require('riot')
import '../../componentes/nav-header/nav-header'
import '../../componentes/nav-footer/nav-footer'
import '../../componentes/slides/slides'
import '../../componentes/headroom/headroom'
import '../../componentes/footer/footer'
import dispatcher from '../../app/dispatcher'








riot.tag2('slides', '<div if="{estaOculto}"> <navheader></navHeader> <headroom></headroom> <div id="main"> <div class="container"> <div class="row fh5co-feature"> <div class="flexcontainer"> <div> <button type="button" name="button" onclick="{cambiarOculto}">Ver presentacion</button> </div> <div> <button type="button" name="button">Descargar Propuesta</button> </div> </div> </div> <div class="row fh5co-feature fh5co-reverse"> <div class="flexcontainer"> <div> <button type="button" name="button" onclick="{cambiarOculto}">Ver presentacion</button> </div> <div> <button type="button" name="button">Descargar Propuesta</button> </div> </div> </div> <h1 id="idTres"> este el id tres</h1> <div class="row fh5co-feature "> <div class="flexcontainer"> <div> <button type="button" name="button" onclick="{cambiarOculto}">Ver presentacion</button> </div> <div> <button type="button" name="button">Descargar Propuesta</button> </div> </div> </div> </div> </div> <div id="get-started" style="background:#07A0C3;"> <div class="container"> <div class="row text-center fh5co-heading"> <div class="col-md-8 col-md-offset-2"> <h2>Subscribe</h2> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> </div> </div> <div class="get-started"> <form class="form-inline"> <div class="col-md-4 col-sm-4"> <div class="form-group"> <label for="name" class="sr-only">Name</label> <input type="text" class="form-control" id="name" placeholder="Name"> </div> </div> <div class="col-md-4 col-sm-4"> <div class="form-group"> <label for="email" class="sr-only">Email</label> <input class="form-control" id="email" placeholder="Email" type="email"> </div> </div> <div class="col-md-4 col-sm-4"> <button type="submit" class="btn btn-default btn-block">Subscribe</button> </div> </form> </div> </div> </div> <infofooter></infoFooter> <navfooter></navFooter> </div> <div if="{!estaOculto}"> <div class="wrap" onclick="{cambiarOcultoyClase}"> <p> <span class="alignleft"> <a onclick="{irAtras}"> <i class="material-icons">arrow_back</i> </a> </span> </p> </div> <presentacion></presentacion> </div>', 'slides .flexcontainer,[data-is="slides"] .flexcontainer{ display: flex; flex-direction: row; align-items: center; justify-content: center; }', '', function(opts) {
  this.estaOculto = true

  this.cambiarOculto = () => {
    if (this.estaOculto) {
      this.estaOculto = false
      let data = 'entrando a la presentacion full screen'
      dispatcher.trigger('crear_toast', data)
    }
  }

  this.cambiarOcultoyClase = () => {
    if (document.getElementsByTagName('html')[0].classList.contains('ws-ready') && this.estaOculto === false) {
      document.getElementsByTagName('html')[0].classList.remove('ws-ready')
      this.estaOculto = true
      let data = 'saliendo de la presentacion full screen'
      dispatcher.trigger('crear_toast', data)
    }
  }

});
