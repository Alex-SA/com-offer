<template>
  <span>
    <input 
      type="text" 
      ref="numdate"
      v-model="NumDate" 
      v-if="editNumDate" 
      v-on:keyup.13="onFinishEdit"
      v-on:keyup.esc="onFinishEdit"
      v-on:blur="onFinishEdit"
    >
    
    <span       
      v-on:click="NumDateEdit()"
      v-if="!editNumDate"
    > 
      {{spanNumDate}} 
    </span>
  </span>
</template>

<script>
  import Vue from 'vue'
  import moment from 'moment-with-locales-es6'

  export default {
    name: 'num-date',
    props: {
      inNumDate: '',
      fromFooter: false
    },
    mounted: function () {
      if (!this.$store.state.arNumDate['mounted'] && !this.fromFooter) {
        this.$nextTick(function () {
          this.formatDate()
          this.NumDate += this.formatDay
          this.$store.state.arNumDate['mounted'] = true
          this.$store.state.arNumDate[this.inNumDate] = this.NumDate
        })
      }
    },
    data () {
      return {
        editNumDate: false,
        NumDate: this.$store.state.arNumDate[this.inNumDate]
      }
    },
    computed: {
      spanNumDate () {
        return this.$store.state.arNumDate[this.inNumDate]
      }
    },
    methods: {
      formatDate: function () {
        moment.locale('uk')
        this.formatDay = moment().format('l')
      },
      NumDateEdit: function () {
        this.NumDate = this.spanNumDate
        this.editNumDate = true
        this.setFocus(this)
      },
      setFocus: function (self) {
        Vue.nextTick(function () {
          self.$refs.numdate.focus()
        })
      },
      onFinishEdit () {
        this.editNumDate = false
        if (!this.NumDate.trim()) {
          this.NumDate = this.$store.state.arNumDate[this.inNumDate]
        }
        this.$store.state.arNumDate[this.inNumDate] = this.NumDate
      }
    }
  }
</script>	
