import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export const ERR_OK = 1

export function getForumCate() {
    const url = baseUrl + '/api?router=thread.forum'
    return axios.get(url)
        .then((res) => {
            return Promise.resolve(res.data)
        })
}

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