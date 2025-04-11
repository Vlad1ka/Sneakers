import React from 'react';
import classes from "./Header.module.scss";
import { useNavigate, useLocation } from 'react-router-dom';
import { useSearch } from '../SearchProvider';


const Header = () => {

  const { searchValue, setSearchValue } = useSearch();

  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img className={classes.logo} src="./img/logo.svg" alt="logo" onClick={() => navigate('/')} />
        {isHomePage &&
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
        }
        <div className={classes.right}>
          <div className={classes.cart} onClick={() => navigate('/cart')}>
              <img src="./img/cart.svg" alt="cart"/>
              <p>1205 руб.</p>
          </div>
          <div className={classes.favorite} onClick={() => navigate('/favorite')}>
              <img src="./img/heart.png" alt="heart"/>
              <p>Избранное</p>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default Header