// 引入router
import { createRouter, createWebHistory } from 'vue-router'
// 引入組件
import myAbout from '../pages/myAbout.vue'
import myHome from '../pages/myHome.vue'
import homeNews from '../pages/homeNews.vue'
import homeMsg from '../pages/homeMsg.vue'
import msgDetail from '../pages/msgDetail.vue'
// 創建並暴露路由器
export default createRouter({
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
                    path: 'homeNews',
                    component: homeNews
                },
                {
                    path: 'homeMsg',
                    component: homeMsg,
                    children: [
                        {
                            name: 'msg',
                            path: 'msgDetail',
                            component: msgDetail,
                        }
                    ]
                },
            ]
        },
    ]
})