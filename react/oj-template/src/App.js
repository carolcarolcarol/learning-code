import React,{Component} from 'react';

import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import './mock/data.js'
//  数据和组件是分离的



// - 有一只狗，不允许别人摸，一旦摸它就会叫，然后就跑了
// 这只狗，跑二十秒会停下来然后不叫了
// class Dog extends component{
//   constructor(){
//     super();
//     this.state ={
//       isRunning:false,
//       isBarking:false
//     }
//   }
//   bark(){
//     this.setState({
//       isBarking:true
//     })
//     console.log('bark');
//   }
//   run(){
//     this.setState({
//       isRunning:true
//     })
//     console.log('run');
//   }
//  barkAndRun(){
//    this.bark();
//    this.run();
//    setTimeout(()=>{
//      this.setState({
//        isRunning:false,
//        isBarking:false
//      })
//      console.log('不叫了，停下来了')
//    },2000)
//  }
//  render(){

//    return(
//      <div onClick={this.barkAndRun.bind(this)}>
//        Dog
//      </div>
//    )
//  }
// }


// class Poem extends Component{
//   componentDidMount(){
//     console.log(this.p.offsetHeight)

//   }
//   render(){
//     const {content}=this.props;
//     return (
//       <p ref={(p) =>this.p=p}>
//         {/* 给一个函数，函数的返回值就是ref的值 */}
//         {/* this.p=p 把html标签p元素作为参数传过来给ref,对象的属性this.p=p */}
//         {/* ref 唯一id */}
//         {content}
//       </p>
//     )
//   }
// }
// function App() {
//   return (
//     <div className="App">
//        <Poem content="汉皇重色思倾国，御宇多年求不得。

// 杨家有女初长成，养在深闺人未识。

// 天生丽质难自弃，一朝选在君王侧。

// 回眸一笑百媚生，六宫粉黛无颜色。

// 春寒赐浴华清池，温泉水滑洗凝脂。

// 侍儿扶起娇无力，始是新承恩泽时。

// 云鬓花颜金步摇，芙蓉帐暖度春宵。

// 春宵苦短日高起，从此君王不早朝。

// 承欢侍宴无闲暇，春从春游夜专夜。

// "/>
//        {/* <Dog /> */}
//     </div>
//   );
// }




// 
class Post extends Component {
  render() {
    return (
      <div>
        <p>{this.props.msg}</p>
        <p>{this.props.content}</p>
      </div>
    )
  }
}
class Comment extends Component {
  render() {
    return (
      <div>
        Comment
      </div>
    )
  }
}
// 返回值是函数的函数，高阶函数
// url对应（‘./post),(Post)对应WrappedComponent
// 通用性的提供数据请求及更新的解决方案
// 
const  loadAndRefresh=(url) => (WrappedComponent)=>{
  // 返回组件
  return  class  extends Component{
    // 初始化
    constructor(){
      super();
      this.state=({
        msg:'',
        content:''
      })
    }
    // 在js里允许定义匿名类
    componentDidMount(){
      // 数据请求
      // 管住数据4
      this._loadData();

      
    }

    async _loadData(){
       this.setState({
         msg:'数据加载中...'
       })
       axios.get(url)
         .then(res=>{
          //  console.log(res.data)
          // 箭头函数里箭头不会被改写
          this.setState({
            msg:res.data.title

          })
         })
    }
    
    render(){     
      const props = {
          msg:this.state.msg,
          content:this.state.content
      }
      return(    
        // 显示ui ,和wrappedpost的关系是？
        // ...解构
        <WrappedComponent  {...props}/>
      )
    }
  }
    
}


// 面试题 生命周期 高阶组件
// 函数的返回值是组件
//  /posts 是 axios api 请求的url  /comments/
// 调换接口，复用性
// 接受Post组件作为参数
// 返回一个函数之后继续运行，再把Post组件返回去
// （Post）表示为谁进行接口的请求以及数据更新的服务
const WrappedPost = loadAndRefresh('/posts/')(Post);
// loadandrefresh封装加载更新
const WrappedComment = loadAndRefresh('/comments/')(Comment);



function App(){
  return(
    <div className="App">
      {/* <Post /> */}
      <WrappedPost />
      <WrappedComment />
    </div>
    
  )
}

export default App;
