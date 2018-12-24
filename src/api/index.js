/*
包含n个接口请求函数的模块
每个函数返回promise
 */
import ajax from './ajax'

// const BASE = 'http://localhost:5000'
const BASE = '/api'  // 开发环境下需要使用代理帮我们转发请求

// 根据经纬度获取位置详情](#1根据经纬度获取位置详情)

export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`)

// 获取食品分类列表](#2获取食品分类列表)
export const reqCategorys = () => ajax(BASE + '/index_category')

// 根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)
export const reqShops = (longitude, latitude) => ajax(BASE + '/shops', {longitude, latitude})

// 用户名密码登陆](#6用户名密码登陆)
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE + '/login_pwd', {name, pwd, captcha}, 'POST')

// 发送短信验证码](#7发送短信验证码)
export const reqSendCode = (phone) => ajax(BASE + '/sendcode', {phone})

// 手机号验证码登陆](#8手机号验证码登陆)
export const reqSmsLogin = (phone, code) => ajax(BASE + '/login_sms', {phone, code}, 'POST')

// 根据会话获取用户信息](#9根据会话获取用户信息)
export const reqUserInfo = () => ajax(BASE + '/userinfo')

// 用户登出](#10用户登出)
export const reqLogout = () => ajax(BASE + '/logout')
