import caseInfo from '../containers/caseInfo.vue'
import userCenter from '../containers/userCenter.vue'
import caseList from '../containers/caseList.vue'
import caseDetail from '../containers/caseDetail.vue'
import caseRelation from '../containers/caseRelation.vue'
import userRelation from '../containers/userRelation.vue'
import addUserRelation from '../containers/addUserRelation.vue'
import deleteUserRelation from '../containers/deleteUserRelation.vue'

import App from '../App.vue'

const routes = [
    {
        path: '/',
        component: App,
        redirect: 'caseInfo',
        children: [
            {
                name: 'caseInfo',
                path: '/caseInfo',
                component: caseInfo
            },
            {
                name: 'userCenter',
                path: '/userCenter',
                component: userCenter
            },
            {
                name: 'caseList',
                path: '/caseList',
                component: caseList
            },
            {
                name: 'caseDetail',
                path: '/caseDetail',
                component: caseDetail
            },
            {
                name: 'caseRelation',
                path: '/caseRelation',
                component: caseRelation
            },
            {
                name: 'userRelation',
                path: '/userRelation',
                component: userRelation
            },
            {
                name: 'addUserRelation',
                path: '/addUserRelation',
                component: addUserRelation
            },
            {
                name: 'deleteUserRelation',
                path: '/deleteUserRelation',
                component: deleteUserRelation
            }
        ]
    }
]

export default routes