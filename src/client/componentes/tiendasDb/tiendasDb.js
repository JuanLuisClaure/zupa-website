const riot = require('riot')
import dispatcher from '../../app/dispatcher'


riot.tag2('tiendasdb', '<div class="flexcontainer"> <div each="{x in tiendas}"> <div class="mdl-card mdl-shadow--3dp"> <div class="mdl-card__title mdl-card--expand" riot-style="color: #fff;height: 176px;background:url({x.image}) center / cover;"> <h4> Featured event:<br> May 24, 2016<br> 7-11pm </h4> </div> </div> </div> </div>', 'tiendasdb .flexcontainer,[data-is="tiendasdb"] .flexcontainer{ display: flex; flex-direction: row; align-items: center; justify-content: center; position: absolute; bottom: 20%; }', '', function(opts) {
this.tiendas = []
this.on('mount', ()=>{
  dispatcher.trigger('read', 'Shops')
  dispatcher.on('Shops_returned', this.renderizar)
})

this.renderizar = (data) => {
  if (data.length > 2) {

  }
  console.log(data, 'esto es tiendas');
  this.tiendas = data
  this.update()

}

});
