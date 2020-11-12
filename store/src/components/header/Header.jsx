import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/c.svg';
import { auth } from '../../firebase/firebaseUtils';
import CartDropdown from '../cart-dropDown/CartDrop';
import CartIcon from '../cart-icon/CartIcon';
import { createStructuredSelector } from 'reselect';

import './Header.scss'
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { selectCartHidden } from '../../redux/cart/cartSelectors';

function Header({currentUser,hidden}) {
    return (
        <div className="header">
            <Link to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/shop">CONTACT</Link>
                {
                    currentUser ? <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>:<Link className="option" to='/signin'>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {hidden?null: <CartDropdown/>}
        </div>
    )
}

const mapStateToProps = (state) => createStructuredSelector ({
    currentUser:selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);

