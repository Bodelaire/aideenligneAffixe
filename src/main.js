import './firebase';
import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Vue2Editor from "vue2-editor";
import { rtdbPlugin } from 'vuefire'
import router from './router'

Vue.use( rtdbPlugin)
Vue.use(Vue2Editor);
Vue.use(Buefy)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
