import Pizza from "./pizza";
import Skeleton from "./Skeleton";
import { Items } from "../../redux/reducers/pizza";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const Pizzas: React.FC<{ pizzaArr: Items[] }> = ({ pizzaArr }) => {
	const searchText = useSelector((state: RootState) => state.filter.search);

	return (
		<div className="content__items">
			{pizzaArr.map((pizza) => (
				<Pizza pizza={pizza} key={pizza.id} />
			))}
			{pizzaArr.length === 0 && searchText === "" && <Skeleton />}
		</div>
	);
};

export default Pizzas;
