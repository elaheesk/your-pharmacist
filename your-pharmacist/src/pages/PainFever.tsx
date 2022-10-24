import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MedicationCard } from "../components/medicationCards";
import { RiArrowLeftLine } from "react-icons/ri";
import Popup from "../components/popup/Popup";
import { painAndFever } from "../api/categoriesApi";
import { DrugType } from "../type";

export interface IProps {
	recommendedDrugs: any;
}

const PainFever = ({ recommendedDrugs }: IProps) => {
	const [filteredDrugs, setFilteredDrugs] = useState<any[]>([]);
	const [chosenCategories, setChosenCategories] = useState<DrugType[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		const handleSelectedClass = () => {
			if (recommendedDrugs.length !== 0) {
				const filteredArrayyyyy = recommendedDrugs.filter(
					(drug: any) => drug.class === "1"
				);
				console.log("filteredArrayyyyy", filteredArrayyyyy);

				setFilteredDrugs(filteredArrayyyyy);
				setChosenCategories(filteredArrayyyyy);
			}
		};
		handleSelectedClass();
	}, [recommendedDrugs]);

	const handleChosenCategory = (option: string) => {
		if (filteredDrugs.length !== 0) {
			console.log("option", option);
			const filteredArrayyyyy = filteredDrugs.filter((drug: any) =>
				drug.categories.includes(option)
			);
			console.log("should show only sumatri", filteredArrayyyyy);

			setChosenCategories(filteredArrayyyyy);
		}
	};
	return (
		<div className="page-container">
			<button className="go-back-btn" onClick={() => navigate("/")}>
				<RiArrowLeftLine className="go-back-icon" /> Go back to home
			</button>
			<div className="sidebar-card-container">
				<div className="sidebar-parent">
					{painAndFever.map((eachCateg, idx) => (
						<button
							className="sidebar-options"
							key={idx}
							onClick={() => handleChosenCategory(eachCateg.optionValue)}>
							{eachCateg.optionValue}
						</button>
					))}{" "}
				</div>
			</div>
			{chosenCategories.map((drug, idx) => (
				<MedicationCard drug={drug} key={idx} />
			))}
		</div>
	);
};
export default PainFever;
