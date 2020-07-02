// // reduce方法是怎么实现的呢？
// // 此版本有瑕疵，并未写到原型链上
// function reduce(arr,reduceCallback,initialValue){
//     // arr需要reduce的数组
// // 第一步：参数的校验
// // reduceCallback必须是个函数，reduce参数如下
// // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//    if(!Array.isArray(Arr)||!arr.length||typeof reduceCallback !=='function'){
//     //    或者-》只要一个为假，后面就不再执行
//        return [];
//    }else{
//        let hasInitialValue = initialValue !== undefined;
//     //    参数在调用reduce函数时来传递，如果没有传递initial_val，那么在这里会是undefined.
//     // undefined是一个特殊值，通常用于指示变量尚未赋值。比如调用函数时，应该提供的参数没有提供，该参数等于undefined
//     //    1.initialvalue处理，如果没有传这个值，就少执行一次，直接从pre开始加
//     // 2.reducecallback怎么合并？
//    }
// }

// reduce([1,2,3],function,0);


// // Array.prototype.reduceFn



function reduce(arr, reduceCallback, initialValue) {
    // 参数校验 ？ 
    if (!Array.isArray(arr) || !arr.length || 
    typeof reduceCallback !== 'function') {
        return [];
    } else {
        // initialValue  0  1
        // 定义中间变量
        let hasInitialValue =  initialValue !== undefined;
        // 分步法 定义变量
        let value = hasInitialValue?initialValue:arr[0]; //上一次的执行结果 
        for (let i = hasInitialValue? 0: 1; i < arr.length; i++) {
            value = reduceCallback(value, arr[i], i, arr); 
        }
        return value;
    }
}
reduce([1,2,3], function(pre, cur, index, arr){
    return pre + cur; //
});
// [1,2,3].reduce
// Array.prototype.reduceFn
