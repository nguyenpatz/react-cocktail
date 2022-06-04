import React from "react";
import {useGlobalContext} from "../context";
import Loading from "../components/Loading";
import Cocktail from "./Cocktail";
const CocktailList = () => {

	const {loading, cockTailList} = useGlobalContext();

	if(loading) {
		return <Loading />;
	}

	if(cockTailList.length < 1) {
		return (
			<div>Can not found your drink</div>
		);
	}

	return (
		<div className="cocktail-container">
		{cockTailList.map((cocktail) => {
			return <Cocktail key={cocktail.id} {...cocktail}/>
		})}
		</div>
	); 
}

export default CocktailList;