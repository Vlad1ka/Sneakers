import React from 'react';
import classes from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={classes.container}>
        <img src="./img/banner.png" alt="banner" />
        <div className={classes.content}>
            <div className={classes.text}>
                <p>Royal University <span>Blue Silk</span></p>
                <p>Nike & Clot</p>
            </div>
        </div>
    </div>
  )
}

export default Banner