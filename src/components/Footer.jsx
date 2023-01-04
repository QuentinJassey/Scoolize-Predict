import Lien from "./Lien.jsx"
import styled from 'styled-components';
import Youtube from '../img/Youtube.png'
import Tiktok from '../img/Tiktok.png'
import Insta from '../img/Insta.png'


const Footer = () => {
    return (
        <Wrapper>

            <div>
            <h3 className="LU">Liens utiles</h3>
            <hr className="LigneG"></hr>
            <Links>
                <Lien className="Link" href="/">Accueil</Lien>
                <Lien className="Link" href="/formations">Formations</Lien>
                <Lien className="Link">Quizz</Lien>
                <Lien className="Link">Espace personnel</Lien>
            </Links>
            </div>

            <Right>
                <h3 className="TxtRight"> Rejoins nous sur les réseaux <span className="exclamation">!</span></h3>
                <hr className="LigneD"></hr>
                <Icons>
                    <a href="https://www.instagram.com/" target="_blank"><img className="Icon" src={Insta}></img></a>
                    <a href="https://www.youtube.com/" target="_blank"><img className="Icon" src={Youtube}></img></a>
                    <a href="https://www.tiktok.com/" target="_blank"><img className="Icon" src={Tiktok}></img></a>
                </Icons>
            </Right>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display:flex;
    
    background-color:#E54B4B;
    padding-left:5rem;
    .LU{
        display:flex;
        padding-top:3.4rem;
        color:white;
        font-size:25px;
        font-weight:700;
    };
    .LigneG{
        height:2px;
        border: none;
        background-color:white;
        margin-bottom:20px;
    }
`;
const Links = styled.section`
    display:flex;
    flex-direction:column;
    padding-bottom:50px;
    .Link{
        margin-bottom:0.5rem;     
    };
`
const Right = styled.section`
    flex-direction:column;
    /* height:100%; */
    padding-top:6rem;
    display:flex;
    position:absolute;
    right:7rem;
    .TxtRight{
        position:relative;
        font-size:25px;
        font-weight:700;
        color:white;
    }
    .exclamation{
        position:absolute;
        right:-40px;
        top:-15px;
        transform: rotate(17.95deg);
        font-size:50px;
        font-weight:700;
    }
    .LigneD{
        height:2px;
        border: none;
        background-color:white;
        margin-bottom:3rem;
    }
`

const Icons = styled.section`
    padding-top:2rem;
    display:flex;
    justify-content:space-between;
    .Icon{
        height:50px;
        width:50px;
    }
`
export default Footer;