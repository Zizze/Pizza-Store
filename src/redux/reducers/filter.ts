import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterTypes = {
	sort: {
		name: string;
		sortBy: string;
	};
	category: number;
	search: string;
	page: number;
};

const initialState: FilterTypes = {
	sort: {
		name: "популярности(desc)",
		sortBy: "rating",
	},
	category: 0,
	search: "",
	page: 0,
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		newSortParams: (state, actions: PayloadAction<{ name: string; sortBy: string }>) => {
			state.sort = actions.payload;
		},
		newCategory: (state, actions: PayloadAction<number>) => {
			state.category = actions.payload;
		},
		newSearch: (state, actions: PayloadAction<string>) => {
			state.search = actions.payload;
		},
		newPage: (state, actions: PayloadAction<number>) => {
			state.page = actions.payload;
		},
	},
});

export const { newSortParams, newCategory, newSearch, newPage } = filterSlice.actions;
export default filterSlice.reducer;
