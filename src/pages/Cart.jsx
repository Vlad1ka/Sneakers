import React from 'react';
import classes from '../scss/Cart.module.scss';
import { useCart } from '../components/CartProvider'; 
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, onIncrease, onDecrease, onRemove, onClear } = useCart();

  // Функция для подсчета общего количества товаров
  const totalQuantity = cartItems.reduce((total, item) => total + item.cardCount, 0);

  // Функция для подсчета общей стоимости
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.cardCount, 0);

  const navigate = useNavigate();

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.text}>
          <div className={classes.title}>
            <img src="./img/cart.png" alt="cart" />
            <p>Корзина</p>
          </div>
          <div className={classes.clear} onClick={onClear}>
            <img src="./img/trash.svg" alt="trash"/>
            <p>Очистить корзину</p>
          </div>
        </div>
        <div className={classes.cards}>
          {Array.isArray(cartItems) && cartItems.map(({id, img, title, price, cardCount, size}) => (
            <div className={classes.card} key={id}>
            <hr />
            <div className={classes.card_content}>
              <img className={classes.img} src={img} alt="img" />
              <div className={classes.card_text}>
                <p>{title}</p>
                <p>{size}</p>
              </div>
              <div className={classes.quantity}>
                <img src="./img/minus.png" alt="minus" onClick={() => onDecrease(title, size)}/>
                <p>{cardCount}</p>
                <img src="./img/plus.png" alt="plus" onClick={()=> onIncrease(title, size)}/>
              </div>
              <div className={classes.price}>
                <p>{price*cardCount} ₽</p>
              </div>
              <div className={classes.delete}>
                <img src="./img/delete.png" alt="delete" onClick={() => onRemove(title, size)}/>
              </div>
            </div>
          </div>
          ))}
        </div>
        <div className={classes.total}>
          <p>Всего кроссовок: <span>{totalQuantity} шт.</span></p>
          <p>Сумма заказа: <span>{totalPrice} ₽</span></p>
        </div>
        <div className={classes.buttons}>
          <button onClick={() => navigate('/')}>
            <img src="./img/arrow-back.svg" alt="back" />
            Вернуться назад
          </button>
          <button onClick={() => alert("Ваш заказ оформлен!")}>Оплатить сейчас</button>
        </div>
      </div>
    </div>
  )
}

export default Cart