// vue 模块化开发出来的 reactivity 模块 响应式
// reactive 普通对象包装成 响应式对象 effect  依赖收集器
const { effect, reactive } = require('@vue/reactivity')

let dummy
const counter = reactive({ num1: 1, num2: 2 })
effect(() => {
   // proxy get 收集dao  effect he counter 之间的依赖关系
   dummy = counter.num1 + counter.num2
   console.log(dummy) //每次counter.num1修改都会打印日志
})
setInterval(() => {
   counter.num1++
}, 1000)
