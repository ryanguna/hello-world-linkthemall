/**
 * Created by Admin on 8/25/2017.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import authModule from '@vuex/modules/auth/auth_store.js'


Vue.use(Vuex);

/*

When accessing namespace modules outside of the vuex store.

Actions

this.$store.dispatch('example/exampleAction');

MUTATIONS
this.$store.commit('example/EXAMPLE_MUTATIONS');

State
this.$store.state.example.exampleState;

 */

export const store = new Vuex.Store({
    modules: {
      'auth' : authModule,
    }
});

