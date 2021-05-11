import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './assets/scss/main.scss';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import VueTheMask from 'vue-the-mask'
import Loader from '@/components/Loader'
import VueSocialSharing from 'vue-social-sharing'
import Clipboard from 'v-clipboard'
//import Moment from 'moment'
//import moment from 'moment-timezone'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import {func} from '@/func.js'

Vue.use(BootstrapVue)
Vue.use(VueTheMask);
Vue.use(VueToast, { duration: 2600, dismissible: true, position: 'bottom-right' });
Vue.use(VueSweetalert2);
Vue.use(VueSocialSharing);
Vue.use(Clipboard);
//moment.tz.setDefault('America/Sao_Paulo');
//Vue.use(Moment);
Vue.component('loader', Loader);
Vue.prototype.$func = func;

Vue.config.productionTip = false

Vue.prototype.$http = axios;
const token = sessionStorage.getItem('token');
//const ApiURL = 'http://localhost:8000/api';
const ApiURL = 'https://indicape.meuprecon.com.br/api';

if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] =
    'Bearer ' + token;

  axios
    .get(ApiURL + `/me`)
    .then(response => {
      store.commit('setUsuario', response.data.usuario);

    })
    .catch(error => {
      sessionStorage.clear();
      store.commit('setToken', '');
      store.commit('setUsuario', '');
      router.push('/login');
    });
}
Vue.prototype.$urlAPI = ApiURL;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
