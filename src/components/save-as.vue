<template>
	<form @submit.prevent="onSave" >
	  <div class="form-group">
	    <label for="save">Сохранить как</label>
	      <input class="form-control" id="save" name="save" aria-describedby="clientHelp" placeholder="Указать название"
	      v-model="save">
	      <small id="clientHelp" class="form-text text-muted">
	        Укажите название этого предложения
	      </small>
	  </div>
	  <button type="submit" class="btn btn-outline-primary btn-sm">Сохранить</button>
	</form>		
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'save-as',
    data () {
      return {
        save: '',
        json_data: {}
      }
    },
    methods: {
      onSave () {
        var myArr = this.$store.state.addedProducts
        var productsPID = myArr.map(function (name) {
          return {'pid': name.pid, 'cnt': name.cnt}
        })
        this.json_data = {
          'NumDate': this.$store.state.arNumDate,
          'clientNameStore': this.$store.state.clientNameStore,
          'clientInfoStore': this.$store.state.clientInfoStore,
          'addedText': this.$store.state.addedText,
          'pid': productsPID
        }
        console.log(this.json_data)

        axios.post('http://brandline.com.ua/cgi-bin/api.pl',
          {
            params: {
              q: 'save',
              name: this.save,
              data: this.json_data
            }
          })
          .then(
             response => {
               console.log(response.data)
               alert('Уже в базе!')
             }
           )
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>  