import { nanoid } from "nanoid";
import axios from "axios";
// 人員相關配置
export default {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value);
            } else {
                alert('添加的人必須姓王');
            }
        },
        addPersonServer(context) {
            axios.get('http://localhost:8080/api')
                .then((result) => {
                    context.commit('ADD_PERSON', { id: nanoid(), name: result.data.name })
                    console.log(result.data.name)
                }).catch((err) => {
                    alert(err.message);
                });
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value);
        }
    },
    state: {
        personList: [
            { id: '001', name: '張三' },
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name;
        }
    },
}
