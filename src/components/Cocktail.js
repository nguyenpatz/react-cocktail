import React from "react";
import { Link } from "react-router-dom";
const Cocktail = ({id, name, image, info, glass}) => {


	return (
		<div className="cocktail-card">
			<div className="cocktail-card-header">
				<img src={image} alt={name} />
			</div>
			<div className="cocktail-card-footer">
				<h3>{name}</h3>
				<h4>{glass}</h4>
				<p>{info}</p>
				<Link className="btn-detail" to={`/cocktail/${id}`}>Detail</Link>				
			</div>
		</div>
	);
}

export default Cocktail;