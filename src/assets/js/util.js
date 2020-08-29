export const getUrlParams = (query) => {
    const url = decodeURIComponent(location.search);
    const theRequest = new Object();
    if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        let strs = str.split("&");
        for (let i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    Object.assign(theRequest, query);
    if (theRequest) {
        return theRequest.code;
    }
    return '';
}