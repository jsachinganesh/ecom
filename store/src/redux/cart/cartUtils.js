export const addItemToCart = (cartItems, cartItemsToAdd) => {
    console.log(cartItems)
    
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemsToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemsToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }

    return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];

};

export const removeItemCheckOne = (cartItems,cartItemRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemRemove.id
    )

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(carItem => carItem.id !== cartItemRemove.id)
    }

    return cartItems.map(cartItem => 
        cartItem.id === cartItemRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    )
}