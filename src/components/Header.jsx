import React from 'react';
import logo from '../img/logo.png'
import styled from 'styled-components';

import Logo from './Logo.Header.jsx'
import {StyledLogo} from './Logo.Header.jsx'

const Header = () => {
   
    return (
        <div>
            <Logo img={logo}></Logo>
            <Text>
                <a href='/'>Accueil</a>
                <a href='/formations'>Formations</a>
                <a href='/'>Quizz</a>
                <a href='/'>Connexion</a>
            </Text>
        </div>
    );
};

export default Header;

const Text=styled.div`
    padding-top:30px;
    position:absolute;
    right:0;
    top:0;
    a{
        color:#344055;
        padding-right:100px;
        text-decoration:none;
    }
`