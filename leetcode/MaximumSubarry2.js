var maxSubArray = function(nums){
    let ansMax = nums[0];
    let sum = 0;
    for(const num of nums){
        if(sum>0){
            //如果和大于0，则继续往后加，
            // 由于设定了初始sum为零，所以一开始和为数组的第一位元素的值（sum=num）
            //如果数组第一位元素的值为负，则和为这个负数，ansmax也为这个数
            //则第二次遍历时，直接取sum=num,如果第二位是正数，则和直接为那个正数，最大数也为那个正数，如果仍然是负数，那么就不进行累加，而是把每个连续遍历到的负数在max(ansmax,sum)里做比较，取最大的负数，这样万一数组里全是负数，就可找出最大的负数，如果并不全是负数，等到遍历到第一个正数时，由于之前的sum<0,直接将sum=num，也就是直接将和设置成了当前那个正数，由此可见，正数累加，而负数不累加进sum，只将sum设为num，也就是负数只比较大小不进行累加
            //让连续的负数比大小，让正数相加进sum
            sum += num;
        }else{
            sum = num;
        }
        //找出非连续的负数，并使其不能累加进最大值里，只要前一次sum大于这一次sum就说明出现了一个加上去不会让sum<0,也就是让以sum为条件的判断无法判断出其是负数的数字，就需要这一轮的判断
        ansMax = Math.max(ansMax,sum);//如果出现前一次sum是正数，后一位要加的数是负数，且这两位sum+num的值也为正的情况，要在这种情况下不加那个负数，就要当前sum与前一次sum作比较，一旦当前sum比前一次sum要小，就说明加了负数，这一行就是确保不加这个负数。
    }
    return ansMax;
}