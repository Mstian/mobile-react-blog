逻辑组件 Containers
业务组件 Components
公共样式 style


开发中遇到的问题以及搜索到的答案

1. react路由库用哪个为什么（react-router和react-router-dom）
答案：https://www.zhihu.com/question/359275570

2. 有的组件为什么要用withRouter？
答案：https://segmentfault.com/q/1010000015964411

3. react-hooks使用介绍
答案：https://juejin.im/post/6844903889255268365

4. 如何对组件状态缓存，比如列表页进详情页，从详情页退出时列表页的滚动条等状态与进入详情页之前一致（vue中有keep-alive组件）
答案：https://www.npmjs.com/package/react-router-cache-route 
     https://www.jianshu.com/p/a9e16b9eb210

5. js城市简单定位api
答案：https://blog.csdn.net/m0_37285193/article/details/80406518

6. 默认首次初始化jsx中渲染的数组或对象变量时最好加上<any>否则会报错
答案：`const [articleList, setArticleList] = React.useState<any>([])`在使用 list 时直接用item.name报错

7. useHistory 不能获取到组件通过路由配置传递过来的参数，可以使用withRouter中间件，然后通过props获取
答案：`let homeKey = props.match.params.key || ""`

