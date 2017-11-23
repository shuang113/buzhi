export const state = () => ({
    headTitle: ""
})
  
export const mutations = {
    setTitle (state,title) {
        state.headTitle = title
    }
}