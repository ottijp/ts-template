import FizzBuzz from './utils/fizzbuzz'

const fizzbuzz = new FizzBuzz()
for (let i = 1; i <= 20; i++) {
  // eslint-disable-next-line
  console.log(`${i}: ${fizzbuzz.of(i)}`)
}
