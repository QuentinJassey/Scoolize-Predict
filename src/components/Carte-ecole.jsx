import React , {useEffect} from 'react';
import styled from 'styled-components';
import star from '../img/star.png';
import starempty from '../img/star-empty.png'

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';







  const left = {
    hidden: { opacity: 0 , x:100},
    show: { opacity: 1  , x:0}
  }

  const center = {
    hidden: { opacity: 0},
    show: { opacity: 1  }
  }
  const right = {
    hidden: { opacity: 0 , x:-100},
    show: { opacity: 1  , x:0}
  }


const Ecole= ({img, titre, diplomes, link , side}) => {

    console.log(side)
    const controls = useAnimation();
    const { ref, inView } = useInView();
    useEffect(() => {
        if (inView) {
          controls.start('show');
        }
        if (!inView) {
          controls.start('hidden');
        }
      }, [controls, inView]);

    return(
    

        <Wrapper ref={ref} transition={{duration:1}} initial="hidden" animate={controls} variants={side == "left" ? left : side == "center" ? center : right}>
            
            <img src={img}></img>
            <H2>{titre}</H2>
            <H3>{diplomes}</H3>
            <Stars>
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
                <img src={starempty}></img>
                <img src={starempty}></img>
            </Stars>
            <a href={link}>DÉTAILS DE LA FORMATION</a>
        </Wrapper>
)};

const Wrapper=styled(motion.section)`

   /* @keyframes fadein {
    0%{
        opacity: 0;
    } 

    100%{
        opacity: 1;
    } */
   /* } */
    opacity: 1;



    animation: fadein 1.5s;
    margin-top:3rem;
    max-height: 100%;
    display: flex;
   

   justify-content:space-between;
    flex-direction : column ; 
    box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.25);
    width:30%;
    border-radius:10px 10px 10px 10px;
    img{
    width:100%;
        border-radius:10px 10px 0px 0px;
    }
    a{
        color:white;
        font-weight:700;
        font-size:20px;
        text-decoration:none;
        background-color:#E54B4B;
        display:flex;
        justify-content:center;

        align-items : center;
       
        height : 3.5rem ;
        border-radius:0px 0px 10px 10px;
    }
`
const H2=styled.h2`
    color:#344055;
    padding-top:10px;
    padding-bottom:20px;
    padding-left:20px;
    font-weight:700;
    font-size:20px;
`
const H3=styled.h3`
    padding-bottom:20px;
    padding-left:20px;
    color:#344055;
    font-weight:400;
    font-size:20px;
`
const Stars=styled.div`
    padding-left:20px;
    padding-bottom:20px;
    img{
        height:20px;
        width:20px;
    }
`

export default Ecole