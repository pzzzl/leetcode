/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    let count = 0;
    for(i = 0; i < nums.length; i++) {
        let str = nums[i].toString().length
        str%2==0 ? nums[i] = 1 : nums[i] = 0
    }
    for(i = 0; i < nums.length; i++) {
        nums[i] == 1 ? count += 1 : count += 0
    }
    return count
};