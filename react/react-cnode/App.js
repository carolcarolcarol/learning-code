import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

// mvvm
// view视图 render?
// model 数据
// model和view是绑定的,model变了，view会自动更新

// 页面
// -列表 /?tab=all
// -详情 /topic

class App extends React.Component{
  constructor(){
    super();
    // model 
    this.state = {
      // 组件涉及到的变量都应定义在this.state里面
      // 渲染的时候取content属性，传给后端的时候取params属性
      tabs:[{content:'全部',params:'all'},
        {content:'招聘',params:'job'},
      {content:'精华',params:'good'},
      {content:'分享',params:'share'},
      {content:'问答',params:'ask'}],
      tab:'all',
      isLoading:true,
      lists:[]

    }
  }

  handleGetPost(){
    const {tab} = this.state;
    // 总条数/limit（每页条数）=总页数
    axios({
      url:'https://cnodejs.org/api/v1/topics',
      params:{
        tab: tab,
        page: 1 ,
        limit: 40
      }
    })
    .then(res=>{
      // 修改list状态
      // console.log(res.data);
      this.setState({
        lists:res.data.data,
        isLoading:false
      })
     
    })
    .catch(err=>{
      // 如果请求出错了，也要把正在加载关掉
      this.setState({
        isLoading:false
      })
    })
    

  }
  
  // 生命周期
  // APP被reactdom渲染到Pc上
  // 渲染的流程---》生命周期
  componentDidMount() {
    // // 完成挂载的时间点
    // const {tab} = this.state;
    // // 总条数/limit（每页条数）=总页数
    // axios({
    //   url:'https://cnodejs.org/api/v1/topics',
    //   params:{
    //     tab: tab,
    //     page: 1 ,
    //     limit: 40
    //   }
    // })
    // .then(res=>{
    //   // 修改list状态
    //   // console.log(res.data);
    //   this.setState({
    //     lists:res.data.data
    //   })
    // })
    this.handleGetPost();
    

  }
  handleTabChange=(event)=>{
    // 箭头函数 this由定义位置决定
    // 到底点了哪一个tab
    // event.target点了谁，谁就是event.target
  
    const  tab =event.target.getAttribute('data-tab');
    // 得到点了哪个tab后，发个请求
    this.setState({
      tab,
      isLoading:true
    },()=>{
      // setState异步
      this.handleGetPost()
    })
   


  }
  handelChange=(event)=>{
    this.setState({
      value:event.target.value
    })

  }
  render(){
    const {lists,tabs,tab,isLoading,value} = this.state;
    // 在render里用Js表达式要用{}
    // view
    return (
      <div>
        {/* 非受控组件要取里面的值必须：取到真实dom节点,dom.value,受控组件就只要得到this.state就可以 */}
        {/* 现在更多使用受控组件，而较少用dom操作 */}
        {/* 受控组件 value+onchange,输入框里的内容受本组件里面state控制 ,要改变首先要触发Onchange事件，Onchange里改变this.state,再渲染这个改变到页面上，*/}
        {/* 如果写的是value而不是defaultvalue，则不能更改其内容 */}
        {/* 输入框里的内容不受任何限制则是非受控组件 */}
        <input type="text" placeholder="1234" value={value}
        onChange={this.handelChange}></input>
                {/* react不渲染那些值为false,undefined，null,空数组的内容 ,如果isloading为ture会显示正在加载中，如果为false什么也不显示*/}
        {isLoading && '正在加载中....'}
          {lists.length === 0 &&'暂无文章请重试'}
          {
            tabs.map((tabobj,i)=>{
              return (
                <div key={i} data-tab={tabobj.params}
                className={tabobj.params === tab? 'high-light':''}
                  onClick={this.handleTabChange}>
                  {tabobj.content} 

                  </div>
              )
            })
          }
          {
            // jsx(html+js)如果存在数组，react会自己把数组展开
            // react列表渲染
            // 不要用map来循环，更好的是用foreach
            lists.map((list,i)=>{
              return(
                <div key={i}>
                  {list.title}
                  </div>
              )
            })
          }
      </div>
    )


  }
}

export default App;
