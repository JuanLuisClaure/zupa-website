const riot = require('riot')
import '../../componentes/onboarding/onboarding'
<welcome>

    <div if={ !estar }>

      <onboarding/>
      <onboarding/>
      <onboarding/>
      <onboarding/>

      <onboarding/>
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
