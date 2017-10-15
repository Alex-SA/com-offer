<template>
  <div class="row">
    <div class="col">
      <strong class="float-left">Поставщик:</strong>
      <br><span class="float-left">Генеральный директор</span>
      <br><span class="float-left">Группы компаний "Бренд-Лайн"</span>
      <br><span class="float-left hf08">
        <num-date inNumDate="sign" :fromFooter="true"></num-date> / <num-date inNumDate="boss" :fromFooter="true"></num-date>
      </span>
    </div>
    <div class="col">
      <br><span class="float-right">
        Отвественный менеджер: 
        <span class=" hf08">
          <num-date inNumDate="manager" :fromFooter="true"></num-date>
        </span>
      </span>
      <br><span class="float-right">Контакты: 
        <span class=" hf08">
          <num-date inNumDate="contacts" :fromFooter="true"></num-date></span>
        </span>
    </div>
    <br><br>
  </div>    
</template>

<script>
  import NumDate from './num-date'

  export default {
    name: 'app-footer',
    components: {
      'num-date': NumDate
    },
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  span.hf08 {
    font-size: 0.8em;
    text-decoration: underline;
  }
  
</style>