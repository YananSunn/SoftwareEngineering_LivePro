import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import router from './router.js'
import VueCodeMirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import VueCookie from 'vue-cookie';
import VueSession from 'vue-session';
import axios from 'axios';
import io from 'socket.io-client'
import '../my_theme/index.less';

Vue.use(iView);
Vue.use(VueCookie);
Vue.use(VueSession);
Vue.use(VueCodeMirror);

Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
Vue.prototype.$socket=io();
Vue.prototype.$socketReconnect=(url)=>{
    Vue.prototype.$socket=io.connect(url);
    Vue.prototype.$socket.on("news",(data)=>{
    console.log(data);
    })
    Vue.prototype.$socket.on("test msg",(data)=>{
    console.log(data);
    })
}

axios.defaults.withCredentials = true;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
