import { homeSwipeReq } from 'Api';
export default {
    namespaced: true,
    state: {
        cates: []
    },
    actions: {
        async getCates({ commit }, payload) {
            //发送数据请求
            const result = await homeSwipeReq(payload)
            commit({
                type: 'GET_CATES',
                payload: result
            })
        }
    },
    mutations: {
        GET_CATES(state, action) {
            state.cates = action.payload
        }
    }
}