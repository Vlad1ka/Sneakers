import React, { useState } from 'react';
import classes from './Categories.module.scss';

const Categories = ({value, onChangeCategory}) => {

    const categories = ['Все', 'Adidas', 'Puma', 'Nike'];

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                {
                    categories.map((categoryName, index) => (
                        <p 
                            key={index}
                            onClick={() => onChangeCategory(index)}
                            className={value === index ? classes.active : ''}>
                            {categoryName} </p>
                    ))
                }
            </div>
        </div>
    )
}
export default Categories;