import React, {
	useReducer,
	useState,
	useEffect,
	useContext,
	useCallback,
} from "react";
import reducer from "./reducer";
// search cocktail by name
const url_name = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
// const url_id = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007";

const AppContext = React.createContext();

const initialValue = {
	loading: false,
	cockTailList: [],
	search: "",
	cocktail: null,
};

const AppProvider = ({ children }) => {
	// const [loading, setLoading] = useState(false);
	// const [cocktails, setCocktails] = useState([]);
	// const [searchTerm, setSearchTerm] = useState("a");

	const [state, dispatch] = useReducer(reducer, initialValue);

	const enableLoading = () => {
		dispatch({ type: "LOADING" });
	};

	const disableLoading = () => {
		dispatch({ type: "NO_LOADING" });
	};

	//fetch data
	const fetchDrink = async () => {
		dispatch({ type: "LOADING" });
		try {
			const response = await fetch(`${url_name}${state.search}`);
			const data = await response.json();
			const { drinks } = data;
			console.log(drinks);
			dispatch({ type: "FETCH_DATA", payload: drinks });
		} catch (error) {
			console.log(error);
		}
	};

	const getSearch = (e) => {
		dispatch({ type: "SEARCHING", payload: e.target.value });
	};

	const setCocktail = (obj) => {
		dispatch({type: "SET_COCKTAIL", payload: obj});
	}

	useEffect(() => {
		fetchDrink();
	}, [state.search]);

	return (
		<AppContext.Provider
			value={{
				...state,
				getSearch,
				enableLoading,
				disableLoading,
				setCocktail,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
