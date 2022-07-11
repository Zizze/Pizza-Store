import CartBottom from "../Cart/CartBottom";
import CartTop from "../Cart/CartTop";
import PizzasCart from "../Cart/PizzasCart";
import EmptyCart from "../Cart/EmptyCart";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const CartPage: React.FC = () => {
	const pizzaAmount = useSelector((state: RootState) => state.counter.itemInCart);
	const totalPrice = useSelector((state: RootState) => state.counter.totalPrice);

	return (
		<div className="cart container--cart">
			{pizzaAmount.length > 0 && <CartTop />}
			{pizzaAmount.length > 0 && <PizzasCart pizzasInCart={pizzaAmount} />}
			{pizzaAmount.length < 1 && <EmptyCart />}
			{pizzaAmount.length > 0 && <CartBottom pizzaAmount={pizzaAmount} totalPrice={totalPrice} />}
		</div>
	);
};

export default CartPage;
