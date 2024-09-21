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
                <div className="container">
                <div className="row">
                        <div className="col-3">
                        <b>Height: </b><c>{char.height}</c> 
                        </div>
                        <div className="col-3">
                        <b>Heir Color: </b><c>{char.hair_color}</c> 
                        </div>
                        <div className="col-3">
                        <b>Mass: </b><c>{char.mass}</c> 
                        </div>
                        <div className="col-3">
                        <b>Skin Color: </b><c>{char.skin_color}</c> 
                        </div>
                </div>  
                <div className="row">
                        <div className="col-3">
                        <b>Eye Color: </b><c>{char.eye_color}</c> 
                        </div>
                        <div className="col-3">
                        <b>Birth Year: </b><c> {char.birth_year}</c> 
                        </div>
                        <div className="col-3">
                        <b>Gender: </b><c>{char.gender}</c> 
                        </div>
                        <div className="col-3">
                       
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

Character.propTypes = {
	match: PropTypes.object
};
