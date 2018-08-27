/**
 * Created by Admin on 8/24/2017.
 */

import api from '@/api/api.js'

export default function (Vue) {
  Vue.axiosApi = api;
  Object.defineProperties(Vue.prototype, {
    $axiosApi :  {
      get: () => {
        return Vue.axiosApi
      }
    }
  })


}
