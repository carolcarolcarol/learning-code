import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tabs, Divider, Table } from 'antd';
import 'antd/dist/antd.css'
import './mockjs/data.js';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allLessons:[],
      lessons:[]
    }
  }
  componentDidMount() {
    axios.get('/data')
      .then(data => {
        console.log(data, '-------------------')
        this.setState({
          allLessons: data.data.list,
          lessons:  data.data.list
        })
        // console.log(this.state.lessons)
      })
  }
  render() {

    // const dataSource = [
    //   {
    //     key: '1',
    //     name: '胡彦斌',
    //     age: 32,
    //     address: '西湖区湖底公园1号',
    //   },
    //   {
    //     key: '2',
    //     name: '胡彦祖',
    //     age: 42,
    //     address: '西湖区湖底公园1号',
    //   },
    // ];

    const columns = [
    {
        image:'图片',
        dataIndex:'image',
        key:'image',
    render: (image) => 
    {return <img src={image} alt=""  />
    }       


      }
     
     ];










    return (
      <div>
        <Table dataSource={this.state.lessons} columns={columns}  />
      </div>

    )

  }
}

// function App() {
  
// const { TabPane } = Tabs;
// function callback(key) {
//   console.log(key);
// }

//   return (
   
  
//     <Tabs defaultActiveKey="1" onChange={callback}>
//     <TabPane tab="全部" key="1">
//       1
     
//     </TabPane>
//     <TabPane tab="未学完" key="2">
//       2
     
//     </TabPane>
//     <TabPane tab="已学完" key="3">
//       3
     
//     </TabPane>
//   </Tabs>
//   )
// }
export default App;
