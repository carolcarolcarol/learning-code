var pathSum = function(root,sum){
    let res = []
    function preOrder(node,path){
        if(!node) return;
        let val = node.val;
        path.push(val);
        if(node.left ===null && node.right === null){
            // 如果一个节点的左右节点都是空，说明这条路线已经遍历到最底层，那么就可以把这条路线上的所有数据进行相加，和给定的sum值进行对比，如果相等，就把这条路线保存到res数组里。
            if(path.reduce((a,b) => a + b, 0) ===sum){
                // reduce() 是数组的归并方法，与forEach()、map()、filter()
                // 等迭代方法一样都会对数组每一项进行遍历，
                // 但是reduce() 可同时将前面数组项遍历产生的结果与当前遍历项进行运算，这一点是其他迭代方法无法企及的
                // 求数组项之和
                // var arr = [3,9,4,3,6,0,9];
                // var sum = arr.reduce(function (prev, cur) {
                //     return prev + cur;
                // },0);
                // 由于传入了初始值0，所以开始时prev的值为0，cur的值为数组第一项3，
                // 相加之后返回值为3作为下一轮回调的prev值，然后再继续与下一个数组项相加，
                // 以此类推，直至完成所有数组项的和并返回。
                
            
                // arr.reduce(function(prev,cur,index,arr){
                //     ...
                //     }, init);
                    
                //     其中，
                //     arr 表示原数组；
                //     prev 表示上一次调用回调时的返回值，或者初始值 init;
                //     cur 表示当前正在处理的数组元素；
                //     index 表示当前正在处理的数组元素的索引，若提供 init 值，则索引为0，否则索引为1；
                //     init 表示初始值。
                    
                   
                res.push(path);
                return;
            }

        }
        preOrder(node.left,path.slice(0));
        // slice() 方法可从已有的数组中返回选定的元素。
        // 如果 end 未被规定，那么 slice() 方法会选取从 start 到数组结尾的所有元素。
//         start	必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。
// end	可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。
// 返回值
// 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
        preOrder(node.right,path.slice(0));
        
    }
    preOrder(root,[]);
    return res;
}