import React, { useEffect } from "react";
import DetailsEcole from "../components/Details-ecole";
import image from "../img/ecole.png";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getFormation } from "../redux/reducers/currentFormation";
var NomEcole = "Nom de l'école";
var DescEcole =
  "Description de l'écoleLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
var Diplômes = "Diplômes";

const Details = ({}) => {
  let { id } = useParams();

  let current = useSelector((state) => state.currentFormation);
  let dispatch = useDispatch();
  console.log(id);

  useEffect(() => {
    dispatch(getFormation(id));

    console.log(current);
  }, []);
  return (
    <div>
      {current && (
        <DetailsEcole
          img={image}
          nom={current.data.fields.g_ea_lib_vx}
          desc={current.data.fields.lib_comp_voe_ins}
          diplomes={current.data.fields.form_lib_voe_acc}
        ></DetailsEcole>
      )}
    </div>
  );
};

export default Details;
