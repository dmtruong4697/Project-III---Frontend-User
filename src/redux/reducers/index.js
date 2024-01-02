import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import eventReducer from './event.reducer';
import cartReducer from './cart.reducer';
import ticketReducer from './ticket.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  event: eventReducer,
  cart: cartReducer,
  ticket: ticketReducer,
});

export default rootReducer;
