const riot = require('riot')
import '../../componentes/onscroll/onscroll'




<navHeader>

<onscroll>


        <div class="container-full flex-container { (pos.top>-333)? 'header-state-one':'header-state-two'}">

          <div class="flex-size-header">
            <div class="{ (pos.top>-333)? 'nav-img':'nav-burguer'}" onclick={ abrirSideBar }>
              <i class="{ (pos.top>-333)? 'hide':'material-icons'}">menu</i>
              <img src="./client/assets/img/zupa.png" alt="zupa.delivery" id="img-logo" class="img-fluid { (pos.top>-333)? 'img-flip':'hide'}">
            </div>
            <div class="{ (pos.top>-333)? 'nav-title':'nav-title-two'}">
              <h4 class="{ (pos.top>-333)? 'hide':'show'}">Zupa</h4>
            </div>
            <div class="{ (pos.top>-333)? 'nav-space':'nav-space-two'}"></div>
            <div class="nav-links">
              <ul class="box">
                <li><a href="#/conoces?">Sobre Nosotros</a></li>
                <li><a href="#/presentacion">Restaurantes</a></li>
                <li><a href="#/contacto">Contactanos!</a></li>
              </ul>
            </div>
            <div class="{ (pos.top>-333)? 'nav-button':'nav-button-two'}">
              <button class="mdl-button mdl-js-button mdl-button--raised" id="{ (pos.top>-333)? 'boton-descargar-white':'boton-descargar-red'}"  onclick={ descargarApp }>Descargar La app</button>
            </div>
          </div>


        </div>

        <aside class="sidebar-abrir" role="navigation" if={ abierto }>
          <div class="mdl-card">
          <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">Bienvenido a Zupa</h2>
          </div>
          <div class="mdl-card__supporting-text">
            <span class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            <i class="material-icons">file_download</i>
            ¡Descargar la App!
            </span>
            <p> Somos una empresa enfocada en ofrecer la mejor y la mas facil
            forma de pedir comida a travez de una App. Encuentra tus negocios
            de comida Favoritos y pide desde la comodidad de tu sillon.</p>
          <ul class="demo-list-icon mdl-list">
          <li class="mdl-list__item">
          <a href="ww.facebook.com/zupadelivery" class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-icon">chat_bubble_outline</i>
          Snapchat
          </a>
          </li>
          <li class="mdl-list__item">
          <a href="ww.facebook.com/zupadelivery" class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-icon">photo</i>
          Instagram
          </a>
          </li>
          <li class="mdl-list__item">
          <a href="ww.facebook.com/zupadelivery" class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-icon">people</i>
          Facebook
          </a>
          </li>
          <li class="mdl-list__item">
          <a href="ww.facebook.com/zupadelivery" class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-icon">mail</i>
          Correo
          </a>
          </li>
          </ul>
          </div>
          <div class="mdl-card__actions mdl-card--border">
          </div>
          <div class="mdl-card__menu">
          <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
          <i class="material-icons" >share</i>
          </button>
          </div>
          </div>
        </aside>
        <div class="sidebar-overlay" if={ abierto } onclick={ abrirSideBar }>
        </div>

</onscroll>



</navHeader>
