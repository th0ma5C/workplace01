// 求和相關配置
export default {
    namespaced: true,
    actions: {
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
    mutations: {
        ADD(state, value) { //收到(state,action傳的參數)
            state.sum += value;
        },
        MINUS(state, value) {
            state.sum -= value;
        },

    },
    state: {
        sum: 0, //當前和
        school: 'google',
        addr: 'taipei'
    },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        }

    },
}
