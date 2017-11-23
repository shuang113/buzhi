import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export const STATUS_OK = "1"
// 获取版块分类
export function getForumCate() {
    const url = baseUrl + '/api?router=thread.forum'
    return axios.get(url)
        .then((res) => {
            return Promise.resolve(res.data)
        })
}
// 获取版块帖子列表
export function getForumList(options) {
    const url = baseUrl + '/api?router=thread.appLists'
    const data = Object.assign({}, options, {
        'limit': '20'
    })
    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}
// 获取登录用户
export function getUserInfo() {
    // const url = baseUrl + '/api?router=thread.appLists'
    const url = baseUrl + "/data/userinfo.json"
    return axios.get(url).then((res) => {
        return Promise.resolve(res.data)
    })
}
// 获取推荐关注
export function getRecommends(options) {
    // const url = baseUrl + '/api?router=thread.appLists'
    const url = baseUrl + "/data/recommends.json"
    return axios.get(url).then((res) => {
        return Promise.resolve(res.data)
    })
}
// 确定关注
export function setFollow(options) {
    // const url = baseUrl + '/api?router=thread.appLists'
    // const data = Object.assign({}, options, {
    //     'limit': '20'
    // })
    // return axios.post(url,{
    //     data
    // }).then((res) => {
    //     return Promise.resolve(res.data)
    // })
}
// 国考倒计时
export function examCountTips() {
    // const url = baseUrl + '/api?router=thread.appLists'
    const url = baseUrl + "/data/examCountTips.json"
    return axios.get(url).then((res) => {
        return Promise.resolve(res.data)
    })
}
// 申论批改场
export function getCorrectList() {
    const url = baseUrl + "/api?router=thread.correct"
    return axios.get(url).then((res) => {
        return Promise.resolve(res.data)
    })
}
// 批改达人
export function getCorrectMaster() {
    const url = baseUrl + "/data/master.json"
    return axios.get(url).then((res) => {
        return Promise.resolve(res.data)
    })
}
