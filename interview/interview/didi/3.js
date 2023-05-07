// 列举symbol的用法
// 用途?
// Symbol class 使用属性 方法
// Symbol 迭代对象的时候过滤些不必要的属性
// Object.values()

const obj = {}
const a = Symbol('a')
const b = Symbol('b')
//唯一, 暂时用一下
object[a] = 'hello'
object[b] = 'word'
//重要
object.x = 'x'
object.y = 'y'
for(let key in object){
    console.log(key, object[key])
}
console.log(object.getOwnPropertyName(object))
console.log(object.getOwnPropertySymbol(object))
