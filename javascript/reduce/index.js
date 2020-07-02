var arr = [1,2,3,4];
// reduce 可以快速得到数组之和
// 1.代码风格，reduce可读性强，reduce的返回值是一个值
// 链式调用
var sum = arr.reduce(function(pre,cur,index,arr){
     return pre+cur;
},0);
// 0这个初始值参数传不传有没有关系？
// 如果没有给initial_val（初始值），那么数组的第一项pre就直接变成inital_val
// 给了的话就从Initial_val开始 +arr[0]
// 判断是否传了初始值，可以从传参长度来判断，比如arguments 类数组 ，而类数组并不是真正的数组，可以用Array.from方式把它变成数组

console.log(sum);

// 语法
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// 参数
// 参数
// 描述
// function(total,currentValue, index,arr)
// 必需。用于执行每个数组元素的函数。
// 函数参数:
// 参数
// 描述
// total
// 必需。初始值, 或者计算结束后的返回值。
// currentValue
// 必需。当前元素
// currentIndex
// 可选。当前元素的索引
// arr
// 可选。当前元素所属的数组对象。
// initialValue
// 可选。传递给函数的初始值
// reduce和map




