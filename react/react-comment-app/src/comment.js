import React ,{Component} from 'react';
class Comment extends Component{
    render(){
        
        let {comment}=this.props;
        return (
            
                <div>
                    {comment.username}:{comment.content}
                </div>
           
        )
    }
}
export default Comment