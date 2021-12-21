/**
 * @param {number[][]} A
 * @return {number[][]}
 */
 var flipAndInvertImage = function(A) {
    for(i = 0; i < A.length; i++) {
        let piece = A[i]
        piece.reverse()
        for(j = 0; j < piece.length; j++) {
            if(piece[j] == 0) {
                piece[j] = 1
            }
            else {
                piece[j] = 0
            }
        }
    }
    return A
};