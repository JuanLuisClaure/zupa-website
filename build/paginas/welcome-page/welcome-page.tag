const riot = require('riot')
import '../../componentes/onboarding/onboarding'
import dispatcher from '../../app/dispatcher'
<welcome>


<style >
.grid-container{
  display: grid;
  grid-template-rows: 1fr;
  background-color: snow;
}

.grid-container[data-medida="single"]{
  grid-template-columns:repeat(1, 1fr);
}

.estilos-prueba{
  background-color: rgba(74, 211, 215, 0.62);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;

}
.flex_item--background{
  display: inline-flex;
  flex-flow: column;
  word-wrap: break-word;
  margin: 6vh 0vw 0vw 3vw;
  width: 92.24%;
  align-items:flex-start;
}
.flex_item--background[data-color="transparente"]{
  background-color:rgba(207, 207, 208, 0.49)!important;

}


</style>
<div class="grid-container" data-medida="single">
    <div class="estilos-prueba">

    </div>
</div>

<script>

const tag = this

</script>




</welcome>
