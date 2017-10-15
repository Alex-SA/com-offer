<template>
  <div class="form-group">
    <label for="pn">Загрузить</label>
      <select type="" class="form-control" id="offers" name="offers" 
        aria-describedby="offersHelp" placeholder="Выбрать предложение"
        v-model="offer"
        @change="onSelectOffer"
      >
        <option v-for="item in offers" name="item.id">{{item.name}}</option>
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
        offers: [],
        offer: 0
      }
    },
    mounted: function () {
      this.GetOffers()
    },
    methods: {
      GetOffers () {
        this.offers = [
          {
            id: 1,
            name: 'One'
          },
          {
            id: 2,
            name: 'Two'
          }
        ]
        // axios.get('http://brandline.com.ua/cgi-bin/api.pl',
        //   {
        //     params: {
        //       q: 'select',
        //       id: 0
        //     }
        //   })
        //   .then(
        //      response => {
        //        this.offers = response.data.ONE
        //        console.log(this.offers)
        //      }
        //    )
        //   .catch(function (error) {
        //     console.log(error)
        //   })
      },
      onSelectOffer () {
        axios.get('http://brandline.com.ua/cgi-bin/api.pl',
          {
            params: {
              q: 'select',
              id: this.offer
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
