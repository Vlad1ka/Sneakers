import React from 'react';
import classes from './Card.module.scss';

const Card = ({img, title, sizes, price}) => {

    const [activeSize, setActiveSize] = React.useState(0);

    return (
        <div className={classes.container}>
            <img className={classes.photo} src={img} alt="sneakers" />
            <div className={classes.content}>
                <div className={classes.favorite}></div>
                <p className={classes.title}>{title}</p>
                <div className={classes.sizes}>
                    <p className={classes.name}>Размер</p>
                    <div className={classes.size}>
                    {sizes.map((sizes, i) =>(
                        <p
                        key={sizes}
                        onClick={() => setActiveSize(i)}
                        className={activeSize === i ? classes.active : ""}
                        >
                        {sizes}
                        </p>
                    ))}
                    </div>
                </div>
                <div className={classes.buy}>
                    <p className={classes.price}>от {price} ₽</p>
                    <div className={classes.add}>
                        <div className={classes.plus}></div>
                        <p>Добавить</p>
                        <p>0</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card