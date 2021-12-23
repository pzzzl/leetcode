/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x < 0) return false;
    
    x = x.toString(), y = [];
    
    for(i = x.length - 1; i >= 0; i--) {
        y.push(x[i]);
    }
    
    y = y.join("");
    
    return x == y ? true : false;
};