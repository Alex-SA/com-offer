<template>
	<table class="table table-bordered">
	  <thead>
	    <tr>
	      <th>#</th>
	      <th>Фото</th>
	      <th>Назва</th>
	      <th>Опис</th>
	      <th>Ціна</th>
	    </tr>
	  </thead>
	  <tbody>
	    <product v-for="(product, index) in allProducts" :oneProduct="product" :numRow="index + 1">
	    </product>
	  </tbody>
</table>
</template>

<script>
  import Product from './product'
  export default {
    name: 'products',
    components: {
      'product': Product
    },
    data () {
      return {
      }
    },
    computed: {
      allProducts () {
        return this.$store.state.addedProducts
      }
    }
  }
</script>
