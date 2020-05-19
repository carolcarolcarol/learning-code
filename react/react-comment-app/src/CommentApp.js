import React ,{Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './index.css'
class CommentAPP  extends Component {
    constructor(){
        super();
        this.state ={
            // this.pros是要找父级，所以这里用this.state？？？？？
            commentts:[{
                username:'奇奇白月光',
                content:'把时间原石藏在星星⭐里的浪漫法师'
            },{
                username:'铁罐二米八',
                content:'The truth is ,l am IROM MAN.The suit and l are one.'
            }]

        }

    }
    render(){
        const {commentts} = this.state;
    return (
       <div className="wrapper">
        <CommentInput a="1" onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList 
        // comments={[{username:'花卷',content:'卷福和华生太有爱了！'},{
        //     username:'铁虫一生推',content:'I just want to be like you.  Then l want you to be better.'
        // 
         commentts={commentts}   //这里必须写comments = ，是因为commentlist文件里写的是let {comments} =this.props吗
           //把commentlist调用this.pros所需要的内容传递给它。
        //    commentlist文件里写let {commentts} =this.props,那么父组件在这里就根据它想要的内容commentts，告诉它comments=.....
           />
        </div>
    )
}
handleSubmitComment(comment){
    // 函数里的comment是由commentlist传递过来输入在用户评论框内的数据
    let {commentts} =this.state;//获得上文定义好的comment数据
    commentts.unshift(comment);//把在评论内容框里的内容加在评论的最上一条
    this.setState({
        commentts:commentts  //评论：在commentapp this.state里设置好的评论+评论内容里自主输入发布的评论



// this.setState({
//     comments:[comment,...this.state.commentts]
//     // ...展开运算符
// }

    
// )

})
}
}
export default CommentAPP;