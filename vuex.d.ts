// vuex.d.ts 或 shims-vue.d.ts
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

// 声明你自己的 store state 类型
// 这需要与你项目中实际的 store state 结构保持一致
declare interface State {
  count: number
  // ... 你的其他 state 字段
  user: any
}

// 为 this.$store 提供类型声明
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

// 修复导入 Vuex 时的类型解析问题
declare module 'vuex' {
  export * from 'vuex/types/index.d.ts'
  // 或者如果上面不行，可以尝试更直接的路径
  // export * from 'vuex/dist/vuex'
}