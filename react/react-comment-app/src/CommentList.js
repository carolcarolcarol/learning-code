import React,{Component} from 'react';
import Comment from './comment';
class CommentList extends Component{
    render(){
        console.log(this.props,'++++')
        let { commentts } = this.props;//this.pros调用父组件的内容，得到其中的comments数据,父组件里写了commen

    return (
    //    <div>
    //        {commentts.map((comment,i)=>{
    //         //    map遍历数组中所有元素并返回一个新的数组
    //         // i 数组下标，comment遍历的元素
    //         return (
    //             <div key={i}>
    //                 {/* 处于性能要求，循环时要加Key */}
    //                 {comment.username}:{comment.content}
    //                 kkk
    //             </div>
    //         )

    //        })}
           
    //    </div>
    <div>
        {commentts.map((comment,i)=><Comment comment={comment} key={i} />)}
    </div>
    )
    
}
}
export default CommentList;