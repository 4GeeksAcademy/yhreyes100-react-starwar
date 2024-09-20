import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/character.css";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = () => {
	//const { store, actions } = useContext(Context);
	const params = useParams();
    const index = parseInt(params.theid)+1 ;
    const apiUrl="https://swapi.dev/api/";
    const [char,setChar]= new useState([]);
    useEffect(()=>{
        async function getCharacter(){
            await fetch(apiUrl+"people/"+index)
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
                <p className="card-text">Height: {char.height}</p>
                <p className="card-text">Mass: {char.mass}</p>
                <p className="card-text">Heir Color: {char.hair_color}</p>
                <p className="card-text">Skin Color: {char.skin_color}</p>
                <p className="card-text">Eye Color: {char.eye_color}</p>
                </div>
                <div className="flex-container">
                <p className="card-text">Birth Year: {char.birth_year}</p>
                <p className="card-text">Gender: {char.gender}</p>
                <p className="card-text">Homeworld: {char.homeworld}</p>
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

Character.propTypes = {
	match: PropTypes.object
};
