// api request functions here
// request for data

import request from './ajax'

export const GetAllArticles = () => {
    return request({
        url: '/v1/articles',
        method: 'get'
    })
}