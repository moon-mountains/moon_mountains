console.log('---process.env', process.env.VUE_APP_BASE_URL)
// const orign = process.env.NODE_ENV === 'product'? 'http://47.106.183.152:8088': 'http://47.106.183.152:8088'
const orign = process.env.VUE_APP_BASE_URL;
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
    // 步骤线
    queryWxNewCaseStatus: `${orign}/auth/wx/queryWxNewCaseStatus`,
    //验证码
    verifyCode: `${orign}/auth/code`,
    //微信用户取消绑定
    deleteWxUserRelation: `${orign}/api/wx/deleteWxUserRelation`,
    //微信用户绑定
    wxUserRelation: `${orign}/api/wx/wxUserRelation`,
    //微信用户案件转接绑定
    wxCaseBaseInfoRelation: `${orign}/auth/wx/wxCaseBaseInfoRelation`,
}