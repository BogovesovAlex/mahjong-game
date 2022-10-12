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

export const primeNumberGenerator = () => {
  const prime = to => [...Array(to - 1).keys()].map(i => i + 2).filter(n =>
    [...Array(n - 2).keys()].map(i => i + 2).reduce((acc, x) => acc && n % x !== 0, true));

  const primeNumbers = [...prime(58), ...prime(58)];

  return createObject(primeNumbers);
};
