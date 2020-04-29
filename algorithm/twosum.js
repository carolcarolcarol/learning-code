// // 题目：给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]


 //var twoSum;//变量声明
//var twoSum=function(nums,target){
// 第一种解法：暴力解法
//     let arr = [];//把两数的坐标放进去
 //    for(let i=0; i<nums.length; i++){
 //        for (let j=i+1; j<nums.length; j++){//j从i+1开始是因为，不能自己加自己
 //             if(nums[i]+nums[j] === target){
  //                arr=[i ,j];
  //                return arr;
  //            }
  //       }
  //   }
//}
// CONST定义常量后不能改变常量的类型。其他可以改变。
const twoSum=function(nums,target){


    let map = {};//json object
    nums.forEach(function(e,i){  //forEach是遍历数组的一种方式，其中e为数组里需要遍历的元素，i为那些元素的下标,例如输入console.log(e,i)得到的结果为2 0
   //     7 1
     //   11 2
    //    15 3
     
     map[e]=i; //[]表示一个json 里面的key是变量  ，这行代码是为了之后能通过key查找它的下标。
    //map[e]是遍历数组里具体的值，而i是数组里每一个具体值的下标。
    //比如 map[7],由于7在数组里的下标是1，那么console.log(map[7]);输出的结果就会是1.
    // 设置了这行之后，map[e],i都表示数组元素下标，nums[i]可以遍历数组里的元素
    })
    for(let i=0; i<nums.length; i++){
        let j = map[target - nums[i]]; //nums[i]是值，target是值。 9-2，j=7，寻找j是否存在于数组里，如果存在,输出j和i
        if(j && j !== i){
            return [i,j];
        }
        
    }
  
}
console.log(twoSum([2, 7, 11 , 15], 9));