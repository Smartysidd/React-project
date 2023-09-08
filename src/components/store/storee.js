// import {configureStore} from "@reduxjs/toolkit";
// import cartReducer from './cartSlice'
// const store=configureStore({
//     reducer:{
//         cart:cartReducer
//     },
// })
// export default store

import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { add } from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Dispatch the 'add' action to add an item to the cart
store.dispatch(add({ id: 1, name: 'Product 1', price: 10 }));

export default store;