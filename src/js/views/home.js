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
							<img src={p.url} className="card-img-top" alt="..."/>
							<div className="card-body">
							<h5 className="card-title">{p.name}</h5>
							<p ><b >Gender:</b> <>{p.gender}</></p>
							<p ><b >Hair Color:</b> <>{p.hair_color}</></p>
							<p ><b >Eye Color:</b> <>{p.eye_color}</></p>
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
							<img src={p.url} className="card-img-top" alt="..."/>
							<div className="card-body">
							<h5 className="card-title">{p.name}</h5>
							<p ><b >Population:</b> <>{p.population}</></p>
							<p ><b >Terrain:</b> <>{p.terrain}</></p>
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
