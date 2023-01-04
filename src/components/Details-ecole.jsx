import React from 'react';
import styled from 'styled-components';
import star from '../img/star.png';
import starempty from '../img/star-empty.png'


const DetailsEcole= ({img, nom, desc, diplomes}) => (
        <Wrapper>
            <P>Détails de la formation</P>
            <img src={img}></img>
            <H1>{nom}</H1>
            <Stars>
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
                <img src={starempty}></img>
                <img src={starempty}></img>
            </Stars>
            <H2>{diplomes}</H2>
            <Desc>{desc}</Desc>
        </Wrapper>
);

const Wrapper=styled.section`
    padding-top:5rem;
    width:100%;
    img{
        width:80%;
        margin-left:10%;
        margin-right:10%;
        height:300px;
        object-fit: cover;
        object-position: center;
        margin-bottom:10px;
    }
`
const P=styled.p`
    font-size:2rem;
    font-weight:500;
    color:#E54B4B;
    padding-bottom:30px;
    padding-left:10%;
    left:100px;
`

const H1=styled.h1`
    font-size:2rem;
    padding-left:10%;
    color:#334055;
`

const H2=styled.h2`
    margin-top:10px;
    font-size:1.5rem;
    font-weight:500;
    padding-left:10%;
    color:#334055;
`

const Desc=styled.p`
    margin-top:15px;
    padding-left:10%;
    padding-right:10%;
    margin-bottom:100px;
`

const Stars=styled.div`
    right:150px;
    display:flex;
    position:absolute;
    top:545px;
    img{
        height:25px;
        width:25px;
        margin:2px;
    }
`

export default DetailsEcole