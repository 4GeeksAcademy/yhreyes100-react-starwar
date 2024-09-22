import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import {contextdata} from "../../js/layout";
export const Home = ({getChosen,itsOnList}) => {
	const data = useContext(contextdata);
	return (
		<>
		<div className="container scr">
			<h1>Characters</h1>
			<div className="overflow-auto">
				<div className="d-flex">
			{
				data.people!=null?	
				data.people.map((p,index)=>(
					<div key={index}>						
							<div className="card" >
							<img src={"https://starwars-visualguide.com/assets/img/characters/"+parseInt(index+1)+".jpg"} className="card-img-top" alt="..."/>
							<div className="card-body">
							<h5 className="card-title">{p.name}</h5>
							<p ><b >Gender:</b> <c>{p.gender}</c></p>
							<p ><b >Hair Color:</b> <c>{p.hair_color}</c></p>
							<p ><b >Eye Color:</b> <c>{p.eye_color}</c></p>
							<div className="flex-container">
							<Link to={"/character/" + index}>
							<a href="#" className="btn btn-primary">Learn More!</a>
							</Link>
							<a className="">
							{
								itsOnList(p,data.chosen)==null? <i className="far fa-heart heart" onClick={()=>getChosen(p)}></i>:
								<i class="far fa-solid fa-heart heartt"  onClick={()=>getChosen(p)}></i>
							}
							</a>
							</div>
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
				data.planets!=null?	
				data.planets.map((p,index)=>(
					<div key={index}>						
							<div className="card" >
							<img src={parseInt(index)==0?"https://starwars-visualguide.com/assets/img/planets/7.jpg":"https://starwars-visualguide.com/assets/img/planets/"+parseInt(index+1)+".jpg"} className="card-img-top" alt="..."/>
							<div className="card-body">
							<h5 className="card-title">{p.name}</h5>
							<p ><b >Population:</b> <c>{p.population}</c></p>
							<p ><b >Terrain:</b> <c>{p.terrain}</c></p>
							<div className="flex-container">
							<Link to={"/planet/" + index}>
							<a href="#" className="btn btn-primary">Learn More!</a>
							</Link>
							<a className="">
								{
								itsOnList(p,data.chosen)==null? <i className="far fa-heart heart" onClick={()=>getChosen(p)}></i>:
								<i class="far fa-solid fa-heart heartt"  onClick={()=>getChosen(p)}></i>
								}
							</a>
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
