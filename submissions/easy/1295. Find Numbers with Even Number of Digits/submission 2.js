/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    var count = 0
    for(i in nums) {
        nums[i].toString().length % 2 == 0 ? count++ : count = count
    }
    return count
};