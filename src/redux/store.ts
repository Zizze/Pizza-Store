import counterReducer from "./reducers/counter-cart";
import filterReducer from "./reducers/filter";
import pizzasReduser from "./reducers/pizza";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const store = configureStore({
	reducer: {
		counter: counterReducer,
		filter: filterReducer,
		pizzas: pizzasReduser,
	},
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
