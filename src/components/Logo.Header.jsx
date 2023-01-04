import styled from "styled-components";

const Logo= ({img}) => (
    <StyledLogo>
    <a href="/">
        <img src={img}></img>
    </a>
    </StyledLogo>
)

const StyledLogo = styled.div`
    height:65px;
    padding-left:7.5rem;
    padding-top:15px;
    img{
        height:100%;
    }
`

export default Logo 