import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/s.svg';
import { toggleCartHidden } from '../../redux/cart/CartAction';




import './CartIcon.scss';

// class CartIcon extends Component {
//     render() {
//         return (
            
//         )
//     }
// }
// import React from 'react';

const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );



const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon);
