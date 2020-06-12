
// yarn add prop-types
// yarn add slugify
// 防止组件之间传参不正确，一定要传参
import React from 'react';
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import slug from 'slugify';

class Beer extends  React.Component{
    static propTypes = {
        // 专门一个库用来检测传参
        details: propTypes.object.isRequired
        // 一定要传参，并且这个传来的参数类型必须是OBJECT对象类型

    }
    render(){
        // 从results列表中传递一个参数过来
        const {name,labels,id} = this.props.details;
        const image = labels?labels.medium:'null.jpg';
        // 数据里data里每一项的labels是图片
        return(
            <div className="beer">
                <Link to={`/beer/${id}/${slug(name)}`}>
                    {/* slugify处理地址栏的一些乱码 */}

                
                {/* link生成一个链接 ,link把要生成链接的h2包裹起来*/}
                <h2>{name}</h2>
                <img src={image} alt=""></img>
                </Link>
            </div>
        )
    }
}
export default Beer;