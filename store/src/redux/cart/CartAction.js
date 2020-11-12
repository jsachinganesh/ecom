import CartActionTypes from './CartTypes';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = (item) => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const removeItemCheck = (item) => ({
    type: CartActionTypes.removeItemCheck,
    payload: item
})


