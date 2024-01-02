// 引入router
import { createRouter, createWebHistory } from 'vue-router'
// 引入組件
import myAbout from '../pages/myAbout.vue'
import myHome from '../pages/myHome.vue'
import homeNews from '../pages/homeNews.vue'
import homeMsg from '../pages/homeMsg.vue'
import msgDetail from '../pages/msgDetail.vue'
// 創建並暴露路由器
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'about',
            path: '/myAbout',
            component: myAbout
        },
        {
            path: '/myHome',
            component: myHome,
            children: [
                {
                    name: 'homeNews',
                    path: 'homeNews',
                    component: homeNews
                },
                {
                    name: 'homeMsg',
                    path: 'homeMsg',
                    component: homeMsg,
                    children: [
                        {
                            name: 'msg',
                            path: 'msgDetail',
                            // path: 'msgDetail/:id/:title',
                            component: msgDetail,
                            // props第一種寫法，值為物件，該物件中的所有key-value都會以props的形式傳給該組件
                            // props:{a:1,b:100},
                            // props第二種寫法，值為布林值，若為true，就會把該路由組件收到的所有params參數，以props的形式傳給該組件
                            // props: true,
                            // props第三種寫法，值為函數，該函數須返回一個物件，物件中每組key-value透過props傳給該組件
                            // props($route) {
                            //     return { id: $route.query.id, title: $route.query.title }
                            // },
                            // 參數解構賦值
                            props({ query: { id, title } }) {
                                return { id, title }
                            },
                        }
                    ]
                },
            ]
        },
    ]
});
// 全局前置路由守衛，初始化和路由切換前調用
router.beforeEach(() => {
    console.log('@');
})

export default router