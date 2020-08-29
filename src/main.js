import './assets/css/main.css'
import Vue from 'vue'
import store from './vuex/store.js'
import Vant from 'vant';
import 'lib-flexible/flexible'
import 'vant/lib/index.css';
import axios from 'axios';
// import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/router.js'
import Vconsole from 'vconsole';

// Vue.config.productionTip = false
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// http request 拦截器
axios.interceptors.request.use(config=>{
  Vue.prototype.$IsLoadding = true
 return config;
 },err=>{
   return Promise.reject(err);
 })

// http response 拦截器
axios.interceptors.response.use(response => {
    Vue.prototype.$IsLoadding = false
    //拦截响应，做统一处理 
    if (response.data.code == 401 || response.data.status == 401){
        console.log("当前路由地址：",router.currentRoute.fullPath)
      //这里处理未登陆访问接口时，跳转到登陆界面
        // router.push({
        //   path: '/login',
        //   query: {redirect: router.currentRoute.fullPath}
        // })
    }else {
      return response.data;
    }
  },
  //接口错误状态处理，也就是说无响应时的处理
  error => {
    return Promise.reject(error.response) // 返回接口返回的错误信息
  })

Vue.use(VueRouter)
Vue.use(axios)
Vue.use(Vant)
Vue.use(new Vconsole())

router.beforeEach((to, from, next) => {
  console.log('--router to', to.fullPath)
  next()
})

new Vue({
  router,
  store,
  render: h => h('router-view')
}).$mount('#app')
