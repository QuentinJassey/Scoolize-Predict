import React from 'react';
import styled from 'styled-components';


const Article= ({img, titre, date}) => (
        <Styledarticle>
    <a href="Home.jsx">
        <img src={img}></img>
        <h3>{titre}</h3>
        <p>{date}</p>

    </a>
        </Styledarticle>
);

const Styledarticle = styled.section`
    position:relative;
    img{
        height:100% ;
        width:100%;
    }
    h3{
        width:80%;
        left:4rem;
        top:4rem;
        position:absolute;
        font-size:3.25rem;
        color:white;
    }
    p{
        font-size:2.03rem;
        width:80%;
        left:4rem;
        top:23rem;
        color:white;
        position:absolute;
    }
`

export default Article