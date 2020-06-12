// 一开始的代码，搜索一次之后，第二次地址虽然改变，但是搜索出来的内容没有发生改变，必须刷新才能有变化
// 第二次路由还是/search/:searchTerm的形式，所以组件内容没有变化？
// 第一次  搜索的时候，路由变化了，根据规则匹配，显示组件内容，componentDidMOUNT
// 第二次，路由第二次路由还是/search/:searchTerm的形式，所以componentDidMount不会发生

import React from "react";
import propTypes from 'prop-types';
class Search extends React.Component {
    static contextTypes = {
        // static静态属性属于当前类
        router: propTypes.object.isRequired
        // 在参数里面应该有一个router,如果没有就无法跳转
    }
    // public属性 searchRef 标记   因为react里面不能做dom查询，例如queryselector等
    searchRef = React.createRef();
    handleSubmit=(e)=>{
        // 箭头函数的this会指向它的外层,组件本身，在这里this是searchRef的一个属性，searchref??????
        e.preventDefault();
        // 该方法将通知 Web 浏览器不要执行与事件关联的默认动作（如果存在这样的动作）。例如，如果 type 属性是
        //  "submit"，在事件传播的任意阶段可以调用任意的事件句柄，通过调用该方法，可以阻止提交表单。
        const searchTerm = this.searchRef.current.value;
        // current指向dom，比如current指向的是下文的input 那么得到的就是Input里面的值，也就是用户在输入框里输入的想要搜索的词
        // this.searchRef找到当前它指向的是哪个元素
        // 拿到用户在输入框中的值
        // 拿到用户要搜索什么，然后进行路由跳转，将用户搜索的内容显示在路由连接上
        //  console.log(this,'---------');
     
        // 找到当前路由对象
        // context上下文对象，可以在上下文contextTypes当中找到router对象
        this.context.router.history.push(`/search/${searchTerm}`);
        // 用history记得注意版本问题，可去package.json里查看版本信息

    }
    // 一开始只是创建了一个空的searchref，类似指针，但是当把它和Input绑定后
    // 其current值就会变成input元素，指向了Input表单
    // 通过searchRef找元素 
    // 表单imput绑一个searchref属性，可在current里找到当前指向？
    render(){
        console.log(this.searchRef);
        return (
            <div className = "search">
                {/* 表单 */}
               <form onSubmit={this.handleSubmit}>
                   <input type="text" ref={this.searchRef}
                   placeholder="Hoppy,Malt,Angry,New..."/>
                   <input type="submit" value="Search" />
               </form>
            </div>
        )
    }
}
export default Search;