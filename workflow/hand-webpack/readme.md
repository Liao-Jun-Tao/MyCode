# 手写webpack
- 依赖关系
    - webpackvite 本质? 
        1. main.js 类似的入口
            单个文件的视角
            index.js -> module test.js -> babel -> 分词 抽象语法数 AST
            -> import 2 require
        2. 整理出来依赖关系
        3. build 一个文件
            word.js -> mesage.js -> index
        