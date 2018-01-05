import 'static/css/bootstrap.min.css';
import 'static/css/bootstrap-reset.css';
import 'static/assets/font-awesome/css/font-awesome.css';
import 'static/css/style.css';
import 'static/css/style-responsive.css';
import 'static/css/jquery.mloading.css';
import 'static/jstree/themes/default/style.min.css';
import 'static/css/bootstrap-datetimepicker.min.css';
import Vue from 'vue'
import router from './router'
//import axios from 'axios'
Vue.config.productionTip = false
console.log($, '=========',axios);
/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})*/
new Vue({
  router
}).$mount('#app');
