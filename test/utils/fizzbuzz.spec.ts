import { assert } from 'chai'
import FizzBuzz from 'utils/fizzbuzz'

describe('fizzbuzz Tests', () => {
  it("should return '5' for 1", () => {
    const result = new FizzBuzz().of(1)
    assert.equal(result, '1')
  })

  it("should return 'fizz' for 3", () => {
    const result = new FizzBuzz().of(3)
    assert.equal(result, 'fizz')
  })

  it("should return 'buzz' for 5", () => {
    const result = new FizzBuzz().of(5)
    assert.equal(result, 'buzz')
  })

  it("should return 'fizzbuzz' for 15", () => {
    const result = new FizzBuzz().of(15)
    assert.equal(result, 'fizzbuzz')
  })
})
