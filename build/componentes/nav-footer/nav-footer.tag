const riot = require('riot')

<navFooter>




<div id="footer-dos" class="container-full flex-container none-m none-l none-xl">
  <div class="flex-size-footer">
      <div class="incio-link text-center">
        <a href="#/conoces?">
        <i class="material-icons">mail</i>
        <p>inicio</p>
        </a>
      </div>
      <div class="incio-link text-center">
        <a href="#/conoces?">
        <i class="material-icons">person</i>
        <p>delivery</p>
        </a>
      </div>
      <div class="presentacion-link text-center">
        <a href="#/presentacion">
        <i class="material-icons">send</i>
        <p>empresas</p>
        </a>
      </div>
      <div class="contactanos-link text-center">
        <a href="#/contacto">
        <i class="material-icons">people</i>
        <p>contacto</p>
        </a>
      </div>
  </div>
</div>





  <style>
      #footer-dos {
      z-index: 9;
      position: fixed;
      bottom: 0;
      width: 100%;
      background-color: #fff;
      box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.85);
      padding: 1% 0%;
      }
      .flex-size-footer{
        display:flex;
        flex-flow: row;
        align-items: baseline;
        justify-content:space-around;
      }
  </style>
</navFooter>
