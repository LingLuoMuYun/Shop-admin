<template>
    <el-card shadow="never" class="border-0">
        <!-- 新增，刷新 -->    
        <ListHeader @create="handleCreate" @refresh="getData"/>

         <el-table :data="tableData" stripe style="width:100%" v-loading="loading">
            <el-table-column prop="name" label="角色名称" />
            <el-table-column prop="desc" label="角色描述" width="380"/>
            <el-table-column label="状态" width="120">
                <template #default="{row}">
                    <el-switch :modelValue="row.status" :active-value="1" :inactive-value="0" 
                    :loading="row.statusLoading" @change="handleStatusChange($event,row)" :disabled="row.super==1">
                    </el-switch>
                </template>
            </el-table-column>
            <el-table-column  label="操作" width="180" align="center">
                <template #default="scope">
                    <el-button type="primary" size="small" text @click="handleEdit(scope.row)">修改</el-button>

                    <el-popconfirm title="是否删除该角色" confirmButtonText="确认" cancelButtonText="取消" @confirm="handleDelete(scope.row.id)">
                        <template #reference>
                            <el-button  text type="primary" size="small" >删除</el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
         </el-table>
         <div class="flex items-center justify-center mt-5">
            <el-pagination background layout="prev,pager,next" :total="total" :current-page="currentPage" :page-size="limit" @current-change="getData" />
         </div>
         
         <FormDrawer ref="formDrawerRef" :title="drawerTitle" @submit="handleSubmit">
            <el-form :model="form" ref="formRef" :rules="rules" label-width="80px" :inline="false">
                <el-form-item label="角色名称" prop="name">
                    <el-input v-model="form.name" placeholder="角色名称"></el-input>
                </el-form-item>
                <el-form-item label="角色描述" prop="desc">
                    <el-input v-model="form.desc" placeholder="角色描述" type="textarea" :row="5"></el-input>
                </el-form-item>
                <el-form-item label="状态" prop="status">
                    <el-switch v-model="form.status" :active-value="1" :inactive-value="0">
                    </el-switch>
                </el-form-item>
            </el-form>
         </FormDrawer>

    </el-card>  
</template>

<script setup> 
import {
    getRoleList,
    createRole,
    updateRole,
    deleteRole,
    updateRoleStatus
} from "~/api/role"
import ListHeader from "~/components/ListHeader.vue"
import FormDrawer from "~/components/FormDrawer.vue"
import { useInitTable,useInitForm } from "~/composables/useCommon"

const {
    tableData,
    loading,
    currentPage,
    total,
    limit,
    getData,
    handleDelete,
    handleStatusChange
} = useInitTable({
    getList:getRoleList,
    delete:deleteRole,
    updateStatus:updateRoleStatus
})

const {
    formDrawerRef,
    formRef,
    form,
    rules,
    drawerTitle,
    handleSubmit,
    handleCreate,
    handleEdit
} = useInitForm({
    form:{
        name:"",
        desc:"",
        status:1
    },
    getData,
    update:updateRole,
    create:createRole
})


</script>