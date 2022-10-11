import Card from "./Card";

import classes from './Main.module.scss'

const MainPage = props => {
  
  return (
      <div className={classes.contaiter}>
        <h2>Mahjong</h2>
        <Card />
      </div>
  );
};

export default MainPage;