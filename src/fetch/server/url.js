/*
 * @Author: haoxiaojun
 * @Date: 2019-06-17 19:33:03
 * @Details:  站点内所有接口请求均在此统一维护，防止覆盖、冗余
 * @Last Modified by: haoxiaojun
 * @Last Modified time: 2019-08-12 15:46:55
 */

let domain1001 = process.env.NODE_ENV !== 'production' ? '/api1001' : ''

// 网关
let gjs = '/centgisserver'

export default {
  AnnualProductionOilAndGas: `${domain1001}${gjs}/basin/AnnualProductionOilAndGas` // haoxj 数据统计-年产气量&年产油量
}
