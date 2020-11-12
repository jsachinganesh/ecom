import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, removeItemCheck } from '../../redux/cart/CartAction';
import './CheckOutItem.scss';


function CheckOutItem({ cartItem,removeItem,addItem,removeItemCheck }) {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=> removeItemCheck(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=> addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick ={()=>removeItem(cartItem)}> &#10005; </div>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItemCheck: item => dispatch(removeItemCheck(item))
})

export default connect(null,mapDispatchToProps)(CheckOutItem);
