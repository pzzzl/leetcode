/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    var out = []
    for(x in nums) {
        out.push(0)
    }
    for(i in nums) {
        for(j in nums) {
            if( (nums[j] < nums[i]) && (i != j) ) {
                out[i] += 1
            }
        }
    }
    return out
};