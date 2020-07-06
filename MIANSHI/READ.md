# 有赞一面凉经

css选择器有哪些

选择器的优先级
1,0,0,0 style=""
0,1,0,0 id
0,0,1,0 class
0,0,0,1 元素 div h2
0,0,0,0 * > + ~ 
<!-- 10个class和1个id,id优先级更高 -->
a,b,c,d,e,f,g,h,i


flex布局

postion有哪些属性

absolute，relative，fixed定位的区别
相对于什么定位
相对于包含块、

es6新特性

es5和es6写法上有什么不同

let,const,var的区别
块级：let,const,
var没有块级等
var:变量提升？？
暂时性死区？？？？？、

箭头函数和普通函数的区别
1.this
普通函数可以new,箭头函数不能new,普通函数this没确定，但是箭头函数确定了，所以new也没什么意义。

js异步处理方式有哪些

promise有哪些静态属性方法
promise.all
promise.race
Promise.allSettled

js的数据类型


什么是闭包，闭包可以用来做什么

js有哪些类型检查的方法

instance of在原型链上的查找方式，是递归还是...？
1.判断构造上面存不存在一个symbol.hasinstance的方法，如果有的话，则取这个方法的返回值
，否则就判断左边这个对象的原型链上面，存不存在右边这个构造函数的prototype



call,bind,apply的区别

浏览器事件模型，一个点击按钮点完发生了什么？
事件流



如何对多个事件进行处理？
1.有一万个li节点，给这些节点绑上事件?事件代理
2.全局事件一定要清理

跨域，同源策略

jsonp的原理

cors跨域有哪些头部

cookie,seesion,localstorage的区别