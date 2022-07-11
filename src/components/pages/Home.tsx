import Categories, { categories } from "../categories";
import Pizzas from "../pizzas";
import Skeleton from "../pizzas/Skeleton";
import PaginatedItems from "../Paginations";
import { pizzaFetch } from "../../redux/reducers/pizza";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../../redux/store";

const HomePage: React.FC = () => {
	const navigate = useNavigate();
	const { items, status } = useSelector((state: RootState) => state.pizzas);
	const { search, sort, page, category } = useSelector((state: RootState) => state.filter);
	const [urlParamsSort, setUrlParamsSort] = useState("");

	const dispatch = useAppDispatch();

	useEffect(() => {
		const checkCategory = category === 0 ? "" : `&category=${category}`;
		const descOrAsc = sort.sortBy.includes("-") ? "desc" : "asc";
		const sortVariant = sort.sortBy.includes("-") ? sort.sortBy.substring(1) : sort.sortBy;
		const endsUrl = `${
			search === "" ? checkCategory : `&name=${search}`
		}&sortBy=${sortVariant}&order=${descOrAsc}`;

		setUrlParamsSort(endsUrl);
		dispatch(pizzaFetch({ urlParamsSort, page }));
		navigate(`?${urlParamsSort.replace("&", "")}`);
	}, [urlParamsSort, page, category, search, sort.sortBy, dispatch, navigate]);

	return (
		<div className="content">
			<div className="container">
				<Categories pizzaArr={items} />
				<h2 className="content__title">{`${categories[category]} пиццы`}</h2>
				{status === "error" && <h2> Что то пошло не так... </h2>}
				{(status === "success" || "loading") && <Pizzas pizzaArr={items} />}
				{search !== "" && items.length === 0 && status !== "loading" && (
					<h2 style={{ height: "100vh", textAlign: "center" }}>
						По вашему запросу пицц не найдено!
					</h2>
				)}
				{(items.length > 3 || page === 2) && search === "" && status === "success" && (
					<PaginatedItems itemsPerPage={4} forcePage={page} />
				)}
				{status === "loading" && <Skeleton />}
			</div>
		</div>
	);
};

export default HomePage;
