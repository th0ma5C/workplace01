import { createStore } from "vuex";
import countOptions from './count';
import personOptions from './person'

export default createStore({
    modules: {
        countOptions,
        personOptions
    }
})

// export default createStore({
//     // actions響應組件中的動作
//     actions: {
//         // 組件無其他action需求，固組件中可直接由commit和mutation溝通
//         // add(context, value) { //收到(miniStore,組件傳的參數)
//         //     context.commit('ADD', value);
//         // },
//         // minus(context, value) {
//         //     context.commit('MINUS', value);
//         // },
//     },
//     // mutations用於操作數據(state)
//     mutations: {
//     },
//     // state用於儲存數據
//     state: {
//     },
//     // getters用於加工數據
//     getters: {
//     }
// });
