// es6 企业级 大型项目 面向对象的能力
// public prtvate extends
// 唯一值, 没必要, 也不会去记忆
// 私有方法? 类的方法
// 在类中使用：可以在类中使用 Symbol 创建私有属性和方法。例如：
// javascript
// Copy
const _privateMethod = Symbol('privateMethod');
class MyClass {
  constructor() {
    this[_privateMethod] = () => {
      console.log('This is a private method.');
    };
  }
  publicMethod() {
    this[_privateMethod]();
  }
}
const obj = new MyClass();
obj.publicMethod(); // 输出 "This is a private method."
obj[_privateMethod](); // 报错，私有方法无法访问