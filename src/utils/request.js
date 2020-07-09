import axios from 'axios'
// import env from 'Api/env'
// import {getCookie} from './cookie'
import fetchJsonp from 'fetch-jsonp'
const ins = axios.create({
    //有专门后端伺候的时候你写
    // baseURL: env.prod

    timeout: 4000
})

// 拦截器
ins.interceptors.request.use(function(config) {
    // 1. 统一携带token令牌 
    // config.headers.authToken = getCookie('token')
    return config
}, function(error) {
    return Promise.reject(error)
})

ins.interceptors.response.use(function(res) {
    return res
}, function(error) {
    return Promise.reject(error)
})

export default function request(options) {
    const {
        url,
        data,
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method = 'get',
        fetchType = 'CORS'
    } = options

    if (fetchType == 'JSONP') {
        return new Promise((resolve, reject) => {
            fetchJsonp(url, {
                    callback: 'cb',
                })
                .then(function(response) {
                    return response.json()
                }).then(function(json) {
                    resolve(json)
                }).catch(function(ex) {
                    reject(ex)
                })
        })
    } else {
        switch (method.toUpperCase()) {
            case 'GET':
                return ins.get(url, { params: data })
            case 'POST':
                switch (headers['Content-Type']) {
                    case 'application/json':
                        return ins.post(url, data, { headers })
                    case 'application/x-www-form-urlencoded':
                        const p = new URLSearchParams()
                        for (let key in data) {
                            p.append(key, data[key])
                        }
                        return ins.post(url, p, { headers })
                    case 'multipart/form-data':
                        const params = new FormData()
                        for (let key in data) {
                            params.append(key, data[key])
                        }
                        return ins.post(url, params, { headers })
                    default:
                        break;
                }
                break;

            case 'PUT':
                return ins.put(url, data)
                break;
            case 'DELETE':
                return ins.delete(url, { data })
                break;
            case 'PATCH':
                return ins.patch(url, data)
                break;

            default:
                return ins(options)
                break;
        }
    }

}