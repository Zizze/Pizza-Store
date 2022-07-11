import { newCategory, newSearch } from "../redux/reducers/filter";
import { useAppDispatch } from "../redux/store";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineClear } from "react-icons/md";
import { useCallback, useRef, useState } from "react";
import debounce from "lodash.debounce";
const classes = require("./Search.module.scss");

const Search = () => {
	const [inputTxt, setInputText] = useState<string>("");
	const searchRef = useRef<HTMLInputElement>(null);
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const onChangeSearch = () => {
		if (!searchRef.current) return;
		setInputText(searchRef.current.value);
		delayedQuery(searchRef.current.value);
		dispatch(newCategory(0));

		if (pathname.includes("pizza")) {
			navigate("/");
		}
	};

	// eslint-disable-next-line
	const delayedQuery = useCallback(
		debounce((value) => dispatch(newSearch(value)), 500),
		[debounce]
	);

	const clickUpdateInput = (e: React.MouseEvent<HTMLSpanElement>) => {
		e.stopPropagation();
		setInputText("");
		delayedQuery("");
		searchRef.current?.focus();
	};

	return (
		<div className={classes.default.root}>
			<input
				type="text"
				placeholder="Введите текст"
				value={inputTxt}
				ref={searchRef}
				onChange={onChangeSearch}
			/>
			<span onClick={clickUpdateInput}>
				{inputTxt && <MdOutlineClear className={classes.default.icon} />}
			</span>
		</div>
	);
};

export default Search;
