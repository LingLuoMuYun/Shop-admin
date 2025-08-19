<template>
    <div>
        <el-result
        icon="warning"
        title="404提示"
         sub-title="没这个页面啊笨比，你再试试"
        >
        <template #extra>
        <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
        </template>
      </el-result>
    </div>
</template>