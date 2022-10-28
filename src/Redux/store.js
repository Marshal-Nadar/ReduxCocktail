import { configureStore } from '@reduxjs/toolkit';
import cocktailReducer from './Features/cocktailSlice';

export default configureStore({
  reducer: {
    app: cocktailReducer,
  },
});
