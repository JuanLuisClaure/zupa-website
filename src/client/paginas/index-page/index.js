const riot = require('riot')
import '../../componentes/nav-header/nav-header'
import '../../componentes/nav-footer/nav-footer'
import '../../componentes/review/review'
import '../../componentes/feactures/feactures'
import '../../componentes/headroom/headroom'
import '../../componentes/abrir-modal/abrir-modal'
import '../../componentes/tabs-feactures/tabs-feactures'
import '../../componentes/footer/footer'
import '../../componentes/store-form/store-form'




riot.tag2('index', '<navheader></navHeader> <headroom></headroom> <div id="main"> <div class="container"> <h1 id="idUno"> este el id Uno</h1> <tabsfeactures></tabsfeactures> </div> </div> <review></review> <div id="get-started" style="background:#e96262;"> <div class="container"> <abrir-modal></abrir-modal> </div> </div> <infofooter></infoFooter> <navfooter></navFooter>', '', '', function(opts) {
});
