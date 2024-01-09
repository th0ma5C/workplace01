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
            component: myAbout,
            meta: {
                isAuth: true,
                title: '關於'
            }
        },
        {
            name: 'myHome',
            path: '/myHome',
            component: myHome,
            meta: {
                title: '主頁'
            },
            children: [
                {
                    name: 'homeNews',
                    path: 'homeNews',
                    component: homeNews,
                    meta: {
                        isAuth: true,
                        title: '新聞'
                    },
                    // 單一路由守衛
                    /* beforeEnter: (to, from, next) => {
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('school') === 'google') {
                                next();
                            } else {
                                alert('無權限');
                            }
                        } else {
                            next()
                        }
                    } */
                },
                {
                    name: 'homeMsg',
                    path: 'homeMsg',
                    component: homeMsg,
                    meta: {
                        isAuth: true,
                        title: '訊息'
                    },
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
                            //     console.log($route);
                            //     return { id: $route.query.id, title: $route.query.title }
                            // },
                            // 參數解構賦值
                            // props({ query: { id, title } }) {
                            //     return { id, title }
                            // },
                            props($route) {
                                return $route.query
                            },


                        }
                    ],
                },
            ]
        },
        {
            path: '/',
            redirect: 'myHome'
        }
    ]
});
// 全局前置路由守衛，初始化和路由切換前被調用
/* router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) { //判斷是否需要權限
        if (localStorage.getItem('school') === 'google') {
            next();
        } else {
            alert('無權限');
        }
    } else {
        next()
    }
}); */

// 全局後置路由守衛，初始化和每次路由切換之後被調用
/* router.afterEach((to,) => {
    document.title = to.meta.title || '主頁';
}) */

export default router