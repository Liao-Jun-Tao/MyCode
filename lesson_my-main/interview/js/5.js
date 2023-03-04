
Function.prototype.call = function(context,...args) {
    context = context || window;
    let fn = Symbol('fn'); // 唯一值
    // 给content 动态添加了fn属性
    context.fn = this; // 绝对不会覆盖context上的属性
    let result = eval('context.fn(...args)')
    delete context // 让context 干净 代码洁癖
    return result
}

const me = { name: 'Jack' }
function say() {
  console.log(`My name is ${this.name || 'default'}`);
}
say.call(me)