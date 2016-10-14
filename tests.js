'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes.js');

describe("Verify that the sum of prime is accurate ", function () {

  it("Should return 129 for sum_of_primes(30)", function () {
    assert(
      lib.sum_of_primes(30), 129
    );
  });

  it("Should return 0 for sum_of_primes(0)", function () {
    assert(
      lib.sum_of_primes(0) === 0
    );
  });

  it("Should return 5 for sum_of_primes(3)", function () {
    assert(
      lib.sum_of_primes(3), 5
    );
  });

  it("Should return 17 for sum_of_primes(9)", function () {
    assert(
      lib.sum_of_primes(9), 17
    );
  });

  it("Should return 28 for sum_of_primes(11)", function () {
    assert(
      lib.sum_of_primes(11), 28
    );
  });

  it("Should return 0 for negative inputs", function () {
    assert(
      lib.sum_of_primes(-7) === 0
    );
  });

  it("Should return 0 for string inputs", function () {
    assert(
      lib.sum_of_primes("") === 0
    );
  });



  it("Should return 0 for string inputs", function () {
    assert(
      lib.sum_of_primes("777") === 0
    );




  });


  it("Should return 0 for sum_of_primes(1)", function () {
    assert(
      lib.sum_of_primes(1) === 0
    );
  });


  it("Should return 0 for sum_of_primes([5,22])", function () {
    assert(
      lib.sum_of_primes([5, 22]) === 0
    );
  });

});