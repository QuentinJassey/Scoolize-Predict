import React from 'react';
import DetailsEcole from '../components/Details-ecole'
import image from '../img/ecole.png'

var NomEcole="Nom de l'école"
var DescEcole="Description de l'écoleLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
var Diplômes="Diplômes"

const Details = ({}) => {
    return (
        <div>
            <DetailsEcole img={image} nom={NomEcole} desc={DescEcole} diplomes={Diplômes}></DetailsEcole>
        </div>
    );
};

export default Details;