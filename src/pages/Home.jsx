import React from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Card from '../components/Card';
import Footer from '../components/Footer';
import { useCart } from '../components/CartProvider.jsx';
import { useSearch } from '../components/SearchProvider.jsx';
import classes from '../scss/Home.module.scss';
import { useFavorite } from '../components/FavoriteProvider.jsx';

const Home = () => {

  const { searchValue } = useSearch();
  const { onAddToCart } = useCart();
  const { onAddToFavorite} = useFavorite();
  const [categoryId, setCategoryId] = React.useState(0);
  const [cards, setCards] = React.useState([]);
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



  return (
    <>
    <Banner/>
    <Categories
      value={categoryId}
      onChangeCategory={(index) => setCategoryId(index)}
    />
    <div className={classes.cards}>
      {Array.isArray(cards) && cards.map((obj) => <Card key={obj.id} {...obj} onPlus={onAddToCart} onFavorite={onAddToFavorite}/>)}
    </div>
    <Footer/>
    </>
  )
}

export default Home