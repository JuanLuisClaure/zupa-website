import route from 'riot-route'

const riot = require('riot')
const renderHere = document.querySelector('#inicio')
const OptsMixins = {
  // init method is a special one which can initialize
  // the mixin when it's loaded to the tag and is not
  // accessible from the tag its mixed in
  init: function() {
    this.on('updated', function() {
      componentHandler.upgradeDom();
  })
  },

}

route('/', () => {
  System.import('../paginas/welcome-page/welcome-page').then( (module) => {
    renderHere.innerHTML='<welcome></welcome>'
    riot.mount('welcome')
    riot.mixin(OptsMixins)
  }).catch( (err) => {
    console.log(err)
  })
})

route('/conoces?', () => {
  System.import('../paginas/index-page/index').then( (module) => {
    renderHere.innerHTML='<index></index>'
    riot.mount('index')
    riot.mixin(OptsMixins)
  }).catch( (err) => {
    console.log(err)
  })
})


route('/presentacion', () => {
  System.import('../paginas/slides-page/slides').then( (module) => {
    renderHere.innerHTML='<slides></slides>'
    riot.mount('slides')

  }).catch( (err) => {
    console.log(err)
  })
})

route('/contacto', () => {
  System.import('../paginas/contact-page/contact').then( (module) => {
    renderHere.innerHTML='<contactPage></contactPage>'
    riot.mount('contactPage')
    riot.mixin(OptsMixins)

  }).catch( (err) => {
    console.log(err)
  })
})

route.stop()
route.start(true)
