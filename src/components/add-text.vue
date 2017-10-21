<template>
  <div style="width:100%">              
    <span class="float-left hf08" v-if="viewText"> 
      <textarea 
      	rows="5"
      	v-if="editTextArea" 
      	ref="numdate"
      	name="addingText" 
      	id="addingText" 
      	style="width:100%;"
      	v-on:keyup.esc="pressEsc"
      	v-on:blur="changeText()"
      	v-model="editAddingText"
      >{{editAddingText}}</textarea>
      <span class="float-left" @click="editAddText" v-if="!editText" v-html="addingText"></span>
  	</span>
  </div>                

</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'add-text',
    data () {
      return {
        editAddingText: this.$store.state.addedText,
        editText: false
      }
    },
    computed: {
      viewText () {
        return this.$store.state.viewAddText
      },
      editTextArea () {
        return this.editText
      },
      addingText () {
        return this.$store.state.addedText
      }
    },
    methods: {
      changeText () {
        this.$store.state.addedText = this.editAddingText
        // this.addingText = this.editAddingText
        this.editText = !this.editText
      },
      pressEsc () {
        this.setUnFocus(this)
      },
      setFocus: function (self) {
        Vue.nextTick(function () {
          self.$refs.numdate.focus()
        })
      },
      setUnFocus: function (self) {
        Vue.nextTick(function () {
          self.$refs.numdate.blur()
        })
      },
      editAddText () {
        this.editAddingText = this.addingText
        this.editText = !this.editText
        this.setFocus(this)
      }
    }
  }
</script>

<style scoped>
  span.hf08 {
    font-size: 0.8em;
    width:100%;
    padding: 15px;
  }
  
</style>
