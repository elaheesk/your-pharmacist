import React from "react";
import { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/home/Home";
import NavBar from "./components/navBar/NavBar";
import Loader from "./components/loader/Loader";
import { medicines } from "./api";
import { DrugType } from "./type";
import "./App.css";
import SingleOptionsPage from "./pages/singleOptionsPage/SingleOptionsPage";
import { categoriesAndSubCategories } from "./api/categoriesApi";
import AllergyDrugs from "./pages/AllergyDrugs";

const App = () => {
	const Home = React.lazy(() => import("./pages/home/Home"));
	const ColdFluDrugs = React.lazy(() => import("./pages/ColdFluDrugs"));
	const SingleDrug = React.lazy(() => import("./pages/singleDrug/SingleDrug"));
	const PainFeverDrugs = React.lazy(() => import("./pages/PainFeverDrugs"));
	const StomachIntestinesDrugs = React.lazy(
		() => import("./pages/StomachIntestinesDrugs")
	);
	const PrescriptionDrugs = React.lazy(
		() => import("./pages/PrescriptionDrugs")
	);
	const QuestionsAnswers = React.lazy(
		() => import("./pages/q&a/QuestionsAnswers")
	);
	const AdvicePage = React.lazy(() => import("./pages/advicePage/AdvicePage"));
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
					element={
						<Suspense fallback={<Loader />}>
							<ColdFluDrugs recommendedDrugs={recommendedDrugs} />
						</Suspense>
					}
				/>

				<Route
					path="/options/:optionId"
					element={
						<Suspense fallback={<Loader />}>
							<SingleOptionsPage
								categoriesAndSubCategories={categoriesAndSubCategories}
							/>
						</Suspense>
					}
				/>
				<Route
					path="/:id"
					element={
						<Suspense fallback={<Loader />}>
							<SingleDrug recommendedDrugs={recommendedDrugs} />
						</Suspense>
					}
				/>

				<Route
					path="/prescriptiondrugs"
					element={
						<Suspense fallback={<Loader />}>
							<PrescriptionDrugs recommendedDrugs={recommendedDrugs} />
						</Suspense>
					}
				/>
				<Route
					path="/painfever"
					element={
						<Suspense fallback={<Loader />}>
							<PainFeverDrugs recommendedDrugs={recommendedDrugs} />
						</Suspense>
					}
				/>

				<Route
					path="/stomach"
					element={
						<Suspense fallback={<Loader />}>
							<StomachIntestinesDrugs recommendedDrugs={recommendedDrugs} />
						</Suspense>
					}
				/>
				<Route
					path="/allergy"
					element={
						<Suspense fallback={<Loader />}>
							<AllergyDrugs recommendedDrugs={recommendedDrugs} />
						</Suspense>
					}
				/>
				<Route
					path="advice"
					element={
						<Suspense fallback={<Loader />}>
							<AdvicePage />
						</Suspense>
					}
				/>

				<Route
					path="qa"
					element={
						<Suspense fallback={<Loader />}>
							<QuestionsAnswers />
						</Suspense>
					}
				/>

				<Route
					path="/"
					element={
						<Suspense fallback={<Loader />}>
							<Home recommendedDrugs={recommendedDrugs} />
						</Suspense>
					}
				/>
			</Routes>
		</div>
	);
};

export default App;
