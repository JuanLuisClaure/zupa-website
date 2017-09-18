const riot = require('riot')
import dispatcher from '../../app/dispatcher';

riot.tag2('storeform', '<div> <div class="container mdl-tabs mdl-js-tabs mdl-js-ripple-effect"> <div class="row text-center fh5co-heading"> <div class="mdl-tabs__tab-bar"> <a href="#soytienda-panel" class="mdl-tabs__tab is-active"> Soy una tienda </a> <a href="#sugerencia-panel" class="mdl-tabs__tab"> conozco una tienda </a> </div> </div> <div class="mdl-tabs__panel is-active" id="soytienda-panel"> <div class="flexcontainer"> <form ref="login" onsubmit="{submit}"> <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"> <input class="mdl-textfield__input" type="text" id="sample4" ref="username"> <label class="mdl-textfield__label" for="sample4">algo</label> </div> <button ref="submit"> </form> </div> </div> <div class="mdl-tabs__panel" id="sugerencia-panel"> <div class="flexcontainer"> <form onsubmit="{enviar}"> <div if="{activo}"> <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"> <input class="mdl-textfield__input" type="text" id="sample3" onkeyup="{agarrarNombre}" riot-value="{mensaje.nombre}"> <label class="mdl-textfield__label" for="sample3">Nombre y apellido</label> </div> <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="{pasoDos}"> Next </button> </div> <div if="{activoDos}"> <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"> <input class="mdl-textfield__input" type="text" id="sample4" onkeyup="{agarrarTelefono}" riot-value="{mensaje.telefono}"> <label class="mdl-textfield__label" for="sample4">Telefono</label> </div> <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="{pasoTres}"> Next </button> </div> <div if="{activoTres}"> <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"> <input class="mdl-textfield__input" type="text" id="sample5" onkeyup="{agarrarNombreTienda}" riot-value="{mensaje.nombreTienda}"> <label class="mdl-textfield__label" for="sample5">nombre tienda</label> </div> <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="{pasoTres}"> Back </button> <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="{pasoCuatro}"> Next </button> </div> <div if="{activoCuatro}"> <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"> <input class="mdl-textfield__input" type="text" id="sample6" onkeyup="{agarrarDireccion}" riot-value="{mensaje.direccion}"> <label class="mdl-textfield__label" for="sample6">¿Porque?</label> </div> <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="{enviar}"> Enviar </button> </div> </form> </div> </div> </div> </div>', 'storeform .flexcontainer,[data-is="storeform"] .flexcontainer{ display: flex; flex-direction: row; align-items: center; justify-content: center; }', '', function(opts) {
  this.mensaje = {
    nombre:'',
    telefono:'',
    nombreTienda:'',
    direccion:'',
  }
  this.activo = true
  this.activoDos = false
  this.activoTres = false
  this.activoCuatro = false

  this.agarrarNombre = (e) => {
    this.mensaje.nombre = e.target.value
    if (e.which == 13) {
      this.pasoDos()
    }
  }
  this.pasoDos = () =>{

    this.activo = !this.activo
    this.activoDos = !this.activoDos
    return
  }
  this.agarrarTelefono = (e) => {
    this.mensaje.telefono = e.target.value
    if (e.which == 13) {
      this.pasoTres()
    }
  }
  this.pasoTres = () => {

    this.activoDos = !this.activoDos
    this.activoTres = !this.activoTres
    return
  }
  this.agarrarNombreTienda = (e) => {
    this.mensaje.nombreTienda = e.target.value
    if (e.which == 13) {
      this.pasoCuatro()
    }
  }
  this.pasoCuatro = () =>{

    this.activoTres = !this.activoTres
    this.activoCuatro = !this.activoCuatro
  }
  this.agarrarDireccion = (e) => {
    this.mensaje.direccion = e.target.value
    if (e.which == 13) {
      this.enviar()
    }
  }
  this.enviar = (e) =>{
    e.preventDefault()
    console.log(this.mensaje)
  }

  this.submit = (e) => {
    e.preventDefault()
    let algo = this.refs.username.value
    console.log(algo)

  }

});
