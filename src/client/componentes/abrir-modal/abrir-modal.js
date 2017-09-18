const riot = require('riot')
import dispatcher from '../../app/dispatcher'
riot.tag2('abrir-modal', '<div class="flexcontainer" if="{entrar}"> <h1>hola mundo</h1> <h4>si no encuentras tu tienda en Zupa te animamos a llenar este formulario</h4> <button onclick="{abrirModal}" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"> Button </button> </div>', 'abrir-modal .flexcontainer,[data-is="abrir-modal"] .flexcontainer{ display: flex; flex-direction: column; align-items: center; justify-content: center; }', '', function(opts) {
    this.entrar = true
    this.abrirModal = () => {

      let data = 'storeform'
      dispatcher.trigger('crear_modal', data)
    }

});
