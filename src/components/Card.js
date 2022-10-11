import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import classes from './Card.module.scss'

const Card = () => {
  const dispatch = useDispatch();
  const [cardsArray, setCardAsrray] = useState([]);

  const cards = useSelector(state => state.cards.cards);
  
  const cardHandler = event => dispatch({ type: 'SELECTED', payload: +event.target.id });

  useEffect(() => {
    setCardAsrray(cards);
  }, [cards]);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'OPENED' })
    }, 5000);
  }, []);

  const selectedCard = cards.filter(card => card.selected === true)

  if (selectedCard.length === 2 && selectedCard[0].number === selectedCard[1].number) {
    setTimeout(() => {
      dispatch({ type: 'CORRECT', payload: [selectedCard[0].id, selectedCard[1].id], correct: true });
    }, 1000)

  } else {
    setTimeout(() => {
      if (selectedCard.length >= 2 && selectedCard[0].number !== selectedCard[1].number) {
        dispatch({ type: 'CORRECT', payload: [selectedCard[0].id, selectedCard[1].id], correct: false });
      }
    }, 500)
  }

  return (
    <div className={classes.game_wrap}>
      {cardsArray.map(item => (
        <div
          className={`${classes.game__card} ${item.selected ? classes.choose_border : ''} ${item.correct ? classes.correct_border : ''}`}
          key={item.id}
          onClick={cardHandler}>
          <p
            className={`${classes.number} ${item.open || item.selected || item.correct ? classes.unable : classes.disable}`}
            id={item.id}>
            {item.number}
          </p>
        </div>))
      }
    </div>
  );
};

export default Card;