<template>
  <el-row class="login-container">
    <el-col :lg="16" :md="12" class="left" >
      <div>
        <div>欢迎光临</div>
        <div>后台系统开发登录页</div>
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class="bg-light-50 right ">
      <h2 class="title">欢迎回来</h2>
      <div>
        <span class="line"></span>
        <span>账号密码登录</span>
        <span class="line"></span>
      </div>
      <el-form ref="formRef" :rules="rules" :model="form" class="w-[250px]" >
        <el-form-item prop="username">
          <el-input  v-model="form.username" placeholder="请输入用户名" >
            <template #prefix>
              <el-icon ><user /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" v-model="form.password" placeholder="请输入密码" show-password >
            <template #prefix>
              <el-icon><lock/></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button round color="#626aef" class="w-[250px]" type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref,reactive } from 'vue';
import { ElNotification } from 'element-plus';
import { useRouter } from 'vue-router';
import {login} from '~/api/manager'
import { useCookies } from '@vueuse/integrations/useCookies';

const router = useRouter();

// import {User,Lock} from '@element-plus/icons-vue'
const form = reactive({
  username: "",
  password: "",
});

const rules ={
  username:[
    {
      required: true,
      message: '用户名不能为空',
      trigger:'blur'
    },
  ],
  password:[
  {
      required: true,
      message: '密码不能为空',
      trigger:'blur'
    },
  ]
}

const formRef = ref(null)
const onSubmit = () => {
  formRef.value.validate((valid)=>{
     if(!valid){
      return false
     }
     login(form.username,form.password)
     .then(res=>{
      console.log(res.data.data);
      ElNotification({
        title:'登录成功',
        type:'success',
        duration:3000
      })
      //储存token和用户相关信息
      const cookie = useCookies()
      cookie.set("admin-token",res.data.data.token)
      //跳转后台首页
      router.push("/")

     })



     .catch(err=>{
      ElNotification({
        title:'错误',
        message:err.response.data.msg||"请求失败",
        type:'error',
        duration:3000
      })
     })
    //console.log("验证通过");
  })
};
</script>


<style scoped>
.login-container{
  @apply min-h-screen bg-indigo-500;
}
.login-container .left,.login-container .right{
  @apply flex items-center justify-center flex-col;
}
.left>div>div:first-child{
  @apply font-bold text-5xl text-light-50 mb-4;
}
.left>div>div:last-child{
  @apply text-gray-200 text-sm;
}
.right .title{
  @apply font-bold text-3xl text-gray-800;
}
.right>div{
  @apply flex items-center justify-center my-5 text-gray-400 space-x-2;
}
.right .line{
  @apply h-[1px] w-16 bg-gray-200;
}
</style>