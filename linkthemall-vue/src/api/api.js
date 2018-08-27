import axios from 'axios';
import Vue from 'vue';

let axiosTesiBaseURL = 'http://tesi-inventory.example';

export default {
  getInventoryItems : params => {
    return new Promise((resolve, reject) => {

      axios.get(`${axiosTesiBaseURL}/api/inventory_item`, {
        headers: {
          Authorization: 'Bearer ' + Vue.auth.getTesiToken()
        }
      }).then(response => resolve(response))
        .catch(error => reject(error));

    });
  }
};




