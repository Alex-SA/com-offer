<template>
	<form @submit.prevent="onGetProduct" >
	  <div class="form-group">
	    <label for="pn">Добавить товар</label>
	      <input class="form-control" id="inputProductsPid" name="product" aria-describedby="productHelp" placeholder="Указать код"
	      v-model="product">
	      <small id="productHelp" class="form-text text-muted">
	        Укажите артикул товара, чтобы бодавить его в компредложение
	      </small>
	  </div>
	  <button type="submit" id="addProductToOffer" class="btn btn-outline-primary btn-sm">Добавить</button>
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
        if (this.$store.state.loadProductPid > 0) {
          this.product = this.$store.state.loadProductPid
        }
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
                 var myArr = this.$store.state.addedProducts
                 var indexOfProduct = myArr.findIndex(x => x.pid === obj.pid)
                 if (indexOfProduct >= 0) {
                   this.$store.state.addedProducts[indexOfProduct].cnt += 1
                   this.$store.state.total_price += parseInt(this.$store.state.addedProducts[indexOfProduct].uah)
                 } else {
                   if (obj.currency === '') {
                     obj.uah = Math.round(obj.price3 * this.$store.state.course_usd)
                     obj.showPrice = obj.uah
                     obj.showPrice = obj.showPrice + 'грн. (' + obj.price3 + '$)'
                   } else if (obj.currency === 'EURO') {
                     obj.uah = Math.round(obj.price3 * this.$store.state.course_eur)
                     obj.showPrice = obj.uah
                     obj.showPrice = obj.showPrice + 'грн. (' + obj.price3 + 'EUR)'
                     // obj.currency = ''
                   } else if (obj.currency === 'UAH') {
                     obj.showPrice = obj.price3
                     obj.uah = obj.price3
                     obj.currency = 'грн.'
                   }
                   obj.cnt = 1
                   this.$store.state.total_price += parseInt(obj.uah)
                   this.$store.state.addedProducts.push(obj)
                 }
                 console.log(this.$store.state.total_price)
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
