import React from 'react';
import CocktailList from '../Components/CocktailList';
import SearchInput from '../Components/SearchInput';

const Home = () => {
  return (
    <>
      <SearchInput />
      <CocktailList />
    </>
  );
};

export default Home;
