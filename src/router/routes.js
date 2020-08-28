import caseInfo from '../containers/caseInfo.vue'
import userCenter from '../containers/userCenter.vue'
import caseList from '../containers/caseList.vue'
import caseDetail from '../containers/caseDetail.vue'

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
            }
        ]
    }
]

export default routes