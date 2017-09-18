const riot = require('riot');



riot.tag2('presentacion', '<article id="webslides"> <section class=""> <h1>kaslkjdlasdjas</h1> </section> <section> <h1>Slide 2</h1> </section> <section> <h1>Slide 3</h1> </section> <section> <h1>Slide 4</h1> </section> <section> <h1>Slide 5</h1> </section> <section> <h1>Slide 6</h1> </section> <section> <h1>Slide 7</h1> </section> </article>', '', '', function(opts) {


  this.on('mount', () => {
    const ws = new WebSlides({
      autoslide: true,
      changeOnClick: false,
      loop: false,
      minWheelDelta: 40,
      scrollWait: 450,
      slideOffset: 50
    });
  })
});
