// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App";
import router from "./router";
import { VueMaskDirective } from "v-mask";
//import firebase from "firebase"
Vue.directive("mask", VueMaskDirective);

Vue.config.productionTip = false;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* var firebaseConfig = {
    apiKey: "AIzaSyAioqc15Qb7eTq5YPgKmzn_QOKHGIBzHYY",
    authDomain: "app-memory-cbd72.firebaseapp.com",
    databaseURL: "https://app-memory-cbd72-default-rtdb.firebaseio.com",
    projectId: "app-memory-cbd72",
    storageBucket: "app-memory-cbd72.appspot.com",
    messagingSenderId: "197222963130",
    appId: "1:197222963130:web:591d7fdfeba4a13162af83",
    measurementId: "G-CV4F4LTP65"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();  */

/* eslint-disable no-new */
let app = "";
//firebase.auth().onAuthStateChanged(() => {
// if (!app) {

app = new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
//}
//})
