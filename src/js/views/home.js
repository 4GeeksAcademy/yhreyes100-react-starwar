import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const apiUrl="https://www.swapi.tech/api/";
	const [people,setPeople]=useState([]);
	const [planets,setPlanets]=useState([]);
	useEffect(()=>{
		function getPeople(){
			fetch(apiUrl+"people/")
			.then(res => res.json())
			.then(data => {
				setPeople(data.results);
				console.log(data.results)
			})
			.catch(err => console.error(err))
		}
		function getPlanets(){
			fetch(apiUrl+"planets/")
			.then(res => res.json())
			.then(data => {
				setPlanets(data.results)
				console.log(data.results)
			})
			.catch(err => console.error(err))
		}
		getPeople();
		getPlanets();
	},[]);
	return (
		<>
		<div className="container scr">
			<h1>Characters</h1>
			<div className="overflow-auto">
				<div className="d-flex">
			{
				people!=null?	
				people.map((p,index)=>(
					<div key={index}>						
							<div className="card" >
							<img src={p.url} class="card-img-top" alt="..."/>
							<div className="card-body">
							<h5 className="card-title">{p.name}</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Learn More!</a>
							</div>
					 		</div>
					</div>		
				)):""
			}
				</div>
			</div>
		</div>	
		<div className="container scr">
			<h1>Planets</h1>
			<div className="overflow-auto">
				<div className="d-flex">
			{
				planets!=null?	
				planets.map((p,index)=>(
					<div key={index}>						
							<div className="card" >
							<img src={p.url} class="card-img-top" alt="..."/>
							<div className="card-body">
							<h5 className="card-title">{p.name}</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<div className="d-flex space-between">
							<a href="#" class="btn btn-primary">Learn More!</a>
							<a><i className="fa-solid fa-heart"></i></a>
							</div>
							</div>
					 		</div>
					</div>		
				)):""
			}
				</div>
			</div>
		</div>
		</>
	);
}
