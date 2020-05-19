import React,{Component} from 'react';

//做表单
class CommentInput extends Component{
  constructor(){//构造函数
    super();//父类的构造函数先执行
    this.state = {
      username:'满船星梦',
      content:'压星河'
    }

  }

  // react组件 render是必须的，负责页面输出
  // state是内部数据，pros是外部数据，
  render(){
    let {username,content} = this.state;
    return (
        <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名:</span>
          <div className="comment-field-input">
            <input type="text" value={username}
            onChange={this.handleUsernameChange.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容:</span>
          <div className="comment-field-input">
            <textarea value={content}
            onChange={this.handleContentChange.bind(this)}
            ></textarea>
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    
    )
}
 handleUsernameChange(event){
  
   this.setState({
     username:event.target.value
   })
 }
 handleContentChange(event){
  
   this.setState({
     content:event.target.value
   })
 }
 handleSubmit(){
   const {username,content} = this.state;
   this.props.onSubmit({username,content});//pros把数据（解构出来的username,content)）交给上一级---commentapp去处理
   this.setState({
     content:''

   })
 }
}
export default CommentInput;