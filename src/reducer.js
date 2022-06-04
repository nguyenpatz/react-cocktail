const reducer = (state, action) => {
	switch (action.type) {
		case "LOADING":
			return { ...state, loading: true };
		case "NO_LOADING":
			return { ...state, loading: false };
		case "FETCH_DATA":
			if (action.payload !== null) {
				const newCockTails = action.payload.map((item) => {
					const {
						idDrink,
						strDrink,
						strDrinkThumb,
						strAlcoholic,
						strGlass,
					} = item;
					return {
						id: idDrink,
						name: strDrink,
						image: strDrinkThumb,
						info: strAlcoholic,
						glass: strGlass,
					};
				});
				return { ...state, cockTailList: newCockTails, loading: false };
			}
			return {...state, loading: false, cockTailList: []};
		case "SET_COCKTAIL":
			return {...state, cocktail: action.payload};
		case "SEARCHING":
			return {...state, search: action.payload};

		default:
			return state;
	}
};

export default reducer;
