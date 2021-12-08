import { createStore } from 'vuex';


export default createStore({
    state: { //vuex中的基本数据，用来存储变量
        count:0
    },
    mutations: {//数据更新的方法
        fnAdd(state, data) {
            state.count += data;
        }
    },
    actions: { //action提交的是mutation
        fnAddActions(store, num) {
            store.commit('fnAdd', num);
        }
    }
})