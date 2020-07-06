
import axios from 'axios';
import qs from 'qs'


const _httpError = (code) => {
    let dict = {
        10001: '参数错误!',
        40001: '签名密钥不匹配!',
        500: '服务器内部错误!',
    }
    let msg = dict[code] || '网络错误!';
    // Message({ message: msg, type: 'error', duration: 2000 });
}

const callHttp = (opt) => {
    let url = opt.url
    let data = opt.data || {}
    let method = opt.method || 'get'
    let headers = opt.headers || { 'Content-type': 'application/x-www-form-urlencoded' }

    let option = { method, headers, url, data }
    if (method.toLowerCase() == 'get') {
        option.params = data
    } else {
        option.data = qs.stringify(data)
    }
    return new Promise((resolve, reject) => {
        axios(option).then(opt => {
            const { status, data } = opt
            if (status == 200) {
                if (data.code == 0 || data.status == 0) {
                    resolve(data)
                } else {
                    reject()
                    _httpError(data.status)
                }
            } else {
                _httpError()
            }

        }).catch((data) => {
            reject()
            _httpError()
        })
    })
}

let timestamp;      //上一次调用接口时间戳
const scrollToBottom = () => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    if (scrollHeight - scrollTop - windowHeight < 10) {
        if (!timestamp) {
            timestamp = Date.now();
            return true
        } else {
            let currentTimeStamp = Date.now();
            if (currentTimeStamp - timestamp < 500) { //接口限速，500毫秒内调用一次接口
                return false;
            } else {
                timestamp = currentTimeStamp;
                return true;
            }
        }
    } else {
        return false
    }
}

export { callHttp, scrollToBottom, _httpError }