const riot = require('riot')
import dispatcher from '../../app/dispatcher'
riot.tag2('tiendaform', '<div class="flexcontainer" if="{entrar}"> <h1>hola mundo</h1> <h4>si no encuentras tu tienda en Zupa te animamos a llenar este formulario</h4> <button onclick="{abrirModal}" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"> Button </button> <button onclick="{abrirModal2}" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"> Button </button> </div>', 'tiendaform .flexcontainer,[data-is="tiendaform"] .flexcontainer{ display: flex; flex-direction: column; align-items: center; justify-content: center; }', '', function(opts) {
    this.entrar = true
    this.abrirModal = () => {

      let data = 'tiendaForm'
      dispatcher.trigger('crear_modal', data)
    }
    this.abrirModal2 = () => {

      let data = 'headroom'
      dispatcher.trigger('crear_modal', data)
    }

});
