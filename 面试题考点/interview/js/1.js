let ary = [1,[2,[3,[4,5]]],6];
let str = JSON.stringify(ary);//序列化
// let o = {a:1,b:2,c:3}
console.log(ary);

//es10 内置 flat APi,   es6 2015
ary = ary.flat(Infinity); //es10(2019) 提供的flat API 兼容性 
console.log(ary);
//  /  / 正则的格式     字符串匹配的规则
// g 正则修饰符 全局,不停下来 一直匹配
// () 分组 匹配的各种可能放到这个分组里
// | 或者 正则是按字符匹配的,[a-z] 匹配一个小写字母 
// [a-z] {3,5}
// [  本身是正则的运算符号 \[ 转译一下 匹配[字符本身

ary = str.replace(/(\[|\])/g, '').split(',').map(item=> + item)
console.log(ary);

str = str.replace(/(\[|\])/g, '')
// console.log(str);
str = '['+str+']'
ary = JSON.parse(str)
console.log(ary);

//递归
let result = []
let fn = function(ary){
    for (let i=0;i<ary.length;i++){
        let item = ary[i]
        if(Array.isArray(ary[i])){
            fn(item)
        }else{
            result.push(item)
        }
    }
}

// ary.reduce(  ( previousValue, currentValue ) => previousValue.concat(currentValue),
// [])
// console.log(ary);
flatten:(ary)=>{
    return ary.reduce((pre,cur)=>{
    return pre.concat(Array,isArray(cur) ? flatten(cur):cur)    
    },[])
}
console.log(ary);

while(ary.some(Array.isArray)){
    ary = [].concat(...ary)
}
console.log(ary);

