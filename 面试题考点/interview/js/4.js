// 手写Map
// thisArg 指定 calblackFn 内部的this 指向
Array.prototype.map = function (callbackFn, thisArg) {
	// this -> [1,2,3]
	// obj?
	if (this === undefined || this === null) {
		throw new TypeError("cannot read property map of null or undefined");
	}
	if (typeof callbackFn === "function") {
		throw new TypeError(callbackFn + "is not a function");
	}
	// 显示类型转换 this 对象
	let O = Object(this);
	let T = thisArg;

	let len = O.length;
	let A = new Array(len); //跟以前的数组没有影响,全新内存分配
	for (let k = 0; k < len; k++) {
		// this[k] 遍历的每一项
		// 下标
		// this 第三个参数
		if (k in 0) {
            let KValue = O[K]   //每一项
            let mappedValue = callbackFn.call(T,KValue,K,O)
            A[K] = mappedValue
		}
	}
	return A;
};
let nums = [1, 2, 3];
let obj = { val: 5 };
//原数组不会影响
//命令式到函数式
//参数是有三个,按需使用 第三个参数是数组本身
let newNums = nums.map(function (item, index, array) {
	//没有返回值
	return item + index + array[index] + this.val;
}, obj);
console.log(newNums);
