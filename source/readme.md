# vue 源码

- vue3 响应式
  B 站 视频
  - 看视频
  - 笔记
  - 演练
- 虚拟 DOM
- diff 算法

- reactive 了解 effect 什么? 更新依赖收集
- 响应式到底带来了什么?
  - 响应式的好处
    - 远离 DOM API 的约束, 专注业务的开发, 更好更快
      组件之间通过响应式来通知 effect 依赖关系收集
      - 单个组件的视角
        reactive({
        list: [],
        })
        组件挂载在页面之前 {{list}} -> proxy get
        - template {{list}} proxy set 自动更新
          get 添加依赖 set 时执行依赖
        - watch watchEffect
          proxy get 回调函数
        - unUpdated
        - 组件挂载前到底发生了什么

# 平台无关性

- SPA vue html
- uniapp vue 做小程序 .wxml xml .o .java
- react native 手机 app ios/android
相同点 都是 响应式 大前端?
不同点在于 不同产品和平台
template -> VDOM(VNODE 内存快, proxy)-> mouted(DOM/WXML/XML, 随意编译)
模板
   <ul>
      <li v-for="item in list">{{item}}</li>
   </ul>
跨端 UI 前端/小程序/App 
DOM   VDOM   UI语义 类型 属性 children
   {
      type: 'UL|component',
      props:{
         id:'',
         class: '',
         data-: ''
      },
      childrren['1']
   }
   VDOM -> DOM API -> DOM 
   <ul>
      <li></li>
      <li></li>
      <li></li>
   </ul>

- vue 的响应式 平台无关性

  - vue npm 包 node 环境
  - proxy get set 读/写 代理后 get 依赖收集 set 回调运行 effect
    包裹/包装 track 收集依赖 跟踪?
    trigger 触发依赖函数的执行
    Map/WeakMap
    targetMap Map? { object:{
    "num1":[effect(),effect2()],
    "num2":[effect3()]
    } }

- 更新时
  prev state template vdom DOM
  current {val1:, val2:}  一次性同时更新VDOM -> 一次性更新
