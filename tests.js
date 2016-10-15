'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes.js');
var testSumOfPrimes = lib.sumOfPrimes;

describe("Verify that the sum of primes are accurate ", function () {

  it("Should return 129 for 30", function () {
    assert(
      testSumOfPrimes(30), 129
    );
  });

  it("Should return 0 for 0", function () {
    assert(
      testSumOfPrimes(0) === 0
    );
  });

  it("Should return 5 for 3", function () {
    assert(
      testSumOfPrimes(3), 5
    );
  });

  it("Should return 17 for 9", function () {
    assert(
      testSumOfPrimes(9), 17
    );
  });

  it("Should return 28 for 11", function () {
    assert(
      testSumOfPrimes(11), 28
    );
  });

  it("Should return 0 for negative inputs", function () {
    assert(
      testSumOfPrimes(-7) === 0
    );
  });

  it("Should return 0 for string inputs", function () {
    assert(
      testSumOfPrimes("") === 0
    );
  });


  it("Should return 0 for string inputs", function () {
    assert(
      testSumOfPrimes("777") === 0
    );
  });


  it("Should return 0 for 1", function () {
    assert(
      testSumOfPrimes(1) === 0
    );
  });


  it("Should return 0 for [5,22]", function () {
    assert(
      testSumOfPrimes([5, 22]) === 0
    );
  });

});