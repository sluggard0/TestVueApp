import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import Highcharts from "highcharts";
import Stock from "highcharts/modules/stock";
import HighchartsVue from "highcharts-vue";

import DatetimePicker from "vuetify-datetime-picker"
import 'vuetify-datetime-picker/src/stylus/main.styl'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    items: [],
  },
  mutations: {
    increment (state) {
      state.count++
    },

    SET_POSTS(state, items) {
      state.items = items
    }
  },
  actions: {
    getData({ commit }) {
      axios
          .get('https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10')
          .then(response => {
            commit('SET_POSTS', response.data)})
          .catch(error => {
            console.log(error)
          });
    }
  },
})

Vue.use(DatetimePicker)
Stock(Highcharts);
Vue.use(HighchartsVue);
Vue.use(Vuetify);

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')
