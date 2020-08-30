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
    },
    getters: {}
}

export default caseInfo