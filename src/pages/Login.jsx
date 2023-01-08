import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm'

const Login = ({}) => {
    return (
        <Wrapper>
            <H1>Se connecter à Scoolize <span>Predict</span></H1>
            <LoginForm></LoginForm>
            <A href='/register'>Créer un compte</A>
        </Wrapper>
    );
};

export default Login;


const Wrapper=styled.section`
    display:flex;
    width:100%;
    align-items:center;
    flex-direction:column;
    padding-top:100px;
    padding-bottom:100px;
`

const H1=styled.h1`
    font-size:3rem;
    color:#E54B4B;
    span{
        color:#358F8B;
    }
    padding-bottom:80px;
`

const A=styled.a`
    font-size:0.8rem;
    text-decoration:none;
    color: rgba(52, 64, 85, 0.71);
    transition: text-decoration, color;
    :hover{
        text-decoration:underline;
        color: #344055;
    }
`