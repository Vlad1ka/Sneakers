import React, { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext();

export const useFavorite = () => {
  return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const onAddToFavorite = (item) => {
    setFavoriteItems((prevFavorites) => {
      // Проверяем, есть ли элемент в избранном
      const isFavorite = prevFavorites.some(fav => fav.title === item.title && fav.price === item.price);

      if (isFavorite) {
        // Если есть, удаляем его из избранного
        return prevFavorites.filter(fav => fav.title !== item.title && fav.price !== item.price);
      } else {
        // Если нет, добавляем его в избранное
        return [...prevFavorites, item];
      }
    });
};




  return (
    <FavoriteContext.Provider value={{ favoriteItems, onAddToFavorite}}>
      {children}
    </FavoriteContext.Provider>
  );
};