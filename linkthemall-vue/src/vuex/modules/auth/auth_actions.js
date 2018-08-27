import Vue from 'vue'

export default {
    getCategoryList: ({commit}) => {
        Vue.http.get('api/category')
            .then(response => {
                commit('GET_CATEGORY_LIST', response.body.data);
            });
    }
}
