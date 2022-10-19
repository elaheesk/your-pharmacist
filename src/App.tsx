import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { medicines } from "./api";
import ColdFlu from "./pages/ColdFlu";

import Home from "./pages/home/Home";
import PainFever from "./pages/PainFever";

import StomachIntestines from "./pages/StomachIntestines";
import { DrugType } from "./type";

const App = () => {
	const [recommendedDrugs, setRecommendedDrugs] = useState<any[]>([]);

	

	// const handleSelectedCategory = (opt: string) => {
	// 	setInputValue(opt);
	// 	if (recommendedDrugs.length !== 0) {
	// 		const filteredArrayyyyy = recommendedDrugs.filter(
	// 			(drug: any) => drug.categories === opt
	// 		);

	// 		setFilteredDrugs(filteredArrayyyyy);
	// 	}
	// };

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
			</Routes>
		</div>
	);
};

export default App;
