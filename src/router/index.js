import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'
import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

import Admin from '~/layouts/admin.vue'
import Index from '~/pages/index.vue'
import Login from '~/pages/login.vue'
import NotFound from '~/pages/404.vue'

const routes = [ {
    path:"/",
    component:Admin,
    //子路由
    children:[{
        path:"/",
        component:Index,
        meta:{
            title:"后台首页"
        }
    }]
},{
    path:"/login",
    component:Login,
    meta:{
        title:"登录页"
    }
},{
    path:"/:pathMatch(.*)*",
    name:'NotFound',
    component:NotFound
}]

const router = createRouter({
    history:createWebHashHistory(),
    routes //即routes:routes
})


export default router