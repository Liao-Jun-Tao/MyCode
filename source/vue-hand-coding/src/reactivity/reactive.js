// ? vue 依赖关系式用"对象"来组织的 key 对象,  map更适合
// 组件的卸载, WeakMap 自动的删除 弱引用关系 垃圾回收机制
// 为了依赖函数的查找,  更新的时候,  找依赖 vueX 单一状态树 targetMap 依赖图谱
import { mutableHandlers,shallowReactiveHandlers } from './baseHandlers'
export const reactiveMap = new WeakMap()
export const shallowReactiveMap = new WeakMap()
// 响应式
export const ReactiveFlags = {
   RAW: "_v_raw",    // 原生对象
   IS_REACTIVE:"_V_isReactive"  // obj.num.a  响应式
}

export function reactive(target) {
   // 修改后, 如何处理
   return createReactiveObject(target, reactiveMap, mutableHandlers)
}
// 用户自己决定浅层的代理
export function shallowReactive(target) {
   return createReactiveObject(
         target,
         shallowReactiveMap, // 区分, 浅层的响应式单独存放
         shallowReactiveHandlers //
         
      )
}

function createReactiveObject(target, proxyMap, proxyHandlers) {
   if(typeof target !== 'object') {
      console.warn(`reactive${target} 必须是一个对象`);
      return target;
   }
   // 通过Proxy 创建代理 , 不同的map 存储不同类型的reactive依赖关系
   const existingProxy = proxyMap.get(target)
   if(existingProxy){
      console.log('---------cached',target)
      return existingProxy // Proxy 代理的是对象
}
   const proxy = new Proxy(target, proxyHandlers)
   proxyMap.set(target, proxy) //性能优化缓存
   return proxy
}

