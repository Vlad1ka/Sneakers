import React, { createContext, useContext, useState } from 'react';

export const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue}}>
      {children}
    </SearchContext.Provider>
  );
};