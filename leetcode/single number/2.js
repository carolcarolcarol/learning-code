var singleNumber = function(nums) {
    let temp = 0;
    for (let i = 0; i < nums.length; i++)
      temp ^= nums[i];
    return temp;
  };
  
 