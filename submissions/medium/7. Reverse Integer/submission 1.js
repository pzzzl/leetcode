/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    inferiorLimit = (Math.pow(-2, 31))
    superiorLimit = Math.pow(2, 31) - 1
    
    if((x >= inferiorLimit) && (x <= superiorLimit)) {
        signed = x < 0 ? true : false
        reversed = parseInt(x.toString().split('-').join('').split('').reverse().toString().split(',').join(''))
        if(signed) {
            higherOrEqualInferiorLimit = -reversed >= inferiorLimit ? true : false
            lowerOrEqualSuperiorLimit = -reversed <= superiorLimit ? true : false
            if(higherOrEqualInferiorLimit && lowerOrEqualSuperiorLimit) return -reversed
        } else {
            higherOrEqualInferiorLimit = reversed >= inferiorLimit ? true : false
            lowerOrEqualSuperiorLimit = reversed <= superiorLimit ? true : false
            if(higherOrEqualInferiorLimit && lowerOrEqualSuperiorLimit) return reversed
        }
        return 0
    } else {
        return 0
    }
};