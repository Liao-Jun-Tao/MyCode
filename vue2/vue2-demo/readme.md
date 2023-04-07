# vue 2.0 语法

- 公司用 react , 但是我们只会 vue 怎么回答

  1. vue 和 react 都是当下最好的 MVVM 开发框架
     都是组件化思想和数据驱动
  2. vue 3.0 composition api + hooks 函数编程
     两个越来越像
  3. 当选择 vue 作为主要学习开发框架, 相信自己
     如果做 react 也可以很快熟悉

- vue 2.0 和 3.0 有何区别

  1. 面向对象编程和函数式编程
     composition api + setup 语法糖
     代码风格不用为了面向对象而面向对象 this 基本不用
     composition api 很好用
  2. hooks 编程 useRouter useStore
  3. 老版本项目切换回去也很快, 主打学习 vue 3.0

- 在工程化的思维下, 开发 vue 项目的本质是?
    写的代码不一定最终运行的代码
  1. .vue 组件为主
     template script style 三明治
  2. 使用相应的 loader 将代码编译为浏览器可执行的 js css 文件
     - vue-loader 处理 .vue 文件
     - style css-loader style-loader stylus-loader
     - script + template
       vue-loader mvvm {{}} state
        - vue 3.0   setup API 
        - vue 2.0  类式编程
    js  babel-loader
