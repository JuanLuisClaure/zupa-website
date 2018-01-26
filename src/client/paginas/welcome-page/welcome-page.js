const riot = require('riot')
import '../../componentes/onboarding/onboarding'
import dispatcher from '../../app/dispatcher'
riot.tag2('welcome', '<div class="grid-container" data-medida="single"> <div class="flex_item--header" data-color="transparente"> <a href="#">subscribete a las noticias semanales </a> </div> <div class="flex_item--body" data-color="transparente"> <figure style="text-align: center;"> <img src="./client/assets/img/zupa.png" class="img-fluid" width="25%"> </figure> <h6 id="mensaje"></h6> <a href="#">sobre nosotros</a> <a href="#">contacto</a> <a href="#">restaurants</a> <a href="#">repartidores</a> </div> <div class="flex_item--footer"> <p class="marquee"><span>Forex: USDX, EURUSD, GBPUSD, AUDUSD, NZDUSD, USDCAD, USDNOK,USDSGD, USDSEK, USDJPY , GBPJPY ,EURJPY, AUDJPY, CADJPY, NZDJPY,EURAUD, EURGBP, EURCAD, EURNZD, GBPAUD, GBPNZD, GBPCAD,AUDCAD, AUDNZD / Indexes: S&P, ES_F, DJIA, Nasdaq, Russell, AAPL, FTSE, DAX, IBEX, Eurostoxx50,NIKKEI, ASX ,HangSeng, TASI, NIFTY </span></p> </div> </div>', 'welcome .marquee,[data-is="welcome"] .marquee{ white-space: nowrap; overflow: hidden; box-sizing: border-box; } welcome .marquee span,[data-is="welcome"] .marquee span{ display: inline-block; padding-left: 100%; text-indent: 0; animation: marquee 20s linear infinite; } welcome .marquee span:hover,[data-is="welcome"] .marquee span:hover{ animation-play-state: paused }', '', function(opts) {

const tag = this

tag.isFuncionarMensajero = (domElement, mensaje) => {

  let typewriter = new Typewriter(domElement);

    typewriter.deleteAll()
        .pauseFor(1000)
        .typeString(mensaje)
        .pauseFor(3000)
        .start();

}

tag.isMensajero = (domElement, mensaje) => {

  let typewriter = new Typewriter(domElement, {
        loop: true
    });

    typewriter.deleteAll()
        .pauseFor(1000)
        .deleteAll()
        .typeString('Compra rapido y facil')
        .pauseFor(3000)
        .deleteAll()
        .typeString('Descarga la app')
        .pauseFor(3000)
        .deleteAll()
        .typeString('yeahasha')
        .pauseFor(3000)
        .deleteAll()
        .start();

}

});
