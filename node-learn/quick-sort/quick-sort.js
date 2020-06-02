function partition(num,left,right){
    if(left >= right) return;
   let provit = num[left];
   while(left<right){
       //left找比基准值大的数，放到后面
       //    right找比基准值小的数，放到前面去
    //    一次是右指针从后往前扫，一次是左指针从前往后扫
    // 左右指针交替扫描。找到符合的数就赋值，找不到就继续走。（找不到的那个指针是可以连续走的，走到找到一个符合的数再停下来，换另一个指针走）
    // 左指针扫描到比基准值大的数，就直接把值赋给右指针当时指的数
    // 右指针扫描到比基准值小的数，就直接把值赋给左指针当时指的数
    // 由于指针的值是直接赋值的，所以会出现重复，最后重复的那个数刚好是扫描完毕，左指针和右指针相撞时的那个数，由于先前保留了基准值，所以直接把基准值赋给这个数。因为由于左右指针扫描过一轮，那么这个基准值就该放在左右指针扫描后相遇的位置。
    // 如果左边设为基准值，则要从右指针开始扫描，如果右边设为基准值，则要从左边开始扫描。
    

    // 基准值在左边，从右边开始扫描，找比基准值小的数
    // 这种循环要把外层循环的条件附加到内层里？？？？？？
    while(left<right&&num[right]>=provit) right--;
    num[left] = num[right];
    while(left<right&&num[left]<=provit) left++;
    num[right]=num[left];
    


}
num[left] = provit;
// return left;
 partition(num,0,left-1);
 partition(num,left+1,right);

}
const arr = [8,9,7,-1,5];
const quickSort = function(arr){
    partition(arr,0,arr.length-1);
}
// partition(arr,0,arr.length-1);
quickSort(arr);
console.log(arr);
