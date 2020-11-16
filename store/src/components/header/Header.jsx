import React from 'react'
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/c.svg';
import { auth } from '../../firebase/firebaseUtils';
import CartDropdown from '../cart-dropDown/CartDrop';
import CartIcon from '../cart-icon/CartIcon';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/userSelectors';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './HeaderStyle';


function Header({ currentUser, hidden }) {
    console.log(currentUser);
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo"/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink className="option" to="/shop">SHOP</OptionLink>
                <OptionLink className="option" to="/shop">CONTACT</OptionLink>
                {
                    currentUser ? <OptionLink as='div' onClick={()=>auth.signOut()}>SIGN OUT</OptionLink>:<OptionLink className="option" to='/signin'>SIGN IN</OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
            {hidden?null: <CartDropdown/>}
        </HeaderContainer>
    )
}

const mapStateToProps = (state) => createStructuredSelector ({
    currentUser:selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);

