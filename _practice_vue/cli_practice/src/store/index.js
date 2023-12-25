import { createStore } from "vuex";

export default createStore({
    // actions響應組件中的動作
    actions: {
        // 組件無其他action需求，固組件中可直接由commit和mutation溝通
        // add(context, value) { //收到(miniStore,組件傳的參數)
        //     context.commit('ADD', value);
        // },
        // minus(context, value) {
        //     context.commit('MINUS', value);
        // },
        addOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('ADD', value);
            }
        },
        addWait(context, value) {
            setTimeout(() => {
                context.commit('ADD', value);
            }, 500);
        },
    },
    // mutations用於操作數據(state)
    mutations: {
        ADD(state, value) { //收到(state,action傳的參數)
            state.sum += value;
        },
        MINUS(state, value) {
            state.sum -= value;
        },
    },
    // state用於儲存數據
    state: {
        sum: 0, //當前和
        school: 'google',
        addr: 'taipei'
    },
    // getters用於加工數據
    getters: {
        bigSum(state) {
            return state.sum * 10;
        }
    }
});
