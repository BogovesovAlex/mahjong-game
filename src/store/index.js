import { createStore } from 'redux';
import { primeNumberGenerator, shuffle } from '../helpers';

const arrayCards = primeNumberGenerator();
shuffle(arrayCards.cards)

const initialState = {
  cards: arrayCards
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECTED':
      return {
        ...state,
        cards: {
          cards: state.cards.cards.map(card => {
            if (card.id === action.payload) {
              return {
                ...card,
                selected: true,
              }
            }
            return card;
          }),
        }
      }
    case 'OPENED':
      return {
        ...state,
        cards: {
          ...state.cards,
          cards: state.cards.cards.map(card => {
            return {
              ...card,
              open: false
            }
          })
        }
      }
    case 'CORRECT':
      return {
        ...state,
        cards: {
          cards: state.cards.cards.map(card => {
            if (action.payload.includes(card.id)) {
              return {
                ...card,
                correct: action.correct,
                selected: false
              }
            }
            return card;
          })
        }
      }
    default:
      return state
  }
};

export const store = createStore(messageReducer);