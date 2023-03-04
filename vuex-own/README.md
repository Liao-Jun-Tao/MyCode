# 手写 vuex

- Store 类
  单例 store
  state() mutations
  constructor options
  commit 方法
  install
- useStore
  app.use()
  provide store
  inject

- 模块化知识点

  1. require + module.exports commonjs
     node
  2. import + export es6 module
     一个文件一个模块 一个函数一个功能
     export default 默认输出的只能用一次
     export 输出多个的话,也可以 一个模块的多个变量的函数

  3. 模块化的优先级更高
  4. 模块化的语法更明确
     一次 default n 次 export
     对 import 支持便捷
     import Vuex (default), {只能用于 export}

- es6 是 js 的重大更新
  - 让 js 成为大型语言,适合企业级开发
    - 模块化
      代码多
    - class get set 
      传统面向对象(原型式难理解)
    - extends 继承
    - let const  常量 + 块级作用域
  - 代码更优雅 简洁
      []  {}  解构  ...
      for  of  