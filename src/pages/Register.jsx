import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../components/RegisterForm'

const Register = ({}) => {
    return (
        <Wrapper>
            <H1>Bonjour <span>Etudiant</span> !</H1>
            <Text>Pour vous inscrire, utilisez le mot de passe temporaire reçu par mail de la part de votre professeur principal que vous devez absolument modifier lors de votre 1ère connexion.</Text>
            <RegisterForm></RegisterForm>
            <A href='/login'>J'ai déjà un compte</A>
        </Wrapper>
    );
};

export default Register;

const Text=styled.p`
    color:#111111;
    width:500px;
    padding-bottom:10px;
    font-size:0.8rem;
`
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
    padding-bottom:15px;
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