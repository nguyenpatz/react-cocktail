import React from "react";
import { useGlobalContext } from "../context";
import { useParams, Link } from "react-router-dom";
import Loading from "./Loading";

const DetailCocktail = () => {
	const { enableLoading, loading, disableLoading, cocktail, setCocktail } =
		useGlobalContext();

	const { id } = useParams();

	const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

	React.useEffect(() => {
		enableLoading();
		const getCocktail = async () => {
			const response = await fetch(`${url}${id}`);
			const data = await response.json();
			if (data.drinks) {
				const {
					strDrink: name,
					strDrinkThumb: image,
					strAlcoholic: info,
					strCategory: category,
					strGlass: glass,
					strInstructions: instructions,
					strIngredient1,
					strIngredient2,
					strIngredient3,
					strIngredient4,
					strIngredient5,
				} = data.drinks[0];
				const ingredients = [
					strIngredient1,
					strIngredient2,
					strIngredient3,
					strIngredient4,
					strIngredient5,
				];
				const newCockTail = {
					name,
					image,
					info,
					category,
					glass,
					instructions,
					ingredients,
				};
				setCocktail(newCockTail);
			}
		};
		getCocktail();
		disableLoading();
	}, [id]);

	if (loading) {
		return <Loading />;
	}

	if (!cocktail) {
		return <div>no cocktail to display</div>;
	}

	// console.log(cocktail);
	const { name, image, info, category, glass, instructions, ingredients } =
		cocktail;

	return (
		<section className="section detail-cocktail">
			<Link to="/">Home</Link>
			<h1 className="cocktail-title">{name}</h1>
			<div className="drink">
				<img src={image} alt={name} />
				<div className="drink-info">
					<p>
						<span className="drink-data">name: </span>
						{name}
					</p>
					<p>
						<span className="drink-data">category: </span>
						{category}
					</p>
					<p>
						<span className="drink-data">info: </span>
						{info}
					</p>
					<p>
						<span className="drink-data">glass: </span>
						{glass}
					</p>
					<p>
						<span className="drink-data">instructions: </span>
						{instructions}
					</p>
					<p>
						<span className="drink-data">ingredients: </span>
						{ingredients.map((item) => (
							<span>{item}</span>
						))}
					</p>
				</div>
			</div>
		</section>
	);
};

export default DetailCocktail;
