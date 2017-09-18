const riot = require('riot')
import dispatcher from '../../app/dispatcher'
<onscroll>

  <yield/>

     <script>


     this.on('before-mount',function() {
       window.addEventListener('scroll',this.handleScroll, {passive: true} );
       window.addEventListener('resize',this.handleScroll, {passive: true} );
       this.inviewport = this.inViewport();
       this.prevPos = this.pos;
       return this.update();
     });

     this.on('unmount',function() {
       window.removeEventListener('scroll',this.handleScroll, {passive: true} );
       return window.removeEventListener('resize',this.handleScroll, {passive: true} );
     });


    this.handleScroll = e=> {
       let newval = this.inViewport();
       this.diff = this.calcDiff();
       if (newval !== this.inviewport || this.diff>5) {
         this.prevPos = this.pos;
         this.inviewport = newval;
         return this.update();
       }
     };

    this.calcDiff = () => {
       if (!this.prevPos) { return 0; }
       return Math.abs(this.pos.top-this.prevPos.top)+
       Math.abs(this.pos.left-this.prevPos.left)+
       Math.abs(this.pos.right-this.prevPos.right)+
       Math.abs(this.pos.bottom-this.prevPos.bottom);
     };

     this.inViewport = () => {
       let pos = this.root.getBoundingClientRect();
       let winheight = (window.innerHeight || document.documentElement.clientHeight);
       let winwidth = (window.innerWidth || document.documentElement.clientWidth);
       this.pos = {
         top:pos.top,
         left:pos.left,
         right:winwidth-pos.right,
         bottom:winheight-pos.bottom
       };
       return pos.bottom >= 0 && pos.right >= 0 && pos.top <= winheight && pos.left <= winwidth;
     };


     this.abierto = false
     this.abrirSideBar = () => {
       if (this.abierto === false) {
         this.abierto = true
       }else{
         this.abierto = false
       }
     }
     const isMobile = {
         getUserAgent: () => {
             return navigator.userAgent;
         },
         Android: function() {
             return /Android/i.test(isMobile.getUserAgent()) && !isMobile.Windows();
         },
         BlackBerry: function() {
             return /BlackBerry|BB10|PlayBook/i.test(isMobile.getUserAgent());;
         },
         iPhone: function() {
             return /iPhone/i.test(isMobile.getUserAgent()) && !isMobile.iPad() && !isMobile.Windows();
         },
         iPod: function() {
             return /iPod/i.test(isMobile.getUserAgent());
         },
         iPad: function() {
             return /iPad/i.test(isMobile.getUserAgent());
         },
         iOS: function() {
             return (isMobile.iPad() || isMobile.iPod() || isMobile.iPhone());
         },
         Opera: function() {
             return /Opera Mini/i.test(isMobile.getUserAgent());
         },
         Windows: function() {
             return /Windows Phone|IEMobile|WPDesktop/i.test(isMobile.getUserAgent());
         },
         KindleFire: function() {
             return /Kindle Fire|Silk|KFAPWA|KFSOWI|KFJWA|KFJWI|KFAPWI|KFAPWI|KFOT|KFTT|KFTHWI|KFTHWA|KFASWI|KFTBWI|KFMEWI|KFFOWI|KFSAWA|KFSAWI|KFARWI/i.test(isMobile.getUserAgent());
         },
         any: function() {
             return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
         }
     }



     this.descargarApp = (e) => {

        if (isMobile.any()) {
          console.log('es web')
          let data = 'un mensaje beelo y conmovedor'
          dispatcher.trigger('crear_toast', data)

        }else if (isMobile.iOS()) {
          console.log('es iOS');

        }else if (isMobile.Android()) {
          console.log('Es android');

        }
      }

  </script>

</onscroll>
