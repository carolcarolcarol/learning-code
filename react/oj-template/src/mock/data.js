// mockjs 假数据 前端开发时可以用一下
import Mock from 'mockjs';
// mock.mock会拦截这次请求，为这次请求提供返回值
export default Mock.mock('/posts/',
'get',{
    success:true,
    title:'文章a',
    content:'今天太阳好大',
    'list|5-10':[{
        'title':'@title()',
        'email':'@email',
        'id':'@id',
        'key|+1':1
        // 假数据随机生成一个标题
    }]

    // 作业 
}


)
