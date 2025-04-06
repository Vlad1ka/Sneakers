import React from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Card from '../components/Card';
import Footer from '../components/Footer';
import classes from '../scss/Home.module.scss';
import Header from '../components/Header';
import Cart from '../pages/Cart.jsx';
import { Routes, Route } from 'react-router-dom';

const Home = () => {
  const [cartOpened, setCartOpened] = React.useState(false);

  const [categoryId, setCategoryId] = React.useState(0);

  const [searchValue, setSearchValue ] = React.useState('');

  const [cards, setCards] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const search = searchValue ? `&search=${searchValue}` : "";


  React.useEffect(() => {

    fetch(`https://67d349eb8bca322cc269bf17.mockapi.io/items?${category}&${search}`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setCards(json);
      setIsLoading(false);
    });
  window.scrollTo(0, 0);
  }, [categoryId, searchValue]);

  if (isLoading){
    return(
      <div>Loading...</div>
    )
  }

  const onAddToCart = (obj) => {
    setCartItems((cartItems) => {
      const existingItem = cartItems.find(item => item.title === obj.title && item.size === obj.size);
      if (existingItem) {
        // Если товар уже существует, увеличиваем его количество
        return cartItems.map(item =>
          item.title === obj.title && item.size === obj.size ? { ...item, cardCount: item.cardCount + 1 } : item
        );
      }
      // Если товара нет, добавляем его с cardCount = 1
      return [...cartItems, { ...obj, cardCount: 1 }];
    })};


    const onIncrease = (title, size) => {
      setCartItems((cartItems) => 
        cartItems.map(item => 
          item.title === title && item.size === size ? { ...item, cardCount: item.cardCount + 1 } : item
        )
      );
    };
  
    const onDecrease = (title, size) => {
      setCartItems((cartItems) => 
        cartItems.map(item => 
          item.title === title && item.size === size 
            ? { ...item, cardCount: Math.max(item.cardCount - 1, 1) } : item
        )
      );
    };
  
    const onRemove = (title, size) => {
      setCartItems((cartItems) => cartItems.filter(item => !(item.title === title && item.size === size)));
    };






  const onClear = () => {
    setCartItems([]);
  };


  return (
    <>
    <Header searchValue={searchValue} setSearchValue={setSearchValue} onClickCart={() => setCartOpened(true)}/>
    {cartOpened ? <Cart cartItems={cartItems} onIncrease={onIncrease} onDecrease={onDecrease} onRemove={onRemove} onClear={onClear}/> : null}
    <Banner/>
    <Categories
      value={categoryId}
      onChangeCategory={(index) => setCategoryId(index)}
    />
    <div className={classes.cards}>
      {Array.isArray(cards) && cards.map((obj) => <Card key={obj.id} {...obj} onPlus={onAddToCart}/>)}
    </div>
    <Footer/>
    </>
  )
}

export default Home