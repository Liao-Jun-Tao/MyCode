let ary = [1,[2, [3, [4, 5]]], 6];
let str = JSON.stringify(ary); // 序列化
// let o = {a:1,b:2,c:3}

// es10 内置 flat API, es6 2015
// ary = ary.flat(Infinity); // es6 提供的flat API 兼容性 
// console.log(ary);

//  / / 正则字面量  g全局匹配 
// () 分组  匹配的各种可能放到这个分组里
// |或者   正则是按字符匹配的,  [a-z] 匹配一个小写字母

// ary = str.replace(/(\[|\])/g, '').split(',').map(item => +item)
// console.log(ary);

// str = str.replace(/(\[|\])/g, '')
// str = '[' + str + ']'
// ary = JSON.parse(str)
// console.log(ary);

// 递归
// let result = []
// let fn = function(ary) {
//       for (let i = 0; i < ary.length; i++) {
//         let item = ary[i];
//         if(Array.isArray(ary[i])) {
//           fn(item)
//         } else {
//           result.push(item)
//         }
//       }
// }
// fn(ary)
// console.log(result);

function flatten(ary) {
  return ary.reduce((pre,cre) => {
  return  pre.concat(Array.isArray(cre)? flatten(cre) : cre)
  },[])
}
// let ary = [1,[2, [3, [4, 5]]], 6];
console.log(flatten(ary))

// while(ary.some(Array.isArray)) {
//     ary = [].concat(...ary)
// }
// console.log(ary);