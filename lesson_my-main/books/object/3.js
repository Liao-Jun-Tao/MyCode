// 生成对象
// 猫这个类的模板?
// var Cat = {
//     name: '',
//     color: '',
// }

// var cat1 = {};
// cat1.name = "大毛";
// cat1.color = "黄色";

// var cat2 = {};
// cat2.name = "二毛";
// cat2.color = "黑色";
// 函数 大写的,
function Cat(name,color) {
    this.name = name;
    this.color = color;
}
// 实例化的过程
var cat3 = new Cat('三毛','灰')
var cat3 = new Cat('四毛','绿')
console.log(cat3); 