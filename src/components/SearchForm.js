import React from "react";
import {useGlobalContext} from "../context";
const SearchForm = () => {

	const {search, getSearch} = useGlobalContext();

	const handleSubmit = (e) => {
		e.preventDefault();
	}

	return (
		<div className="home-search">
			<div className="search-container">
				<h2 className="search-title">Search your drink</h2>
				<form className="search-form" onSubmit={handleSubmit}>
					<input type="text" value={search} onChange={getSearch}/>
				</form>
			</div>
		</div>
	);
};

export default SearchForm;
