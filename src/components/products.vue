<template>
	<table class="table table-bordered">
	  <thead>
	    <tr>
	      <th>#</th>
	      <th>Фото</th>
	      <th>Назва</th>
	      <th>Опис</th>
	      <th>Ціна</th>
        <th>К-ть</th>
        <th>В-ть</th>
	    </tr>
	  </thead>
	  <tbody>
	    <product v-for="(product, index) in allProducts" :oneProduct="product" :numRow="index + 1">
	    </product>
      <tr>
        <td colspan="5"><strong class="float-right">Всего</strong></td>
        <td colspan="2"><strong>{{allSum}}грн.</strong></td>
      </tr>
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
      },
      allSum () {
        return this.$store.state.total_price
      }
    }
  }
</script>
