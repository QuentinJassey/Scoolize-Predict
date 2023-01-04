import styled from 'styled-components';
import { Link } from "react-router-dom";

const CTA= ({link, txt}) => (
    <Wrapper>
        <Link to={link}>{txt}</Link>
    </Wrapper>
);


const Wrapper = styled.section`
 background-color:#E54B4B;
 height:5.875rem;
 width:30.1875rem;
 border-radius:10px;
 border:none;
 display:flex;
 justify-content:center;
 align-items:center;
 a{
 color:white;
 font-size:28px;
 font-weight:700;
 text-decoration:none;
 }
`

export default CTA;