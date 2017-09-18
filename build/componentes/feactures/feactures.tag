const riot = require('riot')
import '../tiendasDb/tiendasDb'
import '../promosDb/promosDb'
import '../productosDb/productosDb'


<feactures>


<div id="features">
  <div class="container mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
    <div class="row text-center fh5co-heading">
      <div class="col-md-8 col-md-offset-2">
        <h2>Podras Encontrar</h2>
        <hr>
        <div class="mdl-tabs__tab-bar">
            <a href="#tiendas-panel" class="mdl-tabs__tab is-active">
              <i class="material-icons">store</i>
            </a>
            <a href="#promos-panel" class="mdl-tabs__tab">
              <i class="material-icons">local_atm</i>
            </a>
            <a href="#productos-panel" class="mdl-tabs__tab">
              <i class="material-icons">shopping_cart</i>
            </a>
        </div>
      </div>
    </div>
      <div class="mdl-tabs__panel is-active" id="tiendas-panel">
        <div class="row">
          <h5 class="col-full text-center">Tiendas</h5>
          <tiendasDb></tiendasDb>
        </div>
      </div>
      <div class="mdl-tabs__panel" id="promos-panel">
        <div class="row">
          <h5 class="col-full text-center">Promos</h5>
          <promosDb></promosDb>
        </div>
      </div>
      <div class="mdl-tabs__panel" id="productos-panel">
        <div class="row">
          <h5 class="col-full text-center">Productos</h5>
          <productosDb></productosDb>
        </div>
      </div>
    </div>
  </div>



</feactures>
