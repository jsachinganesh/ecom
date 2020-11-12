import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/CartAction';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/CustomButton';
import './CartDrop.scss'



const Cart = ({cartItems,history,dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {   
                    cartItems.length? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />): <span className="empty-message">Your Cart is Empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    );
}



const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));
