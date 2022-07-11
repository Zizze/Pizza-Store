import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PizzaAddType = {
	id: string;
	imageUrl: string;
	name: string;
	types: string | number[];
	sizes: number | number[];
	price: number;
	category: number;
	rating: number;
	amount?: number;
};

interface InitialState {
	totalPrice: number;
	itemInCart: PizzaAddType[];
}

const { cart, price } = localStorage.getItem("cart")
	? JSON.parse(localStorage.getItem("cart") || "")
	: { cart: [], price: 0 };

const initialState: InitialState = {
	totalPrice: price,
	itemInCart: cart,
};

const counterSlice = createSlice({
	name: "counter cart",
	initialState,
	reducers: {
		addItemInCart: (state, actions: PayloadAction<PizzaAddType>) => {
			const findItem = state.itemInCart.find((item) => {
				if (
					item.id === actions.payload.id &&
					item.types === actions.payload.types &&
					item.sizes === actions.payload.sizes
				)
					return true;
				return false;
			});

			if (findItem && findItem.amount) {
				findItem.amount++;
			} else {
				state.itemInCart.push({ ...actions.payload, amount: 1 });
			}

			state.totalPrice += actions.payload.price;
		},
		amountMinusPlus: (state, actions) => {
			const findItem = state.itemInCart.find((item) => {
				if (
					item.id === actions.payload.id &&
					item.types === actions.payload.types &&
					item.sizes === actions.payload.sizes
				)
					return true;

				return false;
			});

			if (findItem && actions.payload.minus && findItem.amount) {
				findItem.amount--;
				state.totalPrice -= actions.payload.price;
			} else if (findItem && !actions.payload.minus && findItem.amount) {
				findItem.amount++;
				state.totalPrice += actions.payload.price;
			}
		},

		removeItemInCart: (state, actions: PayloadAction<PizzaAddType>) => {
			state.itemInCart = state.itemInCart.filter((item) => {
				if (
					item.id === actions.payload.id &&
					item.types === actions.payload.types &&
					item.sizes === actions.payload.sizes
				)
					return false;
				return true;
			});
			if (actions.payload.amount) {
				state.totalPrice = state.totalPrice - actions.payload.price * actions.payload.amount;
			}
		},

		allDelete: (state) => {
			state.totalPrice = 0;
			state.itemInCart = [];
		},
	},
});

export const { addItemInCart, removeItemInCart, amountMinusPlus, allDelete } = counterSlice.actions;
export default counterSlice.reducer;
