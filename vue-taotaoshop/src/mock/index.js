import Mock from 'mockjs';
import productList from "./data/productList"
import swiperList from "./data/swiperList";
import sortList from "./data/sortList";
// import productList from "./data/productList";

Mock.setup({
  timeout: "50 - 1000", //随机的延迟时间,  模式请求耗时
});

//录播图  url  /swiperList

Mock.mock(/\/swiperList/, "get", () => {
  return {
    code: 0,
    result: swiperList,
  };
});

Mock.mock(/\/sortList/, "get", () => {
  return {
    code: 0,
    result: sortList,
  };
});

Mock.mock(/\/productList/, "get", () => {
    return {
      code: 0,
      result: productList,
    };
  });


