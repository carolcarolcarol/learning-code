
const speed= document.querySelector('.speed')
const bar=document.querySelector('.speed-bar')
const video=document.querySelector('.flex')

// 鼠标在speedY轴上移动了多少距离，就让speed-bar，有颜色的那部分也移动多少距离
// e为形参，是handleMove事件里的事件参数
// 例如什么都不写的时候打印console.log(e)会打印出鼠标移动事件详细参数，如screenY，PageX(鼠标在浏览器上停留时的坐标）等
function handleMove(e){
    // 外边距不算到真实bom的宽高里面去，所以这里没有对外边距做处理，因为实际上已经去掉了外边距
    // 在这里this代表speed,offsetTop就是获取某一个dom结构到浏览器顶部的距离
    const y = e.pageY - this.offsetTop;
    // offsetHeight用于获取某dom结构的自身高度
    const percent=y / this.offsetHeight;
    // 最慢和最快的播放速率
    const min = 0.4;
    const max = 4;
    // Math.round返回一个数字四舍五入后最接近的结果
    const height = Math.round(percent*100) + '%';
    // ???
    const playbackRate = percent * (max-min) + min;
    bar.style.height=height;
    // textContent获取元素文本内容
    bar.textContent = playbackRate.toFixed(2)+'x';
    // video里的playbackRate是video自带的控制playbackRate的方法，把上文定义的playbackRate赋值给video.playRate不是上文自己定义的那个。
    video.playbackRate = playbackRate;
    
   
    
}

// 给speed添加一个鼠标移动监听事件,调用一个handleMove函数，该函数是自己写的。
// 当监听到鼠标在speed上执行mousemove鼠标滑动事件时，handleMove就会执行
speed.addEventListener('mousemove',handleMove)