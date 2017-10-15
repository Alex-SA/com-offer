<template>
	<div>
		<label for="course">Курсы валют</label>
		<div class="form-group row">
	    	<label for="inputPassword" class="col-sm-4 col-form-label">EUR: </label>
	    	<div class="col-sm-8">
				<input class="form-control" name="eur" v-model="eur" @change="changeEUR">
	    	</div>
	  	</div>
		<div class="form-group row">
	    	<label for="inputPassword" class="col-sm-4 col-form-label">USD: </label>
	    	<div class="col-sm-8">
				<input class="form-control" name="usd" v-model="usd" @change="changeUSD">
	    	</div>
		</div>
	</div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'course',
    data () {
      return {
        eur: this.$store.state.course_eur,
        usd: this.$store.state.course_usd
      }
    },
    mounted: function () {
      this.GetCourses()
    },
    computed: {
    },
    methods: {
      GetCourses () {
        var self = this
        axios.get('https://api.privatbank.ua/p24api/pubinfo',
          {
            params: {
              coursid: 5,
              json: '',
              exchange: ''
            }
          })
          .then(
             response => {
               var obj = response.data
               obj.forEach(function (element) {
                 if (element.ccy === 'EUR') {
                   self.$store.state.course_eur = element.sale
                   self.eur = element.sale
                 }
                 if (element.ccy === 'USD') {
                   self.$store.state.course_usd = element.sale
                   self.usd = element.sale
                 }
               })
             }
           )
          .catch(function (error) {
            console.log(error)
          })
      },
      changeEUR () {
        this.$store.state.course_eur = this.eur
        var self = this
        this.$store.state.addedProducts.forEach(function (item, i, arr) {
          if (item.currency === 'EURO') {
            item.uah = item.price3 * self.eur
            item.showPrice = item.uah + 'грн. (' + item.price3 + 'EUR)'
            self.$store.state.total_price = self.$store.state.addedProducts.reduce(function (sum, current) {
              return sum + parseInt(current.uah) * current.cnt
            }, 0)
          }
          // console.log(item)
        })
      },
      changeUSD () {
        this.$store.state.course_usd = this.usd
        var self = this
        this.$store.state.addedProducts.forEach(function (item, i, arr) {
          if (item.currency === '') {
            item.uah = Math.round(item.price3 * self.usd)
            item.showPrice = item.uah + 'грн. (' + item.price3 + 'USD)'
            self.$store.state.total_price = self.$store.state.addedProducts.reduce(function (sum, current) {
              return sum + parseInt(current.uah) * current.cnt
            }, 0)
          }
        })
      }
    }
  }
</script>
