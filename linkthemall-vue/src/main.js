import Vue from 'vue'
import App from './App'
import router from './router/routes.js'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
import Auth from './packages/auth/Auth.js'
import AxiosAPI from './packages/axios_api/AxiosApi.js'
import {store} from './vuex/store.js'
import solid from "@fortawesome/fontawesome-free-solid"
import Axios from 'axios'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.prototype.$http = Axios;


Vue.config.productionTip = false;

Vue.use(Auth);
Vue.use(AxiosAPI);
Vue.use(ElementUI, { locale });
Vue.use(VueResource);
Vue.use(solid);

Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.http.options.root = 'http://linkthemall.example';

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer ' + Vue.auth.getToken());
  next()
});





router.beforeEach(
  (to,from,next) => {
    if(to.matched.some(record => record.meta.forVisitors)){
      if(Vue.auth.isAuthenticated()){
        next({
          path: '/'
        })
      } else next()
    }else if(to.matched.some(record => record.meta.forAuth)){
      if(! Vue.auth.isAuthenticated()){
        next({
          path: '/login'
        })
      } else next()
    }else next()
  }
);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
