/*
 * @Author: haoxiaojun
 * @Date: 2019-06-18 20:28:13
 * @Details:  插件集合
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2019-07-05 16:10:49
 */
import globalComponents from './globalComponents'
import globalLang from './globalLang'
import globalPlugins from './globalPlugins'
export default function (Vue, Options) {
  Vue.use(globalComponents)
  Vue.use(globalLang, Options)
  Vue.use(globalPlugins)
}
