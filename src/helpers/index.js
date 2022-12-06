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

export const checkCardsForDispatch = (selectedCard, dispatch) => {
  if (selectedCard.length === 2 && selectedCard[0].number === selectedCard[1].number) {
    setTimeout(() => {
      dispatch({ type: 'CORRECT', payload: [selectedCard[0].id, selectedCard[1].id], correct: true });
    }, 1000);
  } else {
    if (selectedCard.length >= 2 && selectedCard[0].number !== selectedCard[1].number) {
      setTimeout(() => {
        dispatch({ type: 'CORRECT', payload: [selectedCard[0].id, selectedCard[1].id], correct: false });
      }, 500);
    };
  }
}

const shuffle = array => array.sort(() => Math.random() - 0.5);

export const primeNumberGenerator = () => {
  const prime = to => [...Array(to - 1).keys()].map(i => i + 2).filter(n =>
    [...Array(n - 2).keys()].map(i => i + 2).reduce((acc, x) => acc && n % x !== 0, true));

  const primeNumbers = [...prime(58), ...prime(58)];

  shuffle(primeNumbers);

  return createObject(primeNumbers);
};
