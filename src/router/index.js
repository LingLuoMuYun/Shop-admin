import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'
import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

import Index from '~/pages/index.vue'
import Login from '~/pages/login.vue'
import NotFound from '~/pages/404.vue'

const routes = [{
    path:"/",
    component:Index
},{
    path:"/login",
    component:Login
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