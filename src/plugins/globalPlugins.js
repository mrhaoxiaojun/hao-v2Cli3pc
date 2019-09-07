/*
 * @Author: haoxiaojun
 * @Date: 2019-07-05 16:01:27
 * @Details:  其他插件
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2019-08-05 14:03:55
 */
// import echarts from 'echarts'
import api from '@/fetch/api'
// import '@/assets/iconfont/iconfont.css'
// import '@/assets/iconfont/iconfont.js'
export default function (Vue) {
  // Vue.use(echarts)
  // Vue.prototype.$echarts = echarts
  Vue.prototype.$api = api
}
