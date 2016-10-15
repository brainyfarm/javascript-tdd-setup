// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

module.exports = {

  sumOfPrimes: function(num) {
    if(typeof(num) !== "number"){
      return 0
    }

    /**
     * isPrime
     * Test if an integer (x) is a prime number
     * @param {any} x
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