
// 类型 1.number数值型（不用加引号），js里面整数和浮点数没有区分，都是Number类型。
// 2，字符串类型 js里面单引号双引号没有区别 
// substring ，slice 切割字符串
let arr=[];
let nums = '631758924';
//console.log(typeof nums);  //typeof是运算符，得到常量的类型
// 1.删除当下第一位
// 2.第二位放到末尾去
arr.push(nums[0]);

let c = nums[1];
nums = nums.substring(2);
nums += c;
console.log(nums,arr);