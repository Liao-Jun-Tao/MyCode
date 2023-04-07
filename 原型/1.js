
//所有的构造函数 基于object(){} 建立的

function superType() {
    this.property = true;
}

//superType原型对象上声明了一个函数
superType.prototype.getsuperValue = function () {
    return this.property;
};
console.log(superType.prototype.constructor)//结果：superType(){} 

function SubType() {
    this.subproperty = false;
}
console.log( SubType.prototype.constructor,"?????????")// SubType(){}

// SubType的prototype原型对象是superType实例，指向superType构造函数
SubType.prototype = new superType();
console.log( SubType.prototype.constructor)// superType(){}

//SubType的实例,找到SubType的prototype属性,是指向superType构造函数的实例，能够找到superType原型上的方法
let instance1 = new SubType(); // 会覆盖constructor属性
console.log(instance1.getsuperValue(),instance1.constructor);//结果：true， superType(){}


// 重写原型对象后，首先原型对象的constructor属性值（constructor的指向）会发生改变。
// SubType的prototype属性重写，原型对象上声明两个函数，构造函数是SubType(){}
SubType.prototype = {
    getsubValue() {
        return this.subproperty;
    },
    someOtherMethod() {
        return false;
    }
}
console.log(SubType.prototype.constructor,"/////////");//结果：Object(){}
let instance2 = new SubType();//SubType的实例，因为SubType.prototype是同一个地址，原对象被修改
console.log(instance2.getsubValue(),instance2.constructor)//结果：false，Object(){}
