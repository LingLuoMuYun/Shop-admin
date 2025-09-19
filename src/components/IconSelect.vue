<template>
  <div class="flex items-center">
    <!-- 前缀图标 -->
    <el-icon v-if="innerValue" :size="20" class="mr-2">
      <component :is="iconList[innerValue]" />
    </el-icon>

    <el-select
      v-model="innerValue"
      filterable
      placeholder="请选择图标"
      style="width: 240px"
    >
      <el-option
        v-for="[name, Comp] in icons"
        :key="name"
        :label="name"
        :value="name"
      >
        <div class="flex items-center">
          <el-icon><Comp /></el-icon>
          <span class="ml-2 text-gray-500">{{ name }}</span>
        </div>
      </el-option>
    </el-select>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import * as iconList from "@element-plus/icons-vue";

const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);

const innerValue = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

// 转成 [name, component] 数组，方便循环
const icons = ref(Object.entries(iconList));
</script>

<!-- 
  <template>
    <div class="flex items-center">
        <el-icon :size="20" v-if="modelValue" class="mr-2">
            <component :is="modelValue"/>
        </el-icon>
        <el-select filterable :modelValue="modelValue" class="m-2" placeholder="请选择选择图标" @change="handleChange">
            <el-option v-for="item in icons" :key="item" :label="item" :value="item">
                <div class="flex items-center justify-between">
                    <el-icon>
                        <component :is="item"/>
                    </el-icon>
                    <span class="text-gray-500">{{ item }}</span>
                </div>
            </el-option>
        </el-select>
    </div>
</template>

<script setup>
import { ref } from "vue"
import * as iconList from '@element-plus/icons-vue'

defineProps({
    modelValue:String
})
const icons = ref(Object.keys(iconList))

const emit = defineEmits(["update:modelValue"])
const handleChange=(icon)=>{
    emit("update:modelValue",icon)
}
</script>
  -->
