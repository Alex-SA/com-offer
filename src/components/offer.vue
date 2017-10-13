<template>
  <div>
      <div class="container">
        <div class="row">
          <div class="col-9" style="border-style: dotted; padding: 50px; border-radius: 20px;">  
            <app-header></app-header>
            <div class="row">
              <div class="col">
                <hr style="height: 2px; background-color:red;">
              </div>
            </div>
            <div class="row">
              <div class="col-5">
                <span class="float-left">
                  Исх. № 
                  <num-date inNumDate="out"></num-date>
                </span>
                <br>
                <span class="float-left">
                  На № 
                  <num-date inNumDate="on"></num-date>
                </span>
              </div>
              <div class="col">
                <strong class="float-right">Коммерческое предложение № 
                  <num-date inNumDate="co"></num-date>
                </strong>
                <br>
                <span class="float-right">
                  на поставку оборудования
                </span>  
              </div>
            </div>
            
            <div class="row" style="padding-top: 25px; padding-bottom: 25px;">
              <div style="width:100%">
                <span class="float-right hf14" >
                  <strong>{{clientName}}</strong>
                </span>
              </div>  
              <div style="width:100%">
                <span class="float-right hf08" >
                  {{ clientInfo }} 
                </span>                
              </div>  
            </div>
            <div class="row">
                <products></products>
            </div>
            <app-footer></app-footer>
          </div>
          <div class="col-1">
          </div>
          <div class="col-2" style ='background-color: #eeeeee;' v-if="viewPanel">
              <div class="row" style="padding: 5px;">
                <h6>Панель сборки</h6>
                <find-client></find-client>              
                <hr>
                <find-product></find-product>
            </div>
          </div>
        </div>
      </div>

  </div>
</template>

<script>

import {mapGetters} from 'vuex'
import FindClient from './find-client'
import FindProduct from './find-product'
import NumDate from './num-date'
import Header from './header'
import Footer from './footer'
import Products from './products'

export default {
  name: 'offer',
  components: {
    'find-client': FindClient,
    'find-product': FindProduct,
    'num-date': NumDate,
    'app-header': Header,
    'app-footer': Footer,
    'products': Products
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'modifyClientName',
      'modifyClientInfo',
      'clientName',
      'clientInfo',
      'viewPanel'

    ]),
    products () {
      return this.$store.state.addedProducts
    },
    clientNameUc () {
      return this.$store.getters.modifyClientName
    }
  }
}
</script>

<style>

</style>

<style scoped>
  span.hf14 {
    font-size: 1.4em;
  }
  span.hf08 {
    font-size: 0.8em;
  }
  
</style>