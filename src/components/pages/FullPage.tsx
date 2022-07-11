import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Items } from "../../redux/reducers/pizza";
import axios from "axios";

const FullPage: React.FC = () => {
	const [item, setItem] = useState<Items>();
	const { id } = useParams();
	useEffect(() => {
		const fetchSearchItem = async () => {
			const { data } = await axios.get(`https://62bdd539c5ad14c110c7845c.mockapi.io/items/${id}`);
			setItem(data);
		};
		fetchSearchItem();
	}, [id]);

	if (!item) return <></>;
	return (
		<div className="pizza-block">
			<img className="pizza-block__image" src={item.imageUrl} alt="Pizza" />
			<h4 className="pizza-block__title">{item.name}</h4>
			<div className="pizza-block__selector">
				<div className="descr">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt tenetur
					culpa ipsam provident, aut eos molestiae dicta architecto consectetur quam corrupti amet
					animi nisi delectus optio dignissimos excepturi iure!
				</div>
			</div>
			<div className="pizza-block__bottom" style={{ display: "block" }}>
				<div className="pizza-block__price" style={{ margin: "0 auto" }}>
					{item.price}руб.
				</div>
				<div className="cart__bottom" style={{ padding: "40px 0" }}>
					<div className="cart__bottom-buttons" style={{ margin: " 0" }}>
						<Link to="/" className="button button--outline button--add go-back-btn">
							<svg
								width="8"
								height="14"
								viewBox="0 0 8 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7 13L1 6.93015L6.86175 1"
									stroke="#D3D3D3"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
							</svg>

							<span>Вернуться назад</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FullPage;
