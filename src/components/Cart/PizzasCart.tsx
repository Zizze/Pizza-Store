import { PizzaAddType } from "../../redux/reducers/counter-cart";
import PizzaBlock from "./PizzaBlock";

const PizzasCart: React.FC<{ pizzasInCart: PizzaAddType[] }> = ({ pizzasInCart }) => {
	return (
		<div className="content__cart">
			{pizzasInCart.map((pizza) => (
				<PizzaBlock pizza={pizza} key={pizza.id + Math.random()} />
			))}
		</div>
	);
};

export default PizzasCart;
