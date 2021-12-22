/**
* @param {number} x
* @param {number} n
* @return {number}
*/
var myPow = function(x, n) {
    let prev
    if(x == 1) {
        return 1
    }
    if(x == -1 && n%2 == 0) {
        return 1
    }
    if(x == -1 && n%2 !== 0) {
        return -1
    }  
    if(n < 0) {
      prev = 1/x
      for(i = 0; i > n+1; i--) {
        prev *= 1/x
      }
      return prev  
    }  
    if(n == 0) {
      return 1 
    }
    if(n > 0) {
      prev = x
      for(i = 0; i < n-1; i++) {
        prev *= x
      }
      return prev  
    } 
  }