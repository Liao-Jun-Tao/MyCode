// console.log('hello parcel')
import { h } from './h.js'; // VNODE 的生成
import render from './render.js' // 渲染

const prevVNode = h('div', null, [
    h('p', { key: 'a' }, '节点1'),
    h('p', { key: 'b' }, '节点2'),
    h('p', { key: 'c' }, '节点3')
])

// 新的 VNode
const nextVNode = h('div', null, [
    h('p', { key: 'd' }, '节点1'),
    h('p', { key: 'a' }, '节点2'),
    h('p', { key: 'b' }, '节点3')
])

// const prevNode = h('div', null, '旧的VNode')
render(prevVNode, document.getElementById('app'))
// class MyComponent {
//     render() {
//         return h('div', null, '新的VNode')
//     }
// }
// const nextVNode = h(MyComponent) // 内存？ 

setTimeout(() => {
    render(nextVNode, document.getElementById('app'))
}, 5000)
