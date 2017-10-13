<template>
	<form @submit.prevent="onGetClient" >
	  <div class="form-group">
	    <label for="pn">Клиент</label>
	      <input class="form-control" id="client" name="client" aria-describedby="clientHelp" placeholder="Указать клиента"
	      v-model="client">
	      <small id="clientHelp" class="form-text text-muted">
	        Укажите клиента или данные для его поиска
	      </small>
	  </div>
	  <button type="submit" class="btn btn-outline-primary btn-sm">Найти</button>
	</form>

</template>

<script>
  import axios from 'axios'

  export default {
    name: 'find-client',
    data () {
      return {
        client: ''
      }
    },
    methods: {
      onGetClient () {
        axios.get('http://brandline.com.ua/cgi-bin/api.pl',
          {
            params: {
              q: 'client',
              search: this.client
            }
          })
          .then(
             response => {
               console.log(response.data.ONE)
               var obj = response.data.ONE
               this.$store.state.clientNameStore = obj['company']
               this.$store.state.clientInfoStore = obj['adress'] + '; ' + obj['phone'] + '; ' + obj['email']
             }
           )
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>	
