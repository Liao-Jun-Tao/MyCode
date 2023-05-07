// 简单数据类型 响应式如何做
import { track, tigger } from './effect'
import { reactive } from './reactive'
import { isObject } from './shared'
// ref(null) DOM 标记点
export function ref(val) {
   if (isRef(val)) {
      console.log(val,'///////////////')
      return val
   }
   // 点简单数据类型的ref
   return new RefImpl(val)
}
export function isRef(val) {
   return !!(val && val._isRef)
}
// es6 class get set 方法
class ReImpl {
   constructor(val) {
      // 响应"对象" 是用ref做的
      this._isRef = true
      this._val = convert(val)
   }
   get value() {
      track(this, 'get', 'value')
      return this._val
   }
   set value(val) {
      if (val !== this._val)
         this._val = convert(val)
      trigger(this, 'set', 'value')
   }
}

function convert(val) {
   return isObject(val) ? reactive(val) : val
}