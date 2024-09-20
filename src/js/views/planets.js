import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/character.css";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = () => {
	//const { store, actions } = useContext(Context);
	const params = useParams();
    const index = parseInt(params.theid)+1 ;
    const apiUrl="https://swapi.dev/api/";
    const [char,setChar]= new useState([]);
    useEffect(()=>{
        async function getCharacter(){
            await fetch(apiUrl+"planets/"+index)
            .then(res => res.json())
            .then(data => {
                setChar(data);
            })
            .catch(err => console.error(err))
        }
        getCharacter();
    },[]);
	return (
		<div className="container">
            <div className="card cardtemplete">
             <div className="flex-container">   
            <img  src="..." className="imgchar" alt="..."/>
            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="card-body">
                <h5 className="card-title">{char.name}</h5>
                <div className="flex-container">
                <p className="card-text">Rotation Period: {char.rotation_period}</p>
                <p className="card-text">Orbital Period: {char.orbital_period}</p>
                <p className="card-text">Diameter: {char.diameter}</p>
                <p className="card-text">Climate: {char.climate}</p>
                <p className="card-text">Gravity: {char.gravity}</p>
                </div>
                <div className="flex-container">
                <p className="card-text">Terrain: {char.terrain}</p>
                <p className="card-text">Surface Water: {char.surface_water}</p>
                <p className="card-text">Population: {char.population}</p>
                <p className="card-text">created: {char.created}</p>
                </div>
                <Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Go Back
				</span>
			</Link>
            </div>
            </div>
		</div>
	);
};

Planets.propTypes = {
	match: PropTypes.object
};
