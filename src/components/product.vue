<template>
	<tr>
	  <th scope="row">
      {{ numRow }}
      <span @click="delItem(oneProduct['pid'])">
        <icon name="times" color="red" v-if="viewDel"></icon>
      </span>
    </th>
	  <td><img :src="'http://brandline.com.ua' + oneProduct['small_pic']" 
              style="max-width: 150px; max-height: 150px;" 
              class="rounded">
    </td>
	  <td>{{ oneProduct['title'] }}</td>
	  <td align="left" style="font-size: 0.6em;">{{ oneProduct['smalltext'] }}</td>
	  <td>{{ oneProduct['showPrice'] }} {{ oneProduct['currency'] }}</td>
    <td>{{ oneProduct['cnt'] }}</td>
    <td>{{ oneProduct['cnt'] * oneProduct['uah'] }} грн.</td>
	</tr>
</template>

<script>
  import Vue from 'vue'
  import 'vue-awesome/icons/flag'
  import 'vue-awesome/icons'
  import Icon from 'vue-awesome/components/Icon'
  Vue.component('icon', Icon)
  
  export default {
    name: 'product',
    components: {
      Icon
    },
    props: {
      oneProduct: '',
      numRow: 0
    },
    data () {
      return {
      }
    },
    computed: {
      viewDel () {
        return this.$store.state.viewDelProduct
      }
    },
    methods: {
      delItem (id) {
        if (confirm('Подтвердите удаление')) {
          this.$store.state.addedProducts = this.$store.state.addedProducts.filter(function (obj) {
            return obj.pid !== id
          })
          this.$store.state.total_price = this.$store.state.addedProducts.reduce(function (sum, current) {
            return sum + parseInt(current.uah)
          }, 0)
          console.log(this.$store.state.total_price)
        }
      }
    }
  }
</script>

<style scoped>
  span:hover {
    cursor:pointer;
  }
    
</style>