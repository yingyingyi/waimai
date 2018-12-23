/*
包含n个接口请求函数的模块
每个函数返回promise
 */
import ajax from './ajax'

// 开发环境下需要使用代理帮我们转发请求
const BASE = '/api'

// 根据经纬度获取位置

export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`)

// 获取食品分类列表
export const reqCategorys = () => ajax(BASE + '/index_category')

// 根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE + '/shops', {longitude, latitude})
