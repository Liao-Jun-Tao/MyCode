// js 如何提升数据的完整性
// const num:Number = 1112
// num = "ddd"
// 接口 接头
// js  为何没有? 弱类型 js 有太多糟粕 接口也没有
// 自定义的 检查数据, 代码在运行之前就报错
// SQL 定义表
// vscode 用 ts写的
// js 有时候错误都不知道怎么发生的 99.99 不出错
export interface IProduct {
  id: number;
  title: string;
  price: number;
  inventory: number;
}

// IProduct[]

const _products: IProduct[] = [
  { id: 1, title: "iPad 4 Mini", price: 500.01, inventory: 2 },
  { id: 2, title: "H&M T-shirt White", price: 10.99, inventory: 10 },
  { id: 3, title: "Charli XCX -Sucker  CD", price: 19.99, inventory: 5 },
];
export const getProducts = async () => {
  // 延迟加载
  await wait(1000);
  return _products;
};

export const buyProducts = async () => {
  await wait(1000);
  return Math.random() > 0.5; //抛硬币
};

function wait(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
