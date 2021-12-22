/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let verifications = s.length / 2;

  for (i = 0; i <= verifications; i++) {
    s = s.replace(/\(\)|\[\]|\{\}/g, "");
  }

  return s.length == 0 ? true : false;
};