import ReactPaginate from "react-paginate";
import { newPage } from "../redux/reducers/filter";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const PaginatedItems = ({ itemsPerPage, forcePage }) => {
	const dispatch = useDispatch();
	// We start with an empty list of items.

	const [pageCount, setPageCount] = useState(0);
	// Here we use item offsets; we could also use page offsets
	// following the API or data you're working with.
	const [itemOffset, setItemOffset] = useState(0);
	useEffect(() => {
		// Fetch items from another resources.
		setPageCount(Math.ceil(items.length / itemsPerPage));
	}, [itemOffset, itemsPerPage]);

	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
		window.scrollTo(0, 200);
		const newOffset = (event.selected * itemsPerPage) % items.length;
		dispatch(newPage(event.selected));
		setItemOffset(pageCount + newOffset);
	};

	return (
		<div className="pagination">
			<ReactPaginate
				breakLabel="..."
				nextLabel=">"
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={3}
				previousLabel="<"
				renderOnZeroPageCount={null}
				forcePage={forcePage}
			/>
		</div>
	);
};

export default PaginatedItems;
