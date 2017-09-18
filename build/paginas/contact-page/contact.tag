const riot = require('riot')
import dispatcher from '../../app/dispatcher'
import '../../componentes/nav-header/nav-header'
import '../../componentes/nav-footer/nav-footer'
import '../../componentes/headroom/headroom'
import '../../componentes/footer/footer'
import '../../componentes/tiendasDb/tiendasDb'




<contactPage>
  <navHeader></navHeader>
  <headroom></headroom>
  <div id="main">
    <div class="container">

      <div class="row fh5co-feature">
        <div class="flexcontainer">

        </div>
      </div>
      <!-- END feature -->

      <div class="row fh5co-feature fh5co-reverse">
        <div class="flexcontainer">
            <div>
                <button type="button" name="button" >Ver presentacion</button>
            </div>
            <div>
              <button type="button" name="button">Descargar Propuesta</button>
            </div>
        </div>
      </div>
      <!-- END feature -->

      <div class="row fh5co-feature ">
        <div class="flexcontainer">
            <div>
                <button type="button" name="button" >Ver presentacion</button>
            </div>
            <div>
              <button type="button" name="button" onclick={ hacecesto }>Descargar Propuesta</button>


            </div>
        </div>
      </div>
      <!-- END feature -->

      <h1 id="idDos"> este el id dos</h1>
    </div>
  </div>

  <div id="get-started" style="background:#EE8434;">
    <div class="container">
    </div>
  </div>
  <infoFooter></infoFooter>
  <navFooter></navFooter>
  <script>
    this.hacecesto = () => {
      console.log(getOpts());
      let data = 'tiendasDb'
      dispatcher.trigger('crear_modal', data)
    }
  </script>
</contactPage>
