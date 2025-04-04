import React from 'react';
import classes from '../scss/Cart.module.scss';
import Header from '../components/Header';

const Cart = ({cartItems}) => {

  return (
    <div>
      <Header/>
      <div className={classes.container}>
        <div className={classes.text}>
          <div className={classes.title}>
            <img src="./img/cart.png" alt="cart" />
            <p>Корзина</p>
          </div>
          <div className={classes.clear}>
            <img src="./img/trash.svg" alt="trash" />
            <p>Очистить корзину</p>
          </div>
        </div>
        <div className={classes.cards}>
          {Array.isArray(cartItems) && cartItems.map(({id, img, title, price}) => (
            <div className={classes.card} key={id}>
            <hr />
            <div className={classes.card_content}>
              <img className={classes.img} src={img} alt="img" />
              <div className={classes.card_text}>
                <p>{title}</p>
                <p>SIZE</p>
              </div>
              <div className={classes.quantity}>
                <img src="./img/minus.png" alt="minus" />
                <p>2</p>
                <img src="./img/plus.png" alt="plus" />
              </div>
              <div className={classes.price}>
                <p>{price} ₽</p>
              </div>
              <div className={classes.delete}>
                <img src="./img/delete.png" alt="delete" />
              </div>
            </div>
          </div>
          ))}
        </div>
        <div className={classes.total}>
          <p>Всего кроссовок: <span>HIJIBOJFCHO</span></p>
          <p>Сумма заказа: <span>ывгоарыоароы</span></p>
        </div>
        <div className={classes.buttons}>
          <button>
            <img src="./img/arrow-back.svg" alt="back" />
            Вернуться назад
          </button>
          <button>Оплатить сейчас</button>
        </div>
      </div>
    </div>
  )
}

export default Cart