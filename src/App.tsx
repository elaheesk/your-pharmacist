import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { medicines } from "./api";

import Home from "./pages/home/Home";

import "./App.css";
import QuestionsAnswers from "./pages/q&a/QuestionsAnswers";
import NavBar from "./components/navBar/NavBar";
import ColdFluDrugs from "./pages/ColdFluDrugs";
import StomachIntestinesDrugs from "./pages/StomachIntestinesDrugs";
import SingleDrug from "./pages/singleDrug/SingleDrug";
import { DrugType } from "./type";
import PainFeverDrugs from "./pages/PainFeverDrugs";
import PrescriptionDrugs from "./pages/PrescriptionDrugs";

const App = () => {
	const [recommendedDrugs, setRecommendedDrugs] = useState<DrugType[]>([]);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handleClick = (event: any) => {
		setIsOpen(false);
	};
	useEffect(() => {
		const timer = setTimeout(() => setRecommendedDrugs(medicines.data), 500);
		console.log("medicines.data", medicines.data);
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
					path="/coldflu"
					element={<ColdFluDrugs recommendedDrugs={recommendedDrugs} />}
				/>
				<Route
					path="/:id"
					element={<SingleDrug recommendedDrugs={recommendedDrugs} />}
				/>
				<Route
					path="/prescriptiondrugs"
					element={<PrescriptionDrugs recommendedDrugs={recommendedDrugs} />}
				/>

				<Route
					path="/painfever"
					element={<PainFeverDrugs recommendedDrugs={recommendedDrugs} />}
				/>

				<Route
					path="/stomach"
					element={
						<StomachIntestinesDrugs recommendedDrugs={recommendedDrugs} />
					}
				/>
				<Route path="qa" element={<QuestionsAnswers />} />
				<Route
					path="/"
					element={<Home recommendedDrugs={recommendedDrugs} />}
				/>
			</Routes>
		</div>
	);
};

export default App;
