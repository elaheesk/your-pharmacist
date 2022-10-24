import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { medicines } from "./api";
import ColdFlu from "./pages/ColdFlu";

import Home from "./pages/home/Home";
import PainFever from "./pages/PainFever";

import StomachIntestines from "./pages/StomachIntestines";
import "./App.css";
import QuestionsAnswers from "./pages/q&a/QuestionsAnswers";

const App = () => {
	const [recommendedDrugs, setRecommendedDrugs] = useState<any[]>([]);

	useEffect(() => {
		const timer = setTimeout(() => setRecommendedDrugs(medicines.data), 500);

		return () => clearTimeout(timer);
	}, [recommendedDrugs]);
	return (
		<div className="app-container">
			{" "}
			<Routes>
				<Route
					path="/"
					element={<Home recommendedDrugs={recommendedDrugs} />}
				/>
				<Route
					path="/painfever"
					element={<PainFever recommendedDrugs={recommendedDrugs} />}
				/>
				<Route
					path="/coldflu"
					element={<ColdFlu recommendedDrugs={recommendedDrugs} />}
				/>
				<Route
					path="/stomach"
					element={<StomachIntestines recommendedDrugs={recommendedDrugs} />}
				/>
				<Route path="/qa" element={<QuestionsAnswers />} />
			</Routes>
		</div>
	);
};

export default App;
