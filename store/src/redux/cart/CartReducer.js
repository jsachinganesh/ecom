import { removeItemCheck } from './CartAction';
import CartActionTypes from './CartTypes'
import { addItemToCart } from './cartUtils';
import { removeItemCheckOne } from './cartUtils';


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case CartActionTypes.TOGGLE_CART_HIDDEN:
        return {
          ...state,
          hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
          return {
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload)
          }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
          return {
            ...state,
            cartItems: state.cartItems.filter(cartI => cartI.id !== action.payload.id)
        }
      case CartActionTypes.removeItemCheck:
        return {
          ...state,
          cartItems: removeItemCheckOne(state.cartItems,action.payload)
        }
      
      default:
        return state;
    }
  };

export default cardReducer;
