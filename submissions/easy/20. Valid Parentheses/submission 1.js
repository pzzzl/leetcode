/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    this.s = s, this.verifications = this.s.length / 2;

  for (i = 0; i <= this.verifications; i++) {
    this.s = this.s.replace(/\(\)|\[\]|\{\}/g, "");
  }

  return this.s.length == 0 ? true : false;
};