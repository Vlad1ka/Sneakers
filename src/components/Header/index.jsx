import React from 'react';
import classes from "./Header.module.scss";
import { useNavigate } from 'react-router-dom';

const Header = ({searchValue, setSearchValue, onClickCart}) => {

  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img className={classes.logo} src="./img/logo.svg" alt="logo" onClick={() => navigate('/')} />
        <div className={classes.search}>
            {searchValue && 
            <img className={classes.close} onClick={() => setSearchValue('')} src="./img/close.png" alt="close" />
            }
            <input
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            type="text"
            placeholder="Поиск..."
            />
        </div>
        {/* <div className={classes.cart} onClick={() => navigate('/cart')}> */}
        <div className={classes.cart} onClick={onClickCart}>
            <img src="./img/cart.svg" alt="cart"/>
            <p>1205 руб.</p>
        </div>
        <div className={classes.favorite} onClick={() => navigate('/favorite')}>
            <img src="./img/heart.png" alt="heart"/>
            <p>Избранное</p>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default Header