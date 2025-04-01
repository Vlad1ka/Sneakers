import React from 'react';
import classes from '../scss/Favorite.module.scss';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

const Favorite = () => {

  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img src="./img/arrow-back.png" alt="arrow" onClick={() => navigate('/')}/>
        <p>Избранное</p>
      </div>
      <div className={classes.cards}>
        {/* <Card/> */}
        <p>djgfsjgosno</p>
        <p>dnsjgng</p>
      </div>
    </div>
  )
}

export default Favorite