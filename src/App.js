import React from "react";
import Header from "./components/Header";
import { CartProvider } from './components/CartProvider';
import { SearchProvider } from './components/SearchProvider';
import { FavoriteProvider } from './components/FavoriteProvider';
import Home from "./pages/Home";
import Cart from './pages/Cart';
import Favorite from "./pages/Favorite";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <FavoriteProvider>
      <SearchProvider>
        <CartProvider>
              <Header/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/favorite" element={<Favorite/>}/>
              </Routes>
        </CartProvider>
      </SearchProvider>
    </FavoriteProvider>
  );
}

export default App;