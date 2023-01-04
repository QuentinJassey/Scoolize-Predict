import React from 'react';
import logo from '../img/logo.png'

import Logo from './Logo.Header.jsx'
import {StyledLogo} from './Logo.Header.jsx'

const Header = () => {
   
    return (
        <div>
            <Logo img={logo}></Logo>
            <Text>
                
            </Text>
        </div>
    );
};

export default Header;

const Text=styled.div`

`