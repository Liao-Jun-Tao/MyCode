function sum(a,b) {
    //es6
    let args = Array.from(arguments);
    // 借用数组的slice 方法
    // 展开运算符
    let arg = [...arguments]
    // let args = Array.prototype.slice.call(arguments);
    // console.log(Array.prototype.call(args));
    // console.log(Array.prototype.call(arguments));
    // console.log(Array.prototype.call(arguments,args));



    
}
sum(1,2)