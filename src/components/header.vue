<template>
  <div class="row">
    <div class="col-8">
      <span class="float-left">
        <h2>Группа компаний «БРЕНД-ЛАЙН»</h2>
      </span>
      <h6>
        <span class="float-left">
            Украина, 04655 Киев, ул Черноморская 1
        </span>
            <br>
        <span class="float-left">
            Многоканальные телефоны: (044) 331-7-331 (044) 332-7-332
        </span>
            <br>
        <span class="float-left">
            Телефон-факс (044) 507-22-24
        </span>
            <br>
        <span class="float-left">
            Мобильный телефон (096) 332-7-332 (Киевстар)
        </span>
      </h6>
    </div>
    <div class="col-1" @click="showViewPanel">
      <img src="http://brandline.com.ua/images/brandline_logo.jpg">
    </div>
  </div>    
</template>

<script>
  export default {
    name: 'app-header',
    data () {
      return {

      }
    },
    methods: {
      showViewPanel () {
        this.$store.state.viewPanel = !this.$store.state.viewPanel
      }
    }
  }
</script>
