import { createSelector } from 'reselect';

const selectUser = state => state.cart;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)



// export const selectCartItemsCount = createSelector(
//     [selectCartItems],
//     cartItems => cartItems.reduce((acc, cartItem)=> acc + cartItem.quantity,0)
// )