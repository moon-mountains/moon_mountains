import axios from 'axios'
import { api } from '../api/urls.js'
const caseInfo = {
    state: {
        userInfo: {
            openid: ''
        }
    },
    mutations: {
        getWxUserInfo(state, info) {
            state.userInfo = info || {}
        }
    },
    actions: {
        // 用户信息
        getWxUserInfo(context, params ={}) {
            return axios({
                method: 'post',
                url: api.getWxUserInfo,
                data: params
            }).then((data = {}) => {
                data = {"code":200,"data":{"access_token":null,"city":null,"country":null,"headimgurl":"https://thirdwx.qlogo.cn/mmopen/vi_32/L6SG55UJpKRiae1YRC9K3gibcsSjmWSFiarIhAibFrIFHOO9ic5TRwskg454hUaLMZsAyPBqdXBREbjj3sK7z1maDgA/132","nickname":"青年","openid":null,"province":null,"sex":null,"token":"BearerWxeyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJlNGFiY2EzMTk3ODg0YjA1YTJjY2U5NTJlZGYyMWVkNW9scTY1NmY2SnI0OGd6T1FIbjNkMXYxTWVReU0iLCJhdXRoIjoid3hfdXNlciJ9.PP1LFB1e3FM3JeUiXtqNfa_CqiG9F1XD7YatpWF-MPfN2V3_WsF5qWSk24v_CUFgyXL7gjiR7YacdIBnJ1mVXA"},"message":"请求成功"};
               if(data.code === 200) {
                    let res = data.data
                    console.log('getWxUserInfo-----', res)
                    context.commit('getWxUserInfo', res)
                }
                return data
            }).catch(err => {
                console.log('getWxUserInfo----err', err)
            });
        },
        // 新增案件基本信息
        saveReportCaseBaseInfo(context, params ={}) {
            console.log('--get--token', context.state.userInfo.token);
            return axios({
                headers: {
                    'Authorization': context.state.userInfo.token || ''
                },
                method: 'post',
                url: api.saveReportCaseBaseInfo,
                data: params
            }).then(res => {
                console.log('saveReportCaseBaseInfo-----', res)
                return res
            }).catch(err => {
                console.log('saveReportCaseBaseInfo----err', err)
            });
        },
        // 业务员
        queryAllSalesman(context) {
            return axios({
                headers: {
                    'Authorization': context.state.userInfo.token || ''
                },
                method: 'post',
                url: api.queryAllSalesman
            }).then(res => {
                console.log('queryAllSalesman-----', res)
                return res
            }).catch(err => {
                console.log('queryAllSalesman----err', err)
            });
        },
        // 查询微信案件列表
        queryWxCaseStatusList(context, params ={}) {
            console.log('queryWxCaseStatusList--get--token', context.state.userInfo.token);
            return axios({
                headers: {
                    'Authorization': context.state.userInfo.token || ''
                },
                method: 'post',
                url: api.queryWxCaseStatusList,
                data: params
            }).then(res => {
                console.log('queryWxCaseStatusList-----', res)
                return res
            }).catch(err => {
                console.log('queryWxCaseStatusList----err', err)
            });
        },
        // 查询微信案件详情
        queryWxCaseLog(context, params ={}) {
            console.log('queryWxCaseLog--get--token', context.state.userInfo.token);
            return axios({
                headers: {
                    'Authorization': context.state.userInfo.token || ''
                },
                method: 'post',
                url: api.queryWxCaseLog,
                data: params
            }).then(res => {
                console.log('queryWxCaseLog-----', res)
                return res
            }).catch(err => {
                console.log('queryWxCaseLog----err', err)
            });
        },
        // 查询微信案件详情步骤线
        queryWxNewCaseStatus(context, params ={}) {
            console.log('queryWxNewCaseStatus--get--token', context.state.userInfo.token);
            return axios({
                headers: {
                    'Authorization': context.state.userInfo.token || ''
                },
                method: 'post',
                url: api.queryWxNewCaseStatus,
                data: params
            }).then(res => {
                console.log('queryWxNewCaseStatus-----', res)
                return res
            }).catch(err => {
                console.log('queryWxNewCaseStatus----err', err)
            });
        },
        // 获取验证码
        toGetVerifyCode(context, params ={}) {
            return axios({
                method: 'get',
                url: api.verifyCode,
                data: params
            }).then(res => {
                return res
            }).catch(err => {
                console.log('toGetVerifyCode----err', err)
            });
        },
        //绑定用户
        toWxUserRelation(context, params ={}) {
            return axios({
                headers: {
                    'Authorization': context.state.userInfo.token || ''
                },
                method: 'post',
                url: api.wxUserRelation,
                data: params
            }).then(res => {
                return res
            }).catch(err => {
                console.log('wxUserRelation----err', err)
            });
        },
        //取消绑定用户
        toDeleteWxUserRelation(context, params ={}) {
            return axios({
                headers: {
                    'Authorization': context.state.userInfo.token || ''
                },
                method: 'post',
                url: api.deleteWxUserRelation,
                data: params
            }).then(res => {
                return res
            }).catch(err => {
                console.log('toDeleteWxUserRelation----err', err)
            });
        },
        //绑定案件
        toCaseBaseInfoRelation(context, params ={}) {
            return axios({
                headers: {
                    'Authorization': context.state.userInfo.token || ''
                },
                method: 'post',
                url: api.wxCaseBaseInfoRelation,
                data: params
            }).then(res => {
                return res
            }).catch(err => {
                console.log('toCaseBaseInfoRelation----err', err)
            });
        },
        // 新增案件基本信息
        toSaveWxCaseBaseInfoCache(context, params ={}) {
            console.log('--get--token', context.state.userInfo.token);
            return axios({
                headers: {
                    'Authorization': context.state.userInfo.token || ''
                },
                method: 'post',
                url: api.saveWxCaseBaseInfoCache,
                data: params
            }).then(res => {
                console.log('toSaveWxCaseBaseInfoCache-----', res)
                return res
            }).catch(err => {
                console.log('toSaveWxCaseBaseInfoCache----err', err)
            });
        },
        // 新增案件基本信息
        toQueryWxCaseBaseInfoCache(context, params ={}) {
            console.log('toQueryWxCaseBaseInfoCache--get--token', context.state.userInfo.token);
            return axios({
                headers: {
                    'Authorization': context.state.userInfo.token ||window.sessionStorage.getItem('token') || ''
                },
                method: 'post',
                url: api.queryWxCaseBaseInfoCache,
                data: params
            }).then(res => {
                console.log('toQueryWxCaseBaseInfoCache-----', res)
                return res
            }).catch(err => {
                console.log('toQueryWxCaseBaseInfoCache----err', err)
            });
        }
    },
    getters: {}
}

export default caseInfo