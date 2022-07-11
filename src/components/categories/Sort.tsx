import { useState } from "react";
import { newSortParams } from "../../redux/reducers/filter";
import { useAppDispatch } from "../../redux/store";

const sortTitle = [
	{ name: "популярности(desc)", sortBy: "rating" },
	{ name: "популярности(asc)", sortBy: "-rating" },
	{ name: "цене(desc)", sortBy: "price" },
	{ name: "цене(asc)", sortBy: "-price" },
	{ name: "алфавиту(asc)", sortBy: "name" },
	{ name: "алфавиту(desc)", sortBy: "-name" },
];

const Sort = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [clickIndex, setclickIndex] = useState(0);
	const [sortActive, setSortActive] = useState(sortTitle[0].name);

	const dispatch = useAppDispatch();

	const clickHandler = (index: number) => {
		setclickIndex(index);
		setSortActive(sortTitle[index].name);
		dispatch(newSortParams(sortTitle[index]));
	};

	document.body.addEventListener("click", (e: MouseEvent) => {
		e.stopPropagation();
		const _e = e.target as Element;

		if (_e.closest(".sort")) return;
		setIsOpen(false);
	});

	return (
		<div className="sort">
			<div className="sort__label" onClick={() => setIsOpen((prev) => !prev)}>
				<svg
					width="10"
					height="6"
					viewBox="0 0 10 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
						fill="#2C2C2C"
					/>
				</svg>
				<b>Сортировка&nbsp;по:</b>
				<span>{sortActive}</span>
			</div>
			{isOpen && (
				<div className="sort__popup">
					<ul>
						{sortTitle.map((sort, index) => (
							<li
								className={index === clickIndex ? "active" : ""}
								key={index}
								onClick={() => clickHandler(index)}
							>
								{sort.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default Sort;
