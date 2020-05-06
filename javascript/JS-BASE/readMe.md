js-数据类型
六种数据类型
基础数据类型
null
undefined
string
bool
number

复杂数据类型
object  数组和函数,对象自变量，reg（正则表达式），获取时间（var f =Date.now()）都属于object类（array,function）
var d = {a:1,b:2}  ----对象自变量

不用先定义，而是运行时决定数据类型


二.定义变量的关键词
1.var
缺陷，var没有块级变量，在｛｝中定义的变量在{}外还能访问
let,const都有块级变量
2.let：定义变量后可变，能修改
3.const 常量，定义后不可修改，比如可用const定义π


三.==和===
//两个等号判断相等时，会把两个值换成相同类型转换
//三个等号判断相等时，不会进行隐式类型转换
// 凡是复杂数据类型，也就是object（引用）类型，以e,g为例，虽然同为
// ｛｝类型，但是存储在两个不同地方，这就意味着c,d,还有e,f都是指向不同地址的
// 地址不一样导致，两个等号或者三个等号判断时都不相等


四.盒模型
content-box
（width,height指的是内容的宽高，content区域的宽高）
每个盒子由四个部分（区域）组成，content,padding,border,margin
div盒子如果没有高度，其高度由内容决定
border在盒子外面，如果Border为1px,则盒子宽高各增加2px,左右两边，上下两边都增加1px，所以是2px

用js可取得盒子宽高
const box = doucument.querySelector('.box1');
console.log(box.offsetWidth,box.offsetHeight)



border-box(IE)
（width,height指的是盒子的宽高，border及以内的宽高）
如果给div设置box-sizing属性
box-sizing:border-box
那么content，border,padding这些在边框内部的东西会根据div设置的长宽分配空间，不会将空间再继续撑大
比如设置这个属性后，设置padding为1px，盒子宽高不会变成102，而是会变成98
没设置这个属性之前，padding和border会把盒子撑大


vw
viewport width 视窗的宽度
width:100vw;
在浏览器中100vw就是占满整个屏幕的宽度，
当用content-border的时候，用了width:100vw,还有border:10px；border会撑大盒子的宽度，比整个浏览器的宽度还要宽，所以这样就会有左右滑动（横向滚动条）的效果，然后再加上box-sizing的效果，就不会有横向滚动条了。