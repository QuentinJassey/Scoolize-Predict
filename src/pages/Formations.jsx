import React, { useState } from "react";
import { useSelector } from "react-redux";
import FormationsCardsSection from "../components/FormationsCardsSection";
import styled from "styled-components";

import Ecoleimg from "../img/ecole.png";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

import Ecole from "../components/Carte-ecole";
import { getFormations } from "../redux/reducers/formation";

const Formations = () => {
  let dispatch = useDispatch();

  let [showSection, setShowsection] = useState(false);

  let [showSection2, setShowsection2] = useState(true);

  let [formations, setformations] = useState({
    data: [],
    isSuccess: true,
    message: "",
    loading: false,
  });

  let formati = useSelector((state) => state.formations);

  useEffect(() => {
    setformations(formati.data);
    dispatch(getFormations(80));
  }, []);

  const handleSearch = (e) => {
    console.log(formations);

    setShowsection(true);
    setShowsection2(false);
    setformations(
      formati.data.filter((form) => {
        return (
          form.fields.g_ea_lib_vx.includes(e.target.value) ||
          form.fields.form_lib_voe_acc.includes(e.target.value)
        );
      })
    );

    console.log(formations);
  };

  const sideHandle = (i) => {
    if (i % 3 == 0) {
      return "right";
    } else if (i % 3 == 1) {
      return "center";
    } else if (i % 3 == 2) {
      return "left";
    }
  };

  const line = {
    hidden: { width: "0%" },
    show: { width: "70%" },
  };
  return (
    <div>
      <SearchbarSection className="searchSection">
        <motion.div
          className="lineAnim"
          transition={{ duration: 1, delay: 0 }}
          initial="hidden"
          animate={"show"}
          variants={line}
        >
          <input type="text" onChange={handleSearch} />
        </motion.div>
      </SearchbarSection>

      {showSection && (
        <>
          <StyledH2 formations={formations.length > 0 ? "full" : "empty"}>
            <h2>
              {formations.length > 0
                ? "Resultats de recherche"
                : "aucun resultat de correspond"}
            </h2>
          </StyledH2>
          <GridSection className="grid">
            {formations.map((form, i) => (
              <Ecole
                key={i}
                side={sideHandle(i)}
                className="box"
                img={Ecoleimg}
                titre={form.fields.g_ea_lib_vx}
                diplomes={form.fields.form_lib_voe_acc}
                link="/details"
              />
            ))}
          </GridSection>
        </>
      )}

      {showSection2 && <FormationsCardsSection />}
    </div>
  );
};

let SearchbarSection = styled.div`
  margin-top: 8rem;
  width: 100%;

  display: flex;

  justify-content: flex-start;
  margin-left: 15%;
  align-items: center;

  h2 {
    margin-left: 10rem;

    width: 100%;
  }
  input {
    position: relative;
    width: 100%;
    border: none;

    font-size: 2rem;
    padding-bottom: 1rem;

    border-radius: 2px;

    outline: none;
  }

  .lineAnim {
    width: 70%;
    display: flex;

    position: relative;
    justify-content: center;
    align-items: center;
  }
  .lineAnim::before {
    content: "";
    display: flex;
    text-align: left;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: black;
    z-index: 10;
  }
`;

let StyledH2 = styled(motion.div)`
  color: ${(props) => (props.formations == "full" ? "#358F8B" : "#E54B4B")};
  margin-top: 5rem;
  display: flex;

  align-items: center;
  width: 100%;
  justify-content: center;

  h2 {
    display: flex;
    width: 75%;
    justify-content: center;
    align-items: center;
    transition: all 1s;

    margin-right: ${(props) => (props.formations == "full" ? "60%" : "0%")};
  }
`;
let GridSection = styled.div`
  padding-top: 5rem;
  padding-right: 10rem;
  padding-left: 10rem;
  padding-bottom: 15rem;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default Formations;
