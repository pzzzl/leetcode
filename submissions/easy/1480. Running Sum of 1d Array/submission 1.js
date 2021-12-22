/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let outputNums = []
    for(i = 0; i < nums.length; i++) {
        let thisSum = 0
        for(j = i; j > -1; j--) {
            thisSum += nums[j]
        }
        outputNums[i] = thisSum
    }
    return outputNums
};