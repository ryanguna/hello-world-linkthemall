import Vue from 'vue'
export default {
    GET_CATEGORY_LIST: (state, payload) => {
        state.categoryList = payload;
    },
}
