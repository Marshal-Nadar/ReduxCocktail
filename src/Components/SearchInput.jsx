import React, { useRef } from 'react';
import { fetchSearchCocktail } from '../Redux/Features/cocktailSlice';
import './SearchInput.css';
import { useDispatch } from 'react-redux';
const SearchInput = () => {
  const searchValue = useRef();
  const dispatch = useDispatch();

  const handleChange = () => {
    const searchText = searchValue.current.value;
    console.log('first');
    dispatch(fetchSearchCocktail({ searchText }));
  };

  return (
    <>
      <div className='section search'>
        <div className='search-form'>
          <div className='form-control'>
            <label htmlFor='name'>Search Cocktail</label>
            <input
              type='text'
              name='name'
              id='name'
              ref={searchValue}
              onChange={handleChange}
              autoComplete={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchInput;
