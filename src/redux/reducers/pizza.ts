import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type Items = {
	id: string;
	imageUrl: string;
	name: string;
	types: number[];
	sizes: number[];
	price: number;
	category: number;
	rating: number;
	amount?: number;
};

type PizzaSelectorType = {
	items: Items[];
	status: string;
};

export const pizzaFetch = createAsyncThunk<Items[], { page: number; urlParamsSort: string }>(
	"pizzas/fetchByIdStatus",
	async (params) => {
		const { page, urlParamsSort } = params;
		const { data } = await axios.get<Items[]>(
			`https://62bdd539c5ad14c110c7845c.mockapi.io/items?p=${page + 1}&l=4${urlParamsSort}`
		);

		return data;
	}
);

const initialState: PizzaSelectorType = {
	items: [],
	status: "loading",
};

const pizzasSlice = createSlice({
	name: "pizzas",
	initialState,
	reducers: {
		setItems(state, action: PayloadAction<Items[]>) {
			state.items = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(pizzaFetch.pending, (state) => {
			state.status = "loading";
			state.items = [];
		});

		builder.addCase(pizzaFetch.fulfilled, (state, action) => {
			state.status = "success";
			state.items = action.payload;
		});

		builder.addCase(pizzaFetch.rejected, (state) => {
			state.status = "error";
			state.items = [];
		});
	},
});

export const { setItems } = pizzasSlice.actions;
export default pizzasSlice.reducer;
