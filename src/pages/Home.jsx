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
    setCartItems((cartItems) => [...cartItems, obj]);
    console.log(obj)
  }

  return (
    <>
    <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
    <Banner/>
    <Categories
      value={categoryId}
      onChangeCategory={(index) => setCategoryId(index)}
    />
    <div className={classes.cards}>
      {Array.isArray(cards) && cards.map((obj) => <Card key={obj.id} {...obj} onPlus={onAddToCart}/>)}
    </div>
    <Footer/>
    {/* <Routes>
      <Route path="/cart" element={<Cart cartItems={cartItems}/>}/>
    </Routes> */}
    <Cart cartItems={cartItems} />
    </>
  )
}

export default Home