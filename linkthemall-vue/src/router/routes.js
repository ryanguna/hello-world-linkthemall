import Vue from 'vue'
import Router from 'vue-router'
import Login from '@components/authentication/Login.vue'
import Signup from '@components/authentication/Signup.vue'
import ResetAccount from '@components/authentication/ResetAccount.vue'
import SocialLogin from '@components/authentication/SocialLogin.vue'
import PasswordReset from '@components/authentication/PasswordReset.vue'


import Index from '@components/Index.vue'


Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active", // active class for *exact* links.
  mode: 'history',
  routes: [
    {
      path: "/",
      component: Index,
      meta: {
        forAuth : true
      }
    },
    {
      path: "/login",
      component: Login,
      meta: {
        forVisitors : true
      }
    },
    {
      path: "/signup",
      component: Signup,
      meta: {
        forVisitors : true
      }
    },
    {
      path: "/account/begin_password_reset",
      component: PasswordReset,
      meta: {
        forVisitors : true
      }
    },
    {
      path: "/resetAccount",
      component: ResetAccount,
      meta: {
        forVisitors : true
      }
    },
    {
       path: "/auth/googleLoginCallback",
       component: SocialLogin,
       meta: {
           forVisitors : true
       }
    }


  ]
})
