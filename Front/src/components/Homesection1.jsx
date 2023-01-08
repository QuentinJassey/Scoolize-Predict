import styled from "styled-components";
import homeimage from "../img/imghomepage.jpg"
import CTA from "./CTA.jsx"

const H1 = styled.h1`
 font-size:12.5em;
 color:#344055;
 margin:0;
 padding-top:7rem;
 .ZE{
        color:white;
    }
`
const H2 = styled.h2`
 font-size:6.25em;
 color:#344055;
 margin-top:-100px;
`
const Homeimg = styled.img`
 z-index:-1;
 right:7.8rem;
 position:absolute;
 width: 40rem;
 object-fit: cover;
 object-position: top;
 height:45rem;
 border-radius:10px;
 top:7rem;
`
const Slogan = styled.h3`
 font-size:2rem;
 color:#344055;
 font-weight:400;
 padding-bottom:5rem;
 .futur{
        color:#358F8B;
        font-weight:700;
    }
 .simplicite{
    color:#E54B4B;
    font-weight:700;
    }
`

const Homesection1 = () =>{
    return (
    <Wrapper>
    <Homeimg src={homeimage}></Homeimg>
    <H1>Scooli<span className="ZE">ze</span></H1>
    <H2>Predict</H2>
    <Slogan>Votre <span className="futur">futur</span> en toute <span className="simplicite">simplicité</span></Slogan>
    <CTA txt="Découvrir Les Formations" link="/formations">Découvrir Les Formations</CTA>
    </Wrapper>
    )
}

const Wrapper = styled.section`
    margin-left:7.5rem;
    padding-bottom:20rem;
`;

export default Homesection1;