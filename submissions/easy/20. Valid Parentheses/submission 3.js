/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if(s.length % 2 != 0 || !s) return false;
    
    let verifications = s.length / 2;

    for (i = 0; i <= verifications; i++) {
        s = s.replace(/\(\)|\[\]|\{\}/g, "");
    }

  return s.length == 0 ? true : false;
};