1. 做react/vue项目， 坊一个音乐类的项目
2. 做一个上线的业务 思路 架构 技能点

- react 组件由 组件component实例和一个css文件 styl
    不一定要用官方create-react-app 
    可以从 自己的项目模板开始
    类文件大写 一个文件夹一个组件
- 单页应用
  只有一个页面的应用

- 根据界面 可以分析出头尾不变 由Route 显示不同的页面
- Loading 组件
  哪个目录下创建
  components 路由级别组件
  Loading 服务于任何 list api列表组件 通用组件common

  1. 数据请求阶段， 显示loading
  2. 数据获取后，隐藏它
  父组件 要给loading 传参

  - api/ 分层的的能力 
    每个路由模块页面独立一个Js文件

  - 长的列表页面，在移动端 支持scroll
  https://github.com/ustbhuangyi/better-scroll/blob/master/README_zh-CN.md
  
  better-scroll 文档
  https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/installation.html
  