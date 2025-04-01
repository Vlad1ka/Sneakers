import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from './pages/Cart';
import Favorite from "./pages/Favorite";
import { Routes, Route } from 'react-router-dom';



function App() {

  return (
    <div>
      {/* <Header searchValue={searchValue} setSearchValue={setSearchValue}/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
      </Routes>
    </div>
  );
}

export default App;