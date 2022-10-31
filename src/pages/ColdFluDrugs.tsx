import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { coldAndFlu } from "../api/categoriesApi";
import { MedicationCard } from "../components/medicationCards";
import { DrugType } from "../type";
import { RiArrowLeftLine } from "react-icons/ri";
import "./page.css";
interface IColdFlu {
	recommendedDrugs: DrugType[];
}
const ColdFluDrugs = ({ recommendedDrugs }: IColdFlu): JSX.Element => {
	const [filteredDrugs, setFilteredDrugs] = useState<DrugType[]>([]);
	const [chosenCategories, setChosenCategories] = useState<DrugType[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		const handleSelectedClass = () => {
			if (recommendedDrugs.length !== 0) {
				const filteredArrayyyyy = recommendedDrugs.filter(
					(drug: any) => drug.class === "2"
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
		<div className="page-container">
			<button className="go-back-btn" onClick={() => navigate("/")}>
				<RiArrowLeftLine className="go-back-icon" /> Go back to home
			</button>
			<div className="sidebar-card-container">
				<div className="sidebar-parent">
					{coldAndFlu.map((eachCateg, idx) => (
						<button
							className="sidebar-options"
							key={idx}
							onClick={() => handleChosenCategory(eachCateg.optionValue)}>
							{eachCateg.optionValue}
						</button>
					))}{" "}
				</div>
			</div>
			<div className="test">
				{chosenCategories.map((drug, idx) => (
					<MedicationCard drug={drug} key={idx} />
				))}
			</div>
		</div>
	);
};
export default ColdFluDrugs;
