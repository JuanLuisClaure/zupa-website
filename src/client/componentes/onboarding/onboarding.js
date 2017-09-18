const riot = require('riot')
import dispatcher from '../../app/dispatcher'
riot.tag2('onboarding', '<div class="flexContainer flexCenter itemCenter fullHeight centerImage"> <div class="flexContainer header "> <p>hola</p> </div> <div class="flexContainer flexCenter itemCenter fullHeight"> <a href="/#/conoces?" class="homeButton">Return Home</a> </div> <div class="flexContainer footer "> <p>adios!</p> </div> </div>', 'onboarding .flexi-container,[data-is="onboarding"] .flexi-container{ display: flex; flex-direction:column; height: 100%; } onboarding .header,[data-is="onboarding"] .header{ background-color: red; } onboarding .footer,[data-is="onboarding"] .footer{ background-color: green; } onboarding .flexContainer,[data-is="onboarding"] .flexContainer{ display: flex; flex-direction:column; } onboarding .flexCenter,[data-is="onboarding"] .flexCenter{ justify-content: center; } onboarding .fullHeight,[data-is="onboarding"] .fullHeight{ height: 100vh; } onboarding .itemCenter,[data-is="onboarding"] .itemCenter{ align-items: center; } onboarding .centerImage,[data-is="onboarding"] .centerImage{ background: url(\'./client/assets/img/backThree.jpg\') center; background-size: cover; }', '', function(opts) {
this.entrarWeb = () => {
    this.parent.abrirEstar()
    let data = 'Entrando a la website yeah'
    dispatcher.trigger('crear_toast', data)
}

});
