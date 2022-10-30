import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { medicines } from "./api";

import Home from "./pages/home/Home";

import "./App.css";
import QuestionsAnswers from "./pages/q&a/QuestionsAnswers";
import NavBar from "./components/navBar/NavBar";
import ColdFluDrugs from "./pages/PainFeverDrugs";
import PainFeverDrugs from "./pages/PainFeverDrugs";
import StomachIntestinesDrugs from "./pages/StomachIntestinesDrugs";
import SingleDrug from "./pages/singleDrug/SingleDrug";

const App = () => {
	const [recommendedDrugs, setRecommendedDrugs] = useState<any[]>([]);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handleClick = (event: any) => {
		console.log(event.currentTarget);
		setIsOpen(false);
	};
	useEffect(() => {
		const timer = setTimeout(() => setRecommendedDrugs(medicines.data), 500);

		return () => clearTimeout(timer);
	}, [recommendedDrugs]);
	return (
		<div onClick={isOpen ? handleClick : undefined} className="app-container">
			<div className="navBar-parent">
				{" "}
				<NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>

			<Routes>
				<Route
					path="/:id"
					element={<SingleDrug recommendedDrugs={recommendedDrugs} />}
				/>

				<Route
					path="/painfever"
					element={<PainFeverDrugs recommendedDrugs={recommendedDrugs} />}
				/>
				<Route
					path="/coldflu"
					element={<ColdFluDrugs recommendedDrugs={recommendedDrugs} />}
				/>
				<Route
					path="/stomach"
					element={
						<StomachIntestinesDrugs recommendedDrugs={recommendedDrugs} />
					}
				/>
				<Route path="/qa" element={<QuestionsAnswers />} />
				<Route
					path="/"
					element={<Home recommendedDrugs={recommendedDrugs} />}
				/>
			</Routes>
		</div>
	);
};

export default App;
