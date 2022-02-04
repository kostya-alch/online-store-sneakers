import { cartReducer } from './cart/cartReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export type rootState = ReturnType<typeof rootReducer>;

export default rootReducer;
