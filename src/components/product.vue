<template>
	<tr>
	  <th scope="row">{{ numRow }}</th>
	  <td><img :src="'http://brandline.com.ua' + oneProduct['small_pic']" 
              style="max-width: 150px; max-height: 150px;" 
              class="rounded">
    </td>
	  <td>{{ oneProduct['title'] }}</td>
	  <td><small>{{ oneProduct['smalltext'] }}</small></td>
	  <td>{{ oneProduct['price3'] }} {{ oneProduct['currency'] }}</td>
	</tr>
</template>

<script>
  export default {
    name: 'product',
    props: {
      oneProduct: '',
      numRow: 0
    },
    data () {
      return {
      }
    }
  }
</script>
