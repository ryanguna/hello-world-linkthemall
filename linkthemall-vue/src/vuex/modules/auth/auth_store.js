import state from './auth_state'
import mutations from './auth_mutations.js'
import actions from './auth_actions.js'
import getters from './auth_getters.js'

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
