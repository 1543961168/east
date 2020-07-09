import Vue from 'vue'
import Vuex from 'vuex'
import homeStore from 'Pages/home/store'
// import loginStore from 'Pages/login/store'
// import detailsStore from 'Pages/details/store'
// import myfileStore from 'Pages/myfile/store'
// import auctionStore from 'Pages/auction/store'
// import communityStore from 'Pages/community/store'
// import goodsStore from 'Pages/goods/store'
// import listStore from 'Pages/list/store'
// import messageStore from 'Pages/message/store'
// import registerStore from 'Pages/register/store'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        homeStore,
        // loginStore,
        // detailsStore,
        // myfileStore,
        // auctionStore,
        // communityStore,
        // goodsStore,
        // listStore,
        // messageStore,
        // registerStore
    }
})