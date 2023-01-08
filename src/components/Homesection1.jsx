import styled from "styled-components";
import homeimage from "../img/imghomepage.jpg";
import CTA from "./CTA.jsx";
import { motion } from "framer-motion";
const H1 = styled(motion.h1)`
  font-size: 12.5em;
  color: #344055;
  margin: 0;
  padding-top: 7rem;
  .ZE {
    color: white;
  }
`;
const H2 = styled(motion.h2)`
  font-size: 6.25em;
  color: #344055;
  margin-top: -100px;
`;
const Homeimg = styled(motion.img)`
  z-index: -1;
  right: 7.8rem;
  position: absolute;
  width: 40rem;
  object-fit: cover;
  object-position: top;
  height: 45rem;
  border-radius: 10px;
  top: 7rem;
`;
const Slogan = styled(motion.h3)`
  font-size: 2rem;
  color: #344055;
  font-weight: 400;
  padding-bottom: 5rem;
  .futur {
    color: #358f8b;
    font-weight: 700;
  }
  .simplicite {
    color: #e54b4b;
    font-weight: 700;
  }
`;

const img = {
  hidden: { opacity: 0, x: 200 },
  show: { opacity: 1, x: 0 },
};

const title = {
  hidden: { opacity: 0, x: -200 },
  show: { opacity: 1, x: 0 },
};

const subtitle = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const Homesection1 = () => {
  return (
    <Wrapper>
      <Homeimg
        src={homeimage}
        transition={{ duration: 1, delay: 0.2 }}
        initial="hidden"
        animate={"show"}
        variants={img}
      ></Homeimg>
      <H1
        transition={{ duration: 1 }}
        initial="hidden"
        animate={"show"}
        variants={title}
      >
        Scooli
        <motion.span className="ZE">ze</motion.span>
      </H1>
      <H2
        transition={{ duration: 1, delay: 0.1 }}
        initial="hidden"
        animate={"show"}
        variants={title}
      >
        Predict
      </H2>
      <Slogan
        transition={{ duration: 1, delay: 0.7 }}
        initial="hidden"
        animate={"show"}
        variants={subtitle}
      >
        Votre <span className="futur">futur</span> en toute{" "}
        <span className="simplicite">simplicité</span>
      </Slogan>

      <motion.div
        transition={{ duration: 1, delay: 1 }}
        initial="hidden"
        animate={"show"}
        variants={subtitle}
      >
        <CTA txt="Découvrir Les Formations" link="/formations">
          Découvrir Les Formations
        </CTA>
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled(motion.section)`
  margin-left: 7.5rem;
  padding-bottom: 25rem;
`;

export default Homesection1;
