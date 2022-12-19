import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './bookSlice';

const store = configureStore({ reducer: { bookR: bookReducer } });

export default store;