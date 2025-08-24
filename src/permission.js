import router from "~/router"
import { getToken } from '~/composables/auth'
import { toast,showFullLoading,hideFullLoading } from '~/composables/util'
import store from "./store"

//全局前置守卫
router.beforeEach(async (to,from,next)=>{

    //显示Loading
    showFullLoading()

    const token = getToken()

    //没有登录强制跳转回登录页
    if(!token && to.path != "/login"){
        toast("请先登录","error")
        return next({path:"/login"})
    }

    //防止重复登录
    if(token && to.path == "/login"){
        toast("请勿重复登录","error")
        return next({path:from.path ? from.path :"/"})
    }

    //如果用户登录，则自动获取用户信息并存储在vuex当中
    if(token){
        await store.dispatch("getinfo")
    }
    
    //设置页面标题
    let title = (to.meta.title ?to.meta.title :"") + "-商城后台"
    document.title = title
    //console.log(to.meta.title)

    next()
})


//全局后置守卫
router.afterEach((to,from)=>hideFullLoading())