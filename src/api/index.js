import request from 'Utils/request'
import { homeSwipeUrl } from './url'

// 获取home轮播图接口
export function homeSwipeReq(params) {
    return request({
        url: homeSwipeUrl,
        data: params
    })
}