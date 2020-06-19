index.js ,index.css
css全局写注释，按照组件来写


## ststic propTypes = {
##    onSubmit:PropTypes.func
## }
对传过来的值的类型进行检验。看是不是函数类型。规定必须传值过来，如果没有传值，则可以自己设置默认值
onSubmit:Proptypes.array检验是不是数组？
defaultprops默认值


## 渲染 挂载 
## // 我们把 React.js 将组件渲染，并且构造 DOM 元素然后塞入页面的过程称为组件的挂载（这个定义请好好记住）。其实 React.js 内部对待每个组件都有这么一个过程，也就是初始化组件 -> 挂载到页面上的过程。所以你可以理解一个组件的方法调用是这么一个过程：

## // -> constructor()
## // -> render()
## // // 然后构造 DOM 元素插入页面
## // 这当然是很好理解的。React.js 为了让我们能够更好的掌控组件的挂载过程，往上面插入了两个方法：

## // -> constructor() 初始化数据
## // -> componentWillMount() 即将挂载
## // -> render() 渲染组件
## // // 然后构造 DOM 元素插入页面
## // -> componentDidMount()
## componentWillMount 和 componentDidMount 都是可以像 render 方法一样自定义在组件的内部。挂载的时候，React.js 会在组件的 render 之前调用 componentWillMount，在 DOM 元素塞入页面以后调用 componentDidMount。
componentWillUnmount：组件对应的 DOM 元素从页面中删除之前调用。