import 'static/css/bootstrap.min.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'static/css/bootstrap-reset.css';
import 'static/assets/font-awesome/css/font-awesome.css';
import 'static/css/style.css';
import 'static/css/style-responsive.css';
import 'static/css/jquery.mloading.css';
import 'static/jstree/themes/default/style.min.css';
import 'static/css/bootstrap-datetimepicker.min.css';
require('bootstrap');
require('mloading'); // 加载图
import Vue from 'vue'
import router from './router'
Vue.config.productionTip = false

Vue.prototype.$axios = axios
axios.defaults.withCredentials=true; 

import ElementUI from 'element-ui';
//import { Message,MessageBox } from 'element-ui';
Vue.use(ElementUI);
$("body").mLoading("hide");

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    console.log(config);
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    console.log(error);
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    console.log(response)
    $("body").mLoading("hide");
    $('#list-content').mLoading("hide");
    // 对响应数据做点什么
    return response;
}, function (error) {
    console.log(error);
    // 对响应错误做点什么
    return Promise.reject(error);
});


/*new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})*/
new Vue({
  router
}).$mount('#app');
