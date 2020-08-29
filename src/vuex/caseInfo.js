import axios from 'axios'
import { api } from '../api/urls.js'
const caseList = {
    state: {},
    mutations: {},
    actions: {
        getWxUserInfo(context, params) {
            return axios({
                method: 'post',
                url: api.getWxUserInfo,
                data: params
            }).then((data = {}) => {
                if(data.code === 200) {
                    let res = data.data
                    context.commit('getWxUserInfo', res.data)
                }
                return data
            }).catch(err => {
                console.log('getWxUserInfo----err', err)
            });
        },
        saveReportCaseBaseInfo(context, params) {
            return axios({
                headers: {
                    'Authorization': window.sessionStorage.getItem('token') || ''
                },
                method: 'post',
                url: api.saveReportCaseBaseInfo,
                data: params
            }).then(res => {
                return res
            }).catch(err => {
                console.log('saveReportCaseBaseInfo----err', err)
            });
        },
    },
    getters: {}
}

export default caseList