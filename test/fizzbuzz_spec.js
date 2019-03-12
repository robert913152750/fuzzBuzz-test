var should = chai.should()
describe('function fizzbuzz', function () {
  it("if number can be divisible by 3 return 'Fizz'", function () {
    var result = fizzBuzz(12)
    result.should.be.equal('Fizz')
  })
  it("if number can be divisible by 5 return 'Buzz'", function () {
    var result = fizzBuzz(20)
    result.should.be.equal('Buzz')
  })
  it("if number can be divisible by 3 and 5 return 'Fizz'", function () {
    var result = fizzBuzz(15)
    result.should.be.equal('FizzBuzz')
  })
  it("if number can not be divisible by 3 or 5 return number", function () {
    var result = fizzBuzz(22)
    result.should.be.equal(22)
  })
})