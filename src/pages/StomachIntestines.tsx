import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { stomachIssues } from "../api/categoriesApi";
import { MedicationCard } from "../components/medicationCards";
import { DrugType } from "../type";
import { IProps } from "./PainFever";

import "./page.css";

const StomachIntestines = ({ recommendedDrugs }: IProps) => {
	const [filteredDrugs, setFilteredDrugs] = useState<DrugType[]>([]);
	const [chosenCategories, setChosenCategories] = useState<DrugType[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		const handleSelectedClass = () => {
			if (recommendedDrugs.length !== 0) {
				const filteredArrayyyyy = recommendedDrugs.filter(
					(drug: any) => drug.class === "3"
				);
				setFilteredDrugs(filteredArrayyyyy);
				setChosenCategories(filteredArrayyyyy);
			}
		};
		handleSelectedClass();
	}, [recommendedDrugs]);

	const handleChosenCategory = (option: string) => {
		if (filteredDrugs.length !== 0) {
			const filteredArrayyyyy = filteredDrugs.filter(
				(drug: any) => drug.categories === option
			);

			setChosenCategories(filteredArrayyyyy);
		}
	};
	return (
		<>
			<button onClick={() => navigate("/")}>Go back to home</button>
			<div className="sidebar-card-container">
				<div className="sidebar-parent">
					{stomachIssues.map((eachCateg, idx) => (
						<button
							className="sidebar-options"
							key={idx}
							onClick={() => handleChosenCategory(eachCateg.optionValue)}>
							{eachCateg.optionValue}
						</button>
					))}{" "}
				</div>
			</div>
			<div className="card-container">
				{chosenCategories.map((drug, idx) => (
					<MedicationCard drug={drug} key={idx} />
				))}
			</div>
		</>
	);
};
export default StomachIntestines;
