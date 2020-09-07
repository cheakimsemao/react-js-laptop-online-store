import React from 'react';
import SignIn from './SignIn'
import SignUp from './SignUp'

const Header = () => {
    return (
        <div>
            This is the HeaderPart.
            <SignIn />
            <SignUp />
        </div>
    )
};

export default Header;