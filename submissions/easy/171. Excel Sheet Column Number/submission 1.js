/**
 * @param {string} s
 * @return {number}
 */
 var titleToNumber = function(s) {
    var dict = {
        'A': 1,
        'B':2,
        'C':3,
        'D':4,
        'E':5,
        'F':6,
        'G':7,
        'H':8,
        'I':9,
        'J':10,
        'K':11,
        'L':12,
        'M':13,
        'N':14,
        'O':15,
        'P':16,
        'Q':17,
        'R':18,
        'S':19,
        'T':20,
        'U':21,
        'V':22,
        'W':23,
        'X':24,
        'Y':25,
        'Z':26
    }
    var res = 0
    if(s.length === 1){
        return dict[s]
    }
    s.split('').forEach(function(curr,index,arr){
        res += dict[curr]*(Math.pow(26,arr.length-1-index))
    })
    return res
}