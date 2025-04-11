import React from 'react';
import classes from '../scss/Favorite.module.scss';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import { useFavorite } from '../components/FavoriteProvider';
import { useCart } from '../components/CartProvider';

const Favorite = () => {

  const { onAddToCart } = useCart();
  const { favoriteItems, onAddToFavorite } = useFavorite();

  const navigate = useNavigate();

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.content}>
          <img src="./img/arrow-back.png" alt="arrow" onClick={() => navigate('/')}/>
          <p>Избранное</p>
        </div>
        <div className={classes.cards}>
        {Array.isArray(favoriteItems) && favoriteItems.map((obj) => <Card key={obj.id} {...obj} onPlus={onAddToCart} favorited={true} onFavorite={onAddToFavorite}/>)}
        </div>
      </div>
    </div>
  )
}

export default Favorite