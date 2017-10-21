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
               var obj = response.data.ONE
               console.log(obj)
               // this.$store.state.clientNameStore = obj['company']
               // this.$store.state.clientInfoStore = obj['adress'] + '; ' + obj['phone'] + '; ' + obj['email']
             }
           )
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>	
