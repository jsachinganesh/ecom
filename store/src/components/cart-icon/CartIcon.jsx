import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/s.svg';
import { toggleCartHidden } from '../../redux/cart/CartAction';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';

import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden,itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
);



const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})



const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
