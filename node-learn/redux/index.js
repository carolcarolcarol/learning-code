
//createStore经过reducer生成store 状态默认值
// dispatch action也要经过reducer生成 store action用户触发
// reducer两者兼顾：要在内部判断到底是哪个，如果是用户触发，要对已有状态进行更新

const {createStore,combineReducers} = require('redux');

let isLogin = false;
let posts = [];
//action:纯对象 ({}),type字段区分这个action是做什么的,一般用常量，symbol无论传什么值，它生成的值都是不一样的，整个应用唯一
const LOGIN_STATUS = Symbol('LOGIN_STATUS');
const POSTS_STATUS = Symbol('s')
function loginReducer(state=isLogin,action){
// 此处state指上一次的状态 ,如果没能进入switch说明是第一次或者没有触发store.dispatch(loginaction)，那么此时进入default,state的值保持不变。
    switch(action.type){
        case LOGIN_STATUS:
            return !state
            
            // reduce返回新的状态state，而不是在原来基础上修改
        default:
            // dafault默认值，default表示进入不到前面的任何一个分支时
            return state;
            
    }
    // console.log(1)
    // return false;
}

function postsReducer(state=posts,action){
    switch(action.type){
        case POSTS_STATUS:
            return action.newPosts;
        default:
            return state;
    }
    // console.log(2)
    // return [];
}


const loginAction = {
    type: LOGIN_STATUS,
    // TYPE是必须要传的，还可传一些其他东西
    a:1
}
const postAction = { 
    type:POSTS_STATUS,
    newPosts:[{a:1},{a:2}]

}
const rootReducer = combineReducers({
    login:loginReducer,
    posts:postsReducer
})

//由reducer到store，由reducer生成store,借助引入的redux包中的createStore,状态存到store
// createStore(需要reduce的返回值）也调用了reducer，调用了多次？？
const store = createStore(rootReducer);
// createstore此处没有指定任何type，也就是不知道它到底是哪个reducer，所以进入不到任何case分支，只能用默认值default
// mapStateToProps底层是store.getState
console.log('now',store.getState());
console.log(store);
// // mapDispatchToProps用到的底层api是store.dispatch(),调用...dispatch可以让、
// redux知道状态改变了，由ui用户引起的
// uI（用户操作）变更会到action -> ACTION -> REDUCER
store.dispatch(postAction);
store.dispatch(loginAction);

// 拿到action的状态
// dispatch串联action->reducer,此处action有多个，reducer有多个，那串联之后，action会去到哪个reducer
// 由于redux无法区分，所以两个reducer都会去
// 所以区分要自己写代码区分
// 可以根据type里唯一的标识来区分

// dispatch action 之后，那么reducer里面的function loginReducer(state,action) ，state和action就有值了，可以进入判断，返回state的值，store也可以接受到，所以第二次从store.getState中取值的时候，state取反bianchengle true
console.log('now',store.getState())