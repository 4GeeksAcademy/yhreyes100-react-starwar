import React, { useEffect, useState,createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Character } from "./views/character";
import { Planets } from "./views/planets";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { func } from "prop-types";
export const contextdata = React.createContext();
//create your first component
const layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const apiUrl="https://swapi.dev/api/";
	const [people,setPeople]=useState([]);
	const [planets,setPlanets]=useState([]);
	const [chosenChar,setChosenChar]= useState([]);
	function itsOnList(obj,usestatearray){
		var temp = null;
		usestatearray.map((p,index)=>{
			if(p.name==obj.name)
				temp=index
		})
		return temp;
	}
	useEffect(()=>{
		console.log(counter)
	},[counter])
	function getChosenChar(character){
		if(itsOnList(character,chosenChar)==null){
			setChosenChar([...chosenChar, character]);
		}
		else{
					const index = itsOnList(character,chosenChar);
					const newChosen = [
						...chosenChar.slice(0, parseInt(index)), 
						...chosenChar.slice( parseInt(index) + 1) 
					];
					setChosenChar(newChosen); 
		}
	} 
	useEffect(()=>{
		async function getPeople(){
			await fetch(apiUrl+"people/")
			.then(res => res.json())
			.then(data => {
				setPeople(data.results);
			})
			.catch(err => console.error(err))
		}
		async function getPlanets(){
			await fetch(apiUrl+"planets/")
			.then(res => res.json())
			.then(data => {
				setPlanets(data.results)
			})
			.catch(err => console.error(err))
		}
		getPeople();
		getPlanets();
	},[]);
	return (
		<div>
			<contextdata.Provider value={{"people":people,"planets":planets,"chosenChar":chosenChar }}>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar getChosenChar={getChosenChar}/>
					<Routes>
						<Route path="/" element={<Home getChosenChar={getChosenChar} />} />
						<Route path="/character/:theid" element={<Character />} />
						<Route path="/planet/:theid" element={<Planets />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
			</contextdata.Provider>
		</div>
	);
};

export default injectContext(layout);
