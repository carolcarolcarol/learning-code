import React from "react";
import Beer from "./Beer.js"
class Results extends React.Component {
    render(){
        if(this.props.loading){
            return <div>Loading...</div>
        }
        return (
            <div className="results">
                <div className="beers">
                   {
                    //    在main之中，将this.state.beers传递过来了。这个就是main请求来的数据，啤酒的详情。可以打印出来看看
                       this.props.beers.map((details,i) => <Beer details = {details} key = {details.id}></Beer>)
                    //    列表循环时，一定要给一个key,给一个索引，id一定是唯一的。当这个列表要修改时，可能只是数组中的某一项修改了，有了唯一的id它可以根据这个key去修改那一项，而不用更新所有的内容。有点类似数据库的id吧。
                   }
                </div>
               
            </div>
        )
    }
}
export default Results;