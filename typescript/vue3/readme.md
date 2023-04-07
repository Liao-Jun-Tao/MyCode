# vue3 + TS 
- vue3 以前对typescript 类型系统支持的不是很友好
  vue3 框架本身是用typescript 写的 
- Vue3 借鉴了react 的hooks 函数式编程 setup + composition API 抛弃落后的类式组件 
- proxy 响应式代理  vue2 defineProperty (不能对数组进行一个监听)
- react 单项数据流      vue 双向 v-model 
- vue 有指令 语法更优雅  react 门槛较高
- MVVM 


- vue3 + ts 注意的地方
      - 项目架构会有types 目录 类型的声明, 多半为 数据接口
      - alias vite.config.ts + tsconfig.json
            path @types/node
            @types/vue-router
      - reative 对象 ts 的重点
            <{todos: Todos[]}>