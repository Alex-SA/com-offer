import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    clientNameStore: '2222 ХХХХХХХХХХХ     ХХХХХХХХХХХХХ ',
    clientInfoStore: '3333 вул. О. Гончара 57б, 5 поверх. (063)1763610, Anastasia.Samokysh@labour-centre.com',
    viewPanel: true,
    arNumDate: {
      'co': 'ххх/хх от ',
      'on': 'х-хх.х/ххххх от ',
      'out': 'ххх/хх от ',
      'mounted': false
    },
    addedProducts: []
  },
  getters: {
    viewPanel: state => {
      return state.viewPanel
    },
    clientName: state => {
      return state.clientNameStore
    },
    clientInfo: state => {
      return state.clientInfoStore
    },
    modifyClientName: state => {
      return state.clientNameStore.toUpperCase()
    },
    modifyClientInfo: state => {
      return state.clientInfoStore.toUpperCase()
    }
  }
})
