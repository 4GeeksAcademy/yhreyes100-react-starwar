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
            <img  src={parseInt(params.theid)==0?"https://starwars-visualguide.com/assets/img/planets/7.jpg":"https://starwars-visualguide.com/assets/img/planets/"+(parseInt(params.theid)+1)+".jpg"} className="imgchar" alt="..."/>
            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="card-body">
                <h5 className="card-title">{char.name}</h5>
                <div className="container">
                <div className="row">
                        <div className="col-3">
                        <b>Climate: </b><c>{char.climate}</c> 
                        </div>
                        <div className="col-3">
                        <b>Rotation Period: </b><c>{char.rotation_period}</c> 
                        </div>
                        <div className="col-3">
                        <b>Orbital Period: </b><c>{char.orbital_period}</c> 
                        </div>
                        <div className="col-3">
                        <b>Diameter: </b><c>{char.diameter}</c> 
                        </div>
                </div>  
                <div className="row">
                        <div className="col-3">
                        <b>Gravity: </b><c>{char.gravity}</c> 
                        </div>
                        <div className="col-3">
                        <b>Terrain: </b><c>{char.terrain}</c> 
                        </div>
                        <div className="col-3">
                        <b>Surface Water: </b><c>{char.surface_water}</c> 
                        </div>
                        <div className="col-3">
                        <b>Population: </b><c> {char.population}</c> 
                        </div>
                </div> 
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
