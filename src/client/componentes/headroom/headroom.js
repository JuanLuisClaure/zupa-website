const riot = require('riot')
import '../tiendasDb/tiendasDb'
riot.tag2('headroom', '<div id="fh5co-header" riot-style="background-attachment:fixed;background-position: center;background-repeat: no-repeat;background-size: cover;background-blend-mode: color;background-image:{colorBackground};"> <div class="container" if="{panelUno}"> </div> <div class="container" if="{panelDos}"> </div> <div class="container" if="{panelTres}"> </div> </div>', '', '', function(opts) {

  this.location = window.location.href;
  this.full = window.location.protocol + "//" + window.location.host ;

  if (this.location == this.full + '/#/conoces?') {

    this.colorBackground = 'linear-gradient(#e96262, #e96262), url(./client/assets/img/backTwo.jpg)'
    this.panelUno = true
    this.panelDos = false
    this.panelTres = false
    this.update()

  }else if (this.location == this.full + '/#/contacto') {

    this.colorBackground = 'linear-gradient(#EE8434, #EE8434), url(./client/assets/img/backTwo.jpg)'
    this.panelUno = false
    this.panelDos = false
    this.panelTres = true
    this.update()

  }else{
    this.colorBackground = 'linear-gradient(#07A0C3, #07A0C3), url(./client/assets/img/backTwo.jpg)'
    this.panelUno = false
    this.panelDos = true
    this.panelTres = false
    this.update()

  }

});
