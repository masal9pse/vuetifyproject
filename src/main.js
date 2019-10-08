import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false;

//Initialize Firebase
const config = {
  apiKey: "AIzaSyC2iXgItUN3maIhRvq-fx7cacuSC6A69EE",
  authDomain: "my-address-pj2-56e59.firebaseapp.com",
  databaseURL: "https://my-address-pj2-56e59.firebaseio.com",
  projectId: "my-address-pj2-56e59",
  storageBucket: "",
  messagingSenderId: "828590639649",
  appId: "1:828590639649:web:c0ddb65e3d2269a8d33160",
  measurementId: "G-P8GJ5JZ04N"
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
