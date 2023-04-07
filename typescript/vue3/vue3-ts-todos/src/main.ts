import { createApp } from 'vue'
import App from './App.vue'
// 接口
// 0 draft 1 发布 2 首页 -1 删除
// enum 枚举类型
enum PostStatus {
      Unpublished,
      published,
      Draft
}
interface Post {
      title: string;
      content?: string;  // ? 可选
      status: PostStatus;
}

let post:Post = {
      title:'One Day',
      content: '字节面试来了',
      status: PostStatus.Unpublished
}

createApp(App).mount('#app')
