
import { combineReducers } from 'redux';
import UserReducer from './user/UserReducer';
import cardReducer from './cart/CartReducer'

export default combineReducers({
    user: UserReducer,
    cart:cardReducer
})