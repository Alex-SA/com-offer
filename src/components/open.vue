<template>
  <div class="form-group">
    <label for="pn">Загрузить</label>
      <select type="" class="form-control" id="offers" name="offers" 
        aria-describedby="offersHelp" placeholder="Выбрать предложение"
        v-model="offer"
        @change="onSelectOffer"
      >
        <option v-for="item in offers" :name="item.id">{{item.name}}</option>
      </select>
      <small id="offersHelp" class="form-text text-muted">
        Выберете предложение для загрузки
      </small>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'open',
    data () {
      return {
        // offers: [],
        offer: 0
      }
    },
    computed: {
      offers () {
        return this.$store.state.offers
      }
    },
    mounted: function () {
      this.GetOffers()
    },
    methods: {
      GetOffers () {
        axios.get('http://brandline.com.ua/cgi-bin/api.pl',
          {
            params: {
              q: 'select',
              id: 0
            }
          })
          .then(
             response => {
               console.log(response.data.ONE.select)
               // this.offers = response.data.ONE.select
               this.$store.state.offers = response.data.ONE.select
             }
           )
          .catch(function (error) {
            console.log(error)
          })
      },
      onSelectOffer () {
        axios.get('http://brandline.com.ua/cgi-bin/api.pl',
          {
            params: {
              q: 'select',
              search: this.offer
            }
          })
          .then(
             response => {
               var $ = window.jQuery = require('jquery')
               var obj = response.data.ONE.data
               console.log(obj)
               this.$store.state.addedProducts = []
               this.$store.state.total_price = 0
               this.$store.state.addedText = obj.addedText
               this.$store.state.clientNameStore = obj.clientNameStore
               this.$store.state.clientInfoStore = obj.clientInfoStore
               this.$store.state.arNumDate['co'] = obj.NumDate.co
               this.$store.state.arNumDate['out'] = obj.NumDate.out
               this.$store.state.arNumDate['on'] = obj.NumDate.on
               this.$store.state.arNumDate['boss'] = obj.NumDate.boss
               this.$store.state.arNumDate['sign'] = obj.NumDate.sign
               this.$store.state.arNumDate['manager'] = obj.NumDate.manager
               this.$store.state.arNumDate['contacts'] = obj.NumDate.contacts
               var self = this
               obj.pid.forEach(function (element) {
                 if (element.pid) {
                   console.log(element.pid)
                   for (var i = 1; i <= element.cnt; i++) {
                     self.$store.state.loadProductPid = element.pid
                     $('#inputProductsPid').val(element.pid)
                     $('#addProductToOffer').trigger('click')
                     self.$store.state.loadProductPid = 0
                   }
                 }
               })
             }
           )
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>	
