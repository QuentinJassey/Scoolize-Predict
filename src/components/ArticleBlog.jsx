import styled from "styled-components";

const ArticleBlog= ({image, title, content}) => (
    <Wrapper>
        <Titre>{title}</Titre>
        <Image src={image}></Image>
        <Content>{content}</Content>
    </Wrapper>
)

const Wrapper = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Titre = styled.h1`
    padding-top:50px;
`

const Image = styled.img`
    padding-top:50px;
    padding-bottom:50px;
`

const Content = styled.div`
    padding-bottom:50px;
`

export default ArticleBlog 