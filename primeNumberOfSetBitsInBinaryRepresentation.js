const countPrimeSetBits = (left, right) => {
  let counter = 0;

  for (let i = left; i <= right; i++) {
    let currentBinaryNumber = i.toString('2');
    let numberOfOneBits = 0;

    for (let j = 0; j < currentBinaryNumber.length; j++) {
      if (currentBinaryNumber[j] === '1') numberOfOneBits++;
    }
    if (isPrime(numberOfOneBits)) counter++;
  }

  return counter;
};

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

console.log(countPrimeSetBits(10, 15));
