import { useState } from "react";
import { useSelector } from "react-redux";
import { newCategory, newPage } from "../../redux/reducers/filter";
import { Items } from "../../redux/reducers/pizza";
import { RootState, useAppDispatch } from "../../redux/store";
import Sort from "./Sort";

export const categories = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];

const Categories: React.FC<{ pizzaArr: Items[] }> = ({ pizzaArr }) => {
	const checkCategory = useSelector((state: RootState) => state.filter.category);

	const [clickIndex, setClickIndex] = useState(0);
	const dispatch = useAppDispatch();

	if (checkCategory !== clickIndex) {
		setClickIndex(checkCategory);
	}

	const clickHandler = (index: number) => {
		setClickIndex(index);
		dispatch(newCategory(index));
		if (pizzaArr.length < 4) dispatch(newPage(0));
	};

	return (
		<div className="content__top">
			<div className="categories">
				<ul>
					{categories.map((category, index) => (
						<li
							className={index === clickIndex ? "active" : ""}
							key={index}
							onClick={() => clickHandler(index)}
						>
							{category}
						</li>
					))}
				</ul>
			</div>
			<Sort />
		</div>
	);
};

export default Categories;
