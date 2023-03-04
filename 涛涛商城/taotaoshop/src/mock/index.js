import Mock from "mockjs";

import swiperList from "./data/swiperList";
import cridList from "./data/cridList";
import categoryList from "./data/categoryList";
import productList from "./data/productList";


// 假接口满足什么? 数据  url
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

Mock.mock(/\/cridList/, "get", () => {
	return {
		code: 0,
		result: cridList,
	};
});

Mock.mock(/\/categoryList/, "get", () => {
	return {
		code: 0,
		result: categoryList,
	};
});

Mock.mock(/\/productList/, "get", () => {
	return {
		code: 0,
		result: productList,
	};
});


