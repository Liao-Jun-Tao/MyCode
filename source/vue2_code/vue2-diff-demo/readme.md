- 不用 vite 如何让我们的代码跑起来
  模块化
  vite webpack 企业级的工程化工具
  中小型工程化工具 不需要那么复杂 立马把项目跑起来

npm i @babel/core parcel-bundler --save-dev
轻量级框架 以 html 作为入口文件

- 二次更新渲染细节

  - 如何更新 首先如何比对节点
  - 比 tag
    tag 类型都不一样
  - 比 data
  - 比 children

- vue 源码中学到了什么?
- 模块化, 职责划分

  - 一个函数/文件只做一件事
  - h.js 虚拟节点的生成
  - render.js 渲染
    - patchData.js
    - diff.js

- 虚拟 DOM 算法操作真实 DOM，性能高于直接操作真实 DOM
