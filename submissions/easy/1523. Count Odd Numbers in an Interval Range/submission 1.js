/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var countOdds = function(low, high) {
    let diff, evenLow, evenHigh, oddLow, oddHigh
    diff = high-low
    evenLow = (low%2 == 0 ? true : false)
    evenHigh = (high%2 == 0 ? true : false)
    oddLow = !evenLow
    oddHigh = !evenHigh
    
    if(evenLow && evenHigh) {
        return diff/2
    }
    if((oddLow && evenHigh) || (evenLow && oddHigh)) {
        return (diff+1)/2
    }
    if(oddLow && oddHigh) {
        return (diff+2)/2
    }
};