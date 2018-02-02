'use strict';

const expect = require('chai').expect;
const fizzbuzz = require('../fizzBuzzer');

describe('fizzbuzz', function() {
  it('should return fizz', function(){
    const fizzCase = [ 
      { input: 3, expected: 'fizz'},
      { input: 6, expected: 'fizz'}
    ];

    fizzCase.forEach(function(input) {
      const answer = fizzbuzz(input.input);
      expect(answer).to.be.eq(input.expected);
    });
  });

  it('should return buzz', function() {
    const buzzCase = [{ input: 5, expected: 'buzz' }, { input: 10, expected: 'buzz' }];

    buzzCase.forEach(function(input) {
      const answer = fizzbuzz(input.input);
      expect(answer).to.be.eq(input.expected);
    });
  });

  it('should return fizz-buzz', function() {
    const fizzbuzzCase = [{ input: 15, expected: 'fizz-buzz' }, { input: 30, expected: 'fizz-buzz' }];

    fizzbuzzCase.forEach(function(input) {
      const answer = fizzbuzz(input.input);
      expect(answer).to.be.eq(input.expected);
    });
  });

  it('should return numbers', function() {
    const fizzCase = [{ input: 2, expected: 2 }, { input: 4, expected: 4 }];

    fizzCase.forEach(function(input) {
      const answer = fizzbuzz(input.input);
      expect(answer).to.be.eq(input.expected);
    });
  });

  it('should not take bad inputs', function() {
    const badCase = [{ input: '4'}, { input: ''}];

    badCase.forEach(function(input) {
      expect(function(){
        fizzbuzz(input.input);
      }).to.throw(Error);
    });
  });
});