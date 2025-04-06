import React from 'react';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.container}>
        <div className={classes.content}>
            <div>
                <img src="./img/logo.svg" alt="logo"/>
                <p>Новинки</p>
                <p>Все кроссовки</p>
            </div>
            <div className={classes.text}>
                <p>Контакты</p>
                <p>г. Стерлитамак, Октября пр-т, д. 36</p>
                <p>+7 (999) 999-99-99</p>
                <p>info@sneakers.ru</p>
            </div>
        </div>
        <hr />
        <div className={classes.social_media}>
            <p>Разработка и ведение сайта - SNEAKERS © 2020-2025</p>
            <div className={classes.icons}>
                <img src="./img/youtube.svg" alt="icon" />
                <img src="./img/gmail.svg" alt="icon" />
                <img src="./img/telegram.svg" alt="icon" />
                <img src="./img/odnoklassniki.svg" alt="icon" />
                <img src="./img/vk.svg" alt="icon" />
            </div>
        </div>
    </div>
  )
}

export default Footer