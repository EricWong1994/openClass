import Axios from 'axios';
const queryString = require('querystring');
const qs = require('qs');
// let server = Axios.create({
//     // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
//     // 如果请求话费了超过 `timeout` 的时间，请求将被中断
//     timeout: 10000
// })
var env = process.env.NODE_ENV;
if (env === 'development') {
    // 当请求地址为'/'时，会有默认地址
    Axios.defaults.baseURL = 'http://127.0.0.1:3000'
} else {
    Axios.defaults.baseURL = 'http://127.0.0.1:4000'
}

Axios.interceptors.response.use(
    // server.interceptors.response.use(
    res => {
        console.log(res)
        // 对响应数据做点什么
        if (res.status === 200) {
            return res;
            // return 123
        }
    },
    err => {
        console.dir(err);
        console.log('err',err);
        let status = err.response.status;
        // console.log(typeof status); //number
        switch(+status){
            case 404:alert('页面未找到')
        }
        // if(err.response.status === 404) {
        //     alert('页面未找到')
        // }
        // 对请求错误做些什么
        return Promise.reject(err);
    }
)

Axios.interceptors.request.use(request => {
        console.log(request)
        //请求拦截
        // if(request.method !== 'post') {
        //     alert('请使用post请求')
        // }
        console.log(process.env.NODE_ENV)
        return Promise.resolve(request)
    }
)

function post(url, params) {
    return new Promise((resolve, reject) => {
        // Axios.post(url, queryString.stringify(params))
        Axios.post(url, qs.stringify(params))
            // Axios.post(url, params)
            // Axios.post(url, 'a=1&b=2')
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

function get(url, params) {
    return new Promise((resolve, reject) => {
        // Axios.get(url, queryString.stringify(params))
        // Axios.get(url, qs.stringify(params))
        Axios.get(url, {
                params
            })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
// export default server;
export {
    post,
    get
};