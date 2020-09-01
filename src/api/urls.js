console.log('---process.env', process.env)
const orign = process.env.NODE_ENV === 'product'? 'http://47.106.183.152:8088': 'http://47.106.183.152:8088'
exports.api = {
    // 用户信息
    getWxUserInfo: `${orign}/auth/wx/login`,
    // 业务员
    queryAllSalesman: `${orign}/auth/wx/queryAllSalesman`,
    // 新增案件基本信息
    saveReportCaseBaseInfo: `${orign}/auth/wx/saveWxCaseBaseInfo`,
    // 查询微信案件列表
    queryWxCaseStatusList: `${orign}/auth/wx/queryWxCaseStatusList`,
    // 查询微信案件详情
    queryWxCaseLog: `${orign}/auth/wx/queryWxCaseLog`,
}