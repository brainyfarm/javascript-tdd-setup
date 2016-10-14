// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

module.exports = {
  sum_of_primes: function prime_list_to(num) {

    function isPrime(x) {

      for (var i = 2; i < x; i++) {

        if (x % i === 0)

          return false;
      }

      return true;

    }


    var sumOfPrimes = 0;
    var i = 2;
    while (i <= num) {
      if (isPrime(i)) {
        sumOfPrimes += i;
      }
      i++;
    }

    return sumOfPrimes;
  }
}