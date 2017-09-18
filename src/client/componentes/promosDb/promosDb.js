const riot = require('riot')
import dispatcher from '../../app/dispatcher'


riot.tag2('promosdb', '<div each="{x in promos}"> <div class="col-4-xl col-4-l col-4-m animateBox"> <div class="feature-center"> <p>{x.title}</p> <p>{x.url}</p> </div> </div> </div>', 'promosdb .animateBox,[data-is="promosdb"] .animateBox{ -webkit-animation: slide-bck-center 0.45s cubic-bezier(0.470, 0.000, 0.745, 0.715) both; animation: slide-bck-center 0.45s cubic-bezier(0.470, 0.000, 0.745, 0.715) both; }', '', function(opts) {
  this.promos = []
  this.on('mount', ()=>{
      dispatcher.trigger('read', 'Promos')
      dispatcher.on('Promos_returned', this.renderizar)
  })

  this.renderizar = (data) => {

    console.log(data, 'esto es promos');
    this.promos = data
    this.update()

  }

});
