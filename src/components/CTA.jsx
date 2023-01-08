import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const CTA = ({ link, txt }) => (
  <Wrapper>
    <Link to={link}>{txt}</Link>
  </Wrapper>
);

const Wrapper = styled(motion.div)`
  background-color: #e54b4b;
  height: 5.875rem;
  width: 30.1875rem;
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: white;
    font-size: 28px;
    font-weight: 700;
    text-decoration: none;
  }
`;

export default CTA;
