const riot = require('riot')
import '../../componentes/onboarding/onboarding'
riot.tag2('welcome', '<div if="{!estar}"> <onboarding></onboarding> </div>', '', '', function(opts) {
      this.estar = false
      this.abrirEstar = () =>{
        this.estar = !this.estar
        this.update()
      }
});
