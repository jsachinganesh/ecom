import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import './signInAndSignOut.scss'

export default function signInAndSignOut() {
    return (
        <div className="signInAndSignOut">
            <SignIn />
            <SignUp/>
        </div>
    )
}
