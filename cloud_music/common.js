window.onload = function(){
    const tabLinks = document.querySelectorAll('.tabber a')
    tabLinks.forEach(function(link){
        link.addEventListener('click',function(event){
            event.preventDefault();//阻止跳转
            document.querySelector('.selected').classList.remove('selected');//当有按钮点击事件时，需要取消之前的下划线
            this.classList.add('selected');//谁点了a标签，就给谁加这个事件（下划线）


        },false)
    })
}
fetch('http://localhost:3000/banner')//fetch请求数据得到的是二进制文件
    .then(data => data.json())//将数据转为json格式
    .then(data =>{
        console.log(data);
    })