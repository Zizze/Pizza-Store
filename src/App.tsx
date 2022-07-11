import Header from "./components/Header";
import HomePage from "./components/pages/Home";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";

const FullPage = lazy(() => import("./components/pages/FullPage"));
const CartPage = lazy(() => import("./components/pages/Cart"));

const App = () => {
	return (
		<div className="wrapper">
			<Header />
			<Suspense fallback={<div>Загрузка...</div>}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="/pizza/:id" element={<FullPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
