console.log('---process.env', process.env)
const orign = process.env.NODE_ENV === 'product'? 'http://47.106.183.152:8088': 'http://47.106.183.152:8088'
exports.api = {
    getWxUserInfo: `${orign}/auth/wx/login`
}