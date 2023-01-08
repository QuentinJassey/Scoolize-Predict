import styled from "styled-components";
import Article from "../components/Article.jsx";
import Blog1 from "../img/blog1.jpg";
import Blog2 from "../img/blog2.jpg";
import Blog3 from "../img/blog3.jpg";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
const Homesection2 = () => {
  const line = {
    hidden: { width: "0%" },
    show: { width: "50%" },
  };

  const center = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const left = {
    hidden: { opacity: 0, x: 150 },
    show: { opacity: 1, x: 0 },
  };

  const right = {
    hidden: { opacity: 0, x: -150 },
    show: { opacity: 1, x: 0 },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <Wrapper>
      <H2
        transition={{ duration: 0.5, delay: 0.5 }}
        initial="hidden"
        animate={controls}
        variants={center}
      >
        PRÉPARE TON FUTUR
      </H2>
      <motion.hr
        transition={{ duration: 1, delay: 0 }}
        initial="hidden"
        animate={controls}
        variants={line}
      ></motion.hr>
      <Blogbox ref={ref}>
        <motion.div
          transition={{ duration: 1, delay: 1 }}
          initial="hidden"
          animate={controls}
          variants={right}
        >
          <Article
            className="Art"
            img={Blog1}
            titre="COMMENT RÉDIGER UNE LETTRE DE MOTIVATION ?"
            date="05-05-2023"
          ></Article>
        </motion.div>
        <motion.div
          transition={{ duration: 1, delay: 1 }}
          initial="hidden"
          animate={controls}
          variants={left}
        >
          <Article
            className="Art"
            img={Blog2}
            titre="À QUOI SERT NOTRE QUIZZ D'ORIENTATION ?"
            date="12-01-2023"
          ></Article>
        </motion.div>
      </Blogbox>
    </Wrapper>
  );
};

const Blogbox = styled.section`
  margin: 2%;
  display: flex;
  justify-content: space-around;
  gap: 2%;
  Article {
  }
`;

const H2 = styled(motion.h2)`
  color: #344055;
  font-size: 5rem;
  font-weight: 700;
  align-self: center;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 20rem;
  hr {
    height: 5px;
    width: 50%;
    border: none;
    background-color: #344055;
    margin-bottom: 3rem;
    align-self: center;
  }
`;

export default Homesection2;
