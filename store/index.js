import * as types from './mutation-types'

export const state = () => ({
    userinfo:{
        'nickname':'none'
    },
    forumlist:[]
})
  
export const mutations = {
    [types.GET_USERINFO](state,userinfo) {
        state.userinfo = userinfo
    },
    [types.GET_FORUM](state,forum) {
        state.forumlist = forum
    }
    
}