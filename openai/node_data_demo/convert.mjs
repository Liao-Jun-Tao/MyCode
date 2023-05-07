import fs from 'fs';

// 读取 posts.json 文件中的数据
const postsData = JSON.parse(fs.readFileSync('./data/posts.json'));

// 对数据进行转换操作
const transformedData = postsData.map((post) => ({
  promot: `${post.title} -->`,
  completion: ` ${post.category}$!`,
}));

// 将转换后的数据写入 posts_new.json 文件
fs.writeFileSync(
  './data/posts_new.json',
  JSON.stringify(transformedData),
);