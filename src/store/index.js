import { configureStore } from "@reduxjs/toolkit";
import elementsReducers from '../slices/elementsSlice';

const store = configureStore({
  reducer: {
    elements: elementsReducers
  }
})

export default store;