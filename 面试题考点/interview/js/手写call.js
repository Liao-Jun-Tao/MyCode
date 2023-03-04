// 手写时候， es6 版本会比老版本更优雅

Function.prototype.call = function(context, ...args) {
    context = context || window
    let fn = Symbol('fn'); // 唯一值 
    // 给context 动态添加了fn属性
    context.fn = this; // 绝对不会覆盖context上的属性
    // 返回值？ 
    // 只有读源码， 写源码的才会用到eval 
    let result = eval('context.fn(...args)');
    delete context // 让context 干净 代码洁癖
    return result 
}

const me = { name: 'Jack' }
function say() {
  console.log(`My name is ${this.name || 'default'}`);
  return 111
}
console.log(say.call(me, 1, 2, 3))