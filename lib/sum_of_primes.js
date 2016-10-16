'use strict'

module.exports = {

  sumOfPrimes: function(num) {
    if(typeof(num) !== "number"){
      return 0
    }

    /**
     * isPrime
     * Test if an integer (x) is a prime number
     * @param {Number} x 
     * @returns Boolean
     */
    function isPrime(x) {

      for (var i = 2; i < Math.round(Math.sqrt(x)) + 1; i++) {
        if (x % i === 0)
          return false;
      }
      return true;
    }


    var primesSum = 0;
    var i = 2;
    while (i <= num) {
      if (isPrime(i)) {
        primesSum += i;
      }
      i++;
    }

    return primesSum;
  }
}