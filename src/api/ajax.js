import axios from 'axios'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const service = axios.create({
    // shared path part for all of the apis
    baseURL: '/api',
    // ajax request timeout
    timeout: 15000
})

// request interceptor config
service.interceptors.request.use(
    (config) => {
        NProgress.start();
        return config;
    },
    // the callback for request failure
    () => {

    }
)

// response interceptor config
service.interceptors.response.use(
    // response is the actual response of request
    (response) => {
        NProgress.done();
        return response.data
    }, 
    (error) => {
        NProgress.done();
        
        // handle all the api request errors, 
        alert('Ajax request failed: ', error.message || 'Unknown request error occured')

        // or continue handle it after alert(use catch)
        // return Promise.reject(new Error('Ajax request error'))

        // or just return a pending promise, stop handle
        return new Promise(() => {})

    }
)

export default service