<template>
	<form @submit.prevent="onGetProduct" >
	  <div class="form-group">
	    <label for="pn">Добавить товар</label>
	      <input class="form-control" id="product" name="product" aria-describedby="productHelp" placeholder="Указать клиента"
	      v-model="product">
	      <small id="productHelp" class="form-text text-muted">
	        Укажите артикул товара, чтобы бодавить его в компредложение
	      </small>
	  </div>
	  <button type="submit" class="btn btn-outline-primary btn-sm">Добавить</button>
	</form>

</template>

<script>
  import axios from 'axios'

  export default {
    name: 'find-product',
    data () {
      return {
        product: ''
      }
    },
    methods: {
      onGetProduct () {
        axios.get('http://brandline.com.ua/cgi-bin/api.pl',
          {
            params: {
              q: 'product',
              search: this.product
            }
          })
          .then(
             response => {
               var obj = response.data.ONE
               console.log(obj)
               if (obj.cnt > 0) {
                 this.$store.state.addedProducts.push(obj)
               }
             }
           )
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>	
