import React from "react";
import Search from "./Search";
import Results from "./Results";
import Header from "./Header"
class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            beers:[],
            loading:true

        }
    }
    // url不一样？分析url不一样
    componentDidMount(){//生命周期
        // /的时候，把所有啤酒都查出来
        // search/:searchTerm 就查searchTerm
        // 匹配路径

        console.log(this.props.match.params)//得到路由中的参数部分，props由最外层的路由传进来，再解出来
        // 当输入的网址为：http://localhost:3000/search/dddd的时候，console.log显示的值为，
        // {searchTerm: "dddd"}
        // searchTerm: "dddd"
        // __proto__: Object
    //    所以在得到Params之后，要想知道，searh后的参数是什么，搜索的内容到底是什么，就需要获取params.searchTerm
    // 即为dddd
        const params = this.props.match.params || {}  // 例如Single????
        const searchTerm = params.searchTerm || undefined;//
        this.loadBeers(searchTerm);
        // 把获得到的要搜索的动态参数searchterm的值传入loadbeer里发送请求，并返回结果。如果有符合搜索词的内容，就返回结果，如果没有，那也没东西返回。
    }

    // 同一个路由，多次搜索,多次搜索变化的是动态参数：searchterm，用componentDidUpdate
    componentDidUpdate(prevProps){
        // console.log(prevProps);
        // console.log('did update');
        const currentSearchTerm = this.props.match.params.searchTerm;
        const oldSearchTerm = prevProps.match.params.searchTerm;
        // console.log(currentSearchTerm,oldSearchTerm);
        if(currentSearchTerm !== oldSearchTerm){
            this.loadBeers(currentSearchTerm)
        }


    }









    // 请求啤酒列表的数据
    // hops是默认赋值，如果外面传了值，就用外面的值，如果没有传值，就用hops
    loadBeers(searchTerm = "hops"){
    //    数据请求   fetch();
    const localStorageBeers = localStorage.getItem(`search-${searchTerm}`)
    // 放进去setitem的时候是，json.stringfy，json字符串
    if(localStorageBeers){
        const localBeers = JSON.parse(localStorageBeers);
        // 拿出来的时候，json.parse解析成为json object，json对象
        // JSON.stringify(),将value(Object,Array,String,Number...)序列化为JSON字符串
// JSON.parse(),　将JSON数据解析为js原生值?????///这里的值为什么要换来换去
// JSON.parse() 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。
// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);

// console.log(obj.count);
// // expected output: 42

// console.log(obj.result);
// JSON.parse('{}');              // {}
// JSON.parse('true');            // true
// JSON.parse('"foo"');           // "foo"
// JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
// JSON.parse('null');            // null



        this.setState({
            beers:localBeers,
            loading:false
        })
        return;
    }
    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
    .then(data => data.json())
    .then(data =>{
        const beers = data.data || [];
        this.setState({
            loading:false,
            beers
            // 把beers放在这里，有了数据就会自动更新，下面results里把beers传给了results,results
            // 又传给了Beer,Beer再把每一条信息的id,name等具体信息解构出来
        })
       
   
        // 与列表记录相关，根据searchitem变化
        localStorage.setItem(
            `search-${searchTerm}`,
            JSON.stringify(this.state.beers)
        )
        console.log(data);
        
    })
}
    render(){
        //集列表，搜索于一体，怎么做
        return (
            <div>
                <Header siteName="Beer Me!" />
                <Search />
                <Results beers = {this.state.beers} loading={this.state.loading} />
            </div>
        )
    }
}
export default Main;