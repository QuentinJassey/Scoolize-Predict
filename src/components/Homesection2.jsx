import styled from "styled-components";
import Article from '../components/Article.jsx'
import Blog1 from '../img/blog1.jpg';
import Blog2 from '../img/blog2.jpg';
import Blog3 from '../img/blog3.jpg';

const Homesection2 = () =>{
    return (
    <Wrapper>
    <H2>PRÉPARE TON FUTUR</H2>
    <hr></hr>
    <Blogbox>
        <Article className="Art" img={Blog1} titre="COMMENT RÉDIGER UNE LETTRE DE MOTIVATION ?" date="05-05-2023"></Article>
        <Article className="Art" img={Blog2} titre="À QUOI SERT NOTRE QUIZZ D'ORIENTATION ?" date="12-01-2023"></Article>
    </Blogbox>
    </Wrapper>
    )
}

const Blogbox = styled.section`
    margin:2%;
    display:flex;
    justify-content:space-around;
    gap:2%;
    Article{
        
    }

    

`

const H2 = styled.h2`
color:#344055;
font-size:5rem;
font-weight:700;
align-self:center;
`

const Wrapper = styled.section`
    display:flex;
    flex-direction:column;
    padding-bottom:20rem;
    hr{
        height:5px;
        width:50.625rem;
        border: none;
        background-color:#344055;
        margin-bottom:3rem;
        align-self:center;
    }
`;

export default Homesection2;