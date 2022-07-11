import { addItemInCart } from "../../redux/reducers/counter-cart";
import { Items } from "../../redux/reducers/pizza";
import { RootState, useAppDispatch } from "../../redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const type: string[] = ["тонкое", "традиционное"];

const Pizza: React.FC<{ pizza: Items }> = (props) => {
	const { imageUrl, name, price, types, sizes, id } = props.pizza;
	const [clickIndexTypes, setClickIndexTypes] = useState<number>(0);
	const [clickIndexSize, setClickIndexSize] = useState<number>(0);

	const [typePizza, setTypePizza] = useState(type[0]);
	const [sizesPizza, setSizesPizza] = useState(sizes[0]);

	const pizzaAmount = useSelector((state: RootState) =>
		state.counter.itemInCart.filter((pizza) => pizza.id === id)
	);
	const amount = pizzaAmount.reduce(
		(total, current) => total + (current.amount ? current.amount : 0),
		0
	);
	// = pizzaAmount ? pizzaAmount.amount : 0;

	const dispatch = useAppDispatch();

	const clickHandlerTypes = (index: number) => {
		setClickIndexTypes(index);
		setTypePizza(type[index]);
	};

	const clickHandlerSize = (index: number) => {
		setClickIndexSize(index);
		setSizesPizza(sizes[index]);
	};

	return (
		<div className="pizza-block">
			<Link to={`/pizza/${id}`}>
				<img className="pizza-block__image" src={imageUrl} alt="Pizza" />
				<h4 className="pizza-block__title">{name}</h4>
			</Link>
			<div className="pizza-block__selector">
				<ul>
					{types.map((indexType: number, i: number) => {
						return (
							<li
								key={indexType}
								className={clickIndexTypes === i ? "active" : ""}
								onClick={() => clickHandlerTypes(i)}
							>
								{type[indexType]}
							</li>
						);
					})}
				</ul>
				<ul>
					{sizes.map((size, i) => (
						<li
							key={i}
							className={clickIndexSize === i ? "active" : ""}
							onClick={() => clickHandlerSize(i)}
						>
							{size}см.
						</li>
					))}
				</ul>
			</div>
			<div className="pizza-block__bottom">
				<div className="pizza-block__price">{price}руб.</div>
				<div
					className="button button--outline button--add"
					onClick={() =>
						dispatch(addItemInCart({ ...props.pizza, types: typePizza, sizes: sizesPizza }))
					}
				>
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
							fill="white"
						/>
					</svg>
					<span>Добавить</span>
					{amount ? <i>{amount}</i> : null}
				</div>
			</div>
		</div>
	);
};

export default Pizza;
