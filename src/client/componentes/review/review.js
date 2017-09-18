const riot = require('riot')

riot.tag2('review', '<div class="fh5co-testimonial"> <div class="container"> <div class="col-8-xl col-8-l col-8-m"> <div each="{x in reviews}"> <div class="mdl-card mdl-shadow--3dp {(x.state)? \'entrar\':\'none\'}" if="{x.state}" style="width:70%;"> <div class="mdl-card__title mdl-card--expand" riot-style="color: #fff;height: 176px;background:url({x.img}) center / cover;"> <h2 class="mdl-card__title-text">{x.autor}</h2> </div> <div class="mdl-card__supporting-text"> <blockquote class="text-left"> {x.review} </blockquote> </div> <div class="mdl-card__actions mdl-card--border text-right"> <span class="review" each="{star in x.stars}"> <i class="material-icons">{star}</i> </span> </div> </div> </div> </div> <div class="col-4-xl col-4-l col-4-m"> <div class="row text-center fh5co-heading"> <h2>Customer Review</h2> </div> <p>ksadkaskdaskdasdsadasdasssda sadasdasdasdas sa jska kasj kasj asaslasjca as asdjasjdasñ asideklsajdlas onloadedmetadata="datalist" sakldjaslkdjaslsa askalsd saldje cdsñlcks ceñslckes cac askdasldkjsad aslkdasidw </p> </div> <div class="row text-center"> <button class="col-6 mdl-button mdl-js-button mdl-button--icon" onclick="{atras}"> <i class="material-icons">keyboard_arrow_left</i> </button> <button class="col-6 mdl-button mdl-js-button mdl-button--icon" onclick="{adelante}"> <i class="material-icons">keyboard_arrow_right</i> </button> </div> </div> </div>', 'review .entrar,[data-is="review"] .entrar{ -webkit-animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) ; animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) ; }', '', function(opts) {
    this.reviews = [
      {
        img: './client/assets/img/welcome_card.jpg',
        autor: 'Juan Luis Claure',
        review: 'Es una app muy genial donde podes comprar con la confiaza de spiderman',
        stars: ['star', 'star', 'star', 'star', 'star_border',],
        state: false
      },
      {
        img: './client/assets/img/person_1.jpg',
        autor: 'Sebastian Glahn',
        review: 'Es una app muy genial donde podes comprar con la confiaza de spiderman',
        stars: ['star', 'star', 'star', 'star', 'star_border',],
        state: false
      },
      {
        img: './client/assets/img/person_1.jpg',
        autor: 'Andreas',
        review: 'Es una app muy genial donde podes comprar con la confiaza de spiderman',
        stars: ['star', 'star', 'star', 'star', 'star_border',],
        state: true
      },
      {
        img: './client/assets/img/person_1.jpg',
        autor: 'Matthi',
        review: 'Es una app muy genial donde podes comprar con la confiaza de spiderman',
        stars: ['star', 'star', 'star', 'star', 'star_border',],
        state: false
      },
      {
        img: './client/assets/img/person_1.jpg',
        autor: 'Hugo',
        review: 'Es una app muy genial donde podes comprar con la confiaza de spiderman',
        stars: ['star', 'star', 'star', 'star', 'star_border',],
        state: false
      },
      {
        img: './client/assets/img/person_1.jpg',
        autor: 'GAbriel',
        review: 'Es una app muy genial donde podes comprar con la confiaza de spiderman',
        stars: ['star', 'star', 'star', 'star_border', 'star_border',],
        state: false
      },
      {
        img: './client/assets/img/person_1.jpg',
        autor: 'roxana',
        review: 'Es una app muy genial donde podes comprar con la confiaza de spiderman',
        stars: ['star', 'star', 'star_border', 'star_border', 'star_border',],
        state: false
      },
      {
        img: './client/assets/img/person_1.jpg',
        autor: 'carolina',
        review: 'Es una app muy genial donde podes comprar con la confiaza de spiderman',
        stars: ['star', 'star_border', 'star_border', 'star_border', 'star_border',],
        state: false
      },
      {
        img: './client/assets/img/person_1.jpg',
        autor: 'isabel',
        review: 'Es una app muy genial donde podes comprar con la confiaza de spiderman',
        stars: ['star', 'star', 'star', 'star', 'star_border',],
        state: false
      },
      {
        img: './client/assets/img/person_1.jpg',
        autor: 'rodrigo',
        review: 'Es una app muy genial donde podes comprar con la confiaza de spiderman',
        stars: ['star', 'star', 'star', 'star_border', 'star_border',],
        state: false
      },
      {
        img: './client/assets/img/person_1.jpg',
        autor: 'bambino',
        review: 'Es una app muy genial donde podes comprar con la confiaza de spiderman',
        stars: ['star', 'star', 'star', 'star', 'star',],
        state: false
      },
      {
        img: './client/assets/img/person_1.jpg',
        autor: 'jaqueline',
        review: 'Es una app muy genial donde podes comprar con la confiaza de spiderman',
        stars: ['star', 'star', 'star', 'star_border', 'star_border',],
        state: false
      },
      {
        img: './client/assets/img/person_1.jpg',
        autor: 'dorita',
        review: 'Es una app muy genial donde podes comprar con la confiaza de spiderman',
        stars: ['star', 'star', 'star', 'star', 'star_border',],
        state: false
      }
    ]

    this.adelante = () => {
    let b = this.reviews.findIndex(this.pruebaDeVerdad)
    let i = b + 1
      if (i === this.reviews.length) {
        this.reviews[0].state = true
      }else{
        this.reviews[i].state = true
      }
    }

    this.atras = () => {
    let max = this.reviews.length - 1
    let b = this.reviews.findIndex(this.pruebaDeVerdad)
    let i = b - 1
      if (i === -1) {
        this.reviews[max].state = true
      }else{
        this.reviews[i].state = true
      }
    }

    this.pruebaDeVerdad = (item, index, array) => {
      let x = item.state === true
        if (item.state) {
          item.state = false
        }
      return x
    }

});
