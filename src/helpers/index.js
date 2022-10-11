const createObject = (arr) => {
  return {
    cards: arr.map((number, i) => ({
      number,
      open: true,
      selected: false,
      correct: false,
      id: i,
    }))
  }
};

export const shuffle = array => array.sort(() => Math.random() - 0.5);

export const primeNumberGenerator = (start = 2, end = 60, maxLength = 32) => {
  let primeNumbers = [];
  nextPrime: for (let i = start; i <= end; i++) {
    for (let j = start; j < i; j++) {
      if (i % j === 0) continue nextPrime;
    }
    if (primeNumbers.length >= maxLength) break;
    primeNumbers.push(i);
    primeNumbers.push(i);
  }
  return createObject(primeNumbers);
};
