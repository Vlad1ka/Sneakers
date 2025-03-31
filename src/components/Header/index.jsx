import React from 'react';
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img className={classes.logo} src="./img/logo.svg" alt="logo"/>
        <div className={classes.search}>
            <input type="text" placeholder="Поиск..."/>
        </div>
        <div className={classes.cart}>
            <img src="./img/cart.svg" alt="cart"/>
            <p>1205 руб.</p>
        </div>
        <div className={classes.favorite}>
            <img src="./img/heart.png" alt="heart"/>
            <p>Избранное</p>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default Header