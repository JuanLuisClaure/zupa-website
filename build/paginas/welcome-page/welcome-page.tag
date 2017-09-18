const riot = require('riot')
import '../../componentes/onboarding/onboarding'
<welcome>

    <div if={ !estar }>

      <onboarding/>

    </div>
    <script>
      this.estar = false
      this.abrirEstar = () =>{
        this.estar = !this.estar
        this.update()
      }
    </script>
</welcome>
