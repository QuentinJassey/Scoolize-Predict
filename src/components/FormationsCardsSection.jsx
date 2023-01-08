import Ecole from "./Carte-ecole";
import Ecoleimg from "../img/ecole.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
const FormationsCardsSection = () => {
  const sideHandle = (i) => {
    if (i % 3 == 0) {
      return "right";
    } else if (i % 3 == 1) {
      return "center";
    } else if (i % 3 == 2) {
      return "left";
    }
  };
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const formationslimited = useSelector((state) => state.formationLimited);
  return (
    <Wrapper initial="hidden" animate="show" variants={container}>
      {formationslimited.data.length > 0 &&
        formationslimited.data.map((form, i) => (
          <Ecole
            key={i}
            side={sideHandle(i)}
            className="box"
            img={Ecoleimg}
            titre={form.fields.g_ea_lib_vx}
            diplomes={form.fields.form_lib_voe_acc}
            link={`/formations/${form._id}`}
          />
        ))}
    </Wrapper>
  );
};

const Wrapper = styled(motion.section)`
  padding-top: 7rem;
  padding-right: 10rem;
  padding-left: 10rem;
  padding-bottom: 15rem;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
`;
export default FormationsCardsSection;
