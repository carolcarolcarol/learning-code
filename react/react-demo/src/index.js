// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { createStore,combineReducers ,applyMiddleware,compose} from 'redux'
// // 允许在redux中集成中间件的方法 applymiddleware
// import {get  } from 'axios'
// import thunk from  'redux-thunk'





// // redux中的重要部分：action ,reducer,state
// const counterReducer = function(state={count:1},action){
//   // dispatch action,reducer接收到action,根据类别判断给什么数据
//   // console.log(action)
//   // return state
//   switch(action.type){
//     case 'COUNT_ADD':
//       return {
//         ...state,
//         // ...state解构state?
//         count:state.count+1

//       }
      
 

//     case 'COUNT_REDUCE':
//       return {
//         ...state,count:state.count-1

//       }
//       default:
//         return state
 

// }
// }
// const postReducer =function(state={list:[{title:'你好'}]},action){
//     switch(action.type){
//       case 'LOAD_POSTS':
//         return{
//           ...state,list:action.payload
        
//         }
//         default:
//           return state
//     }
// }

// const rootReducers = combineReducers({
//   counter:counterReducer,
//   post:postReducer
// })
// // 需要使用中间件数组 compose
// const store = createStore(rootReducers, compose(applyMiddleware(...[thunk]),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
// // 把counterreducer作为一个实参，传给createstore,counterreducer才能作为一个reducer使用
// console.log(store)
// console.log(store.getState());
// // 想要改变reducer的值，需要使用dispatch派发一个action,action里面至少需要有两个参数，（type,payload）(想改的值，和action的type类型)
// // type区分action触发的类型，payload传递的数据
// store.dispatch({
//   type:'COUNT_ADD',
//   payload:{}

// })
// console.log(store)
// console.log(store.getState())
// store.dispatch({
//   type:'COUNT_REDUCE',
//   payload:{}

// })
// console.log(store)
// console.log(store.getState())


// // yarn add redux-thunk
// // redux本身不支持异步，中间件使得redux支持异步

// const getPostRequest = ()=>{
//   return get('https://jsonplaceholder.typicode.com/posts')
// }

// store.dispatch(async function(dispatch){
//   const res = await getPostRequest();
//   console.log(res)
//   dispatch({
//     type:'LOAD_POSTS',
//     payload:res.data
//   })
// })
// console.log(store)
// console.log(store.getState())

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { get } from 'axios'
import thunk from 'redux-thunk'

// redux中的重要部分：action，reducer, state
const counterReducer = function(state = { count: 1 }, action) {
  switch(action.type) {
    case 'COUNT_ADD':
      return {
        ...state, count: state.count + 1
      }
    case 'COUNT_REDUCE':
      return {
        ...state, count: state.count - 1
      }
    default:
      return state
  }
} 

const postReducer = function(state = { list: [{title: '你好'}]}, action) {
  switch(action.type) {
    case 'LOAD_POSTS':
      return {
        ...state, list: action.payload
      }
    default:
      return state
  }
}

// combineReducers用来整合多个reducer
const rootReducers = combineReducers({
  counter: counterReducer,
  post: postReducer
})

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(...[thunk]), // 需要使用中间件数组
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
) // 创建一个store

console.log(store)
console.log(store.getState())

// 想要改变reducer的值，需要使用dispatch派发一个action
// action里面需要两个参数   type   payload

store.dispatch({
  type: 'COUNT_ADD',
  payload: {},
})

console.log(store)
console.log(store.getState())

store.dispatch({
  type: 'COUNT_REDUCE',
  payload: {},
})

console.log(store)
console.log(store.getState())


const getPostRequest = () => {
  return get('https://jsonplaceholder.typicode.com/posts')
}

store.dispatch(async function(dispatch) {
  const res = await getPostRequest()
  console.log(res.data)
  dispatch({
    type: 'LOAD_POSTS',
    payload: res.data
  })
})

console.log(store.getState())
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();