const riot = require('riot')
import dispatcher from '../../app/dispatcher'


<productosDb>
<style>
  .animateBox{
	-webkit-animation: slide-bck-center 0.45s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
	        animation: slide-bck-center 0.45s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}
</style>



<div each={ x in productos }>
  <div class="col-4-xl col-4-l col-4-m animateBox">
    <div class="feature-center">

      <p>{ x.title }</p>
      <p>{ x.price }</p>

    </div>
  </div>
</div>




<script>
  this.productos = []
  this.on('mount', ()=>{
      dispatcher.trigger('read', 'Items')
      dispatcher.on('Items_returned', this.renderizar)
  })


  this.renderizar = (data) => {

    console.log(data, 'esto es productos');
    this.productos = data
    this.update()

  }


</script>






</productosDb>
