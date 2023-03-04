import Mock from "mockjs";

import iconList from "./data/iconList";
// import categoryList from "./data/categoryList";
import userList from "./data/userList";


// 假接口满足什么? 数据  url
Mock.setup({
	timeout: "50 - 1000", //随机的延迟时间,  模式请求耗时
});
//录播图  url  /swiperList
Mock.mock(/\/iconList/, "get", () => {
	return {
		code: 0,
		result: iconList,
	};
});

// Mock.mock(/\/categoryList/, "get", () => {
// 	return {
// 		code: 0,
// 		result: categoryList,
// 	};
// });

Mock.mock(/\/userList/, "get", () => {
	return {
		code: 0,
		result: userList,
	};
});
