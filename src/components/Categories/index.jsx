import React, { useState } from 'react';
import classes from './Categories.module.scss';

const Categories = ({value, onChangeCategory}) => {

    const categories = ['Все', 'Adidas', 'Puma', 'Nike'];

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={classes.container}>
            <img onClick={toggleMenu} className={classes.burgerButton} src={isOpen ? './img/burgerClose.png' : './img/burgerOpen.png'}/>
            {isOpen && (
            <div className={classes.contentBurger}>
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
            )}
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