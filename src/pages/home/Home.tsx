import { useEffect, useState } from "react";
import "./home.css";
import { medicines } from "../../api";

import { CategoriesBar } from "../../components/categoriesBar";
import { MedicationCard } from "../../components/medicationCards";
import { DrugType } from "../../type";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
interface PageProps {
	recommendedDrugs: any;
	inputValue: string;
	setInputValue: (val: string) => void;
	handleSelectedClass: any;
	filteredDrugs: any;
}
const Home = ({
	recommendedDrugs,
	inputValue,
	setInputValue,
	handleSelectedClass,
	filteredDrugs,
}: PageProps) => {
	useEffect(() => {
		console.log("recommendedDrugs", recommendedDrugs.class);
	}, [recommendedDrugs]);

	return (
		<div className="main-container">
			<h4>Elahes recommendations</h4>
			<div>
				<Link className="Links" to="/painfever">
					Pain & fever{" "}
				</Link>

				<Link className="Links" to="/coldflu">
					cold & flu
				</Link>
				<Link className="Links" to="/stomach">
					Stomach & intestines
				</Link>
			</div>

			<p>
				The drug-related injuries make up a large part of the healthcare
				injuries and cause a great deal of suffering for the patient who is
				affected. In addition, drug-related injuries entail large costs for
				society. Drug treatment can cure, relieve and prevent diseases and
				thereby contribute to increased survival and improved quality of life.
				However, all drug treatment entails a risk of drug-related injuries.
			</p>
			<p>
				A participating and informed patient contributes to safety Safe drug use
				requires that the patient understands the purpose of the treatment.
				Therefore, it is important that the patient receives information about
				the drug treatment, the risks that may arise and what the patient should
				pay attention to.
			</p>
			{/* <>
				<CategoriesBar
					dropdownOptions={problemsOptions}
					inputValue={inputValue}
					handleSelectField={handleSelectedClass}
				/>
			</> */}
			{/* <div>
				{inputValue === "3" ? (
					<CategoriesBar
						dropdownOptions={stomachIssues}
						inputValue={inputValue}
						handleSelectField={handleSelectedCategory}
					/>
				) : (
					<></>
				)}
			</div> */}
			{/* <div>
				{inputValue === "2" ? (
					<CategoriesBar
						dropdownOptions={coldAndFlu}
						inputValue={inputValue}
						handleSelectField={handleSelectedCategory}
					/>
				) : (
					<></>
				)}
			</div> */}
			<div>
				{filteredDrugs.length !== 0 &&
					filteredDrugs.map((drug: DrugType) => (
						<MedicationCard drug={drug} key={drug.id} />
					))}
			</div>
		</div>
	);
};
export default Home;
