import { useEffect, useState } from "react";
import { stomachIssues } from "../api/categoriesApi";
import { MedicationCard } from "../components/medicationCards";
import { DrugType } from "../type";
import { IProps } from "./PainFeverDrugs";
import "./page.css";
import { filteredByClass } from "../helperFunctions";
import HeaderComponent from "../components/headerComponent/HeaderComponent";

const StomachIntestinesDrugs = ({ recommendedDrugs }: IProps) => {
	const [filteredDrugs, setFilteredDrugs] = useState<DrugType[]>([]);
	const [chosenCategories, setChosenCategories] = useState<DrugType[]>([]);
	const [openDropdown, setOpenDropdown] = useState<boolean>(false);
	const [categoriesIsTrue, setCategoriesIsTrue] = useState<boolean>(false);
	const [chosenOptionValue, setChosenOptionValue] = useState<string>("");

	useEffect(() => {
		if (recommendedDrugs.length > 0) {
			const returnValue = filteredByClass(recommendedDrugs, "3");

			setChosenCategories(returnValue);
			setFilteredDrugs(returnValue);
		}
	}, [recommendedDrugs]);

	const handleChosenCategory = (option: string) => {
		if (filteredDrugs.length !== 0) {
			const filteredArrayyyyy = filteredDrugs.filter(
				(drug: any) => drug.categories === option
			);
			for (let i = 0; i < stomachIssues.length; i++) {
				if (stomachIssues[i].optionValue === option)
					setChosenOptionValue(option);
				setOpenDropdown(false);
			}
			setCategoriesIsTrue(true);

			setChosenCategories(filteredArrayyyyy);
		}
	};

	const removeFiltered = () => {
		if (recommendedDrugs.length !== 0) {
			const returnValue = filteredByClass(recommendedDrugs, "3");
			setChosenCategories(returnValue);
			setCategoriesIsTrue(false);
		}
	};
	return (
		<div className="page-container">
			<HeaderComponent
				openDropdown={openDropdown}
				categoriesIsTrue={categoriesIsTrue}
				chosenOptionValue={chosenOptionValue}
				handleChosenCategory={handleChosenCategory}
				removeFiltered={removeFiltered}
				setOpenDropdown={setOpenDropdown}
				categoryOptions={stomachIssues}
				diseaseCategory="Stomach & Intestines"
			/>
			<div className="card-parent">
				{chosenCategories.map((drug, idx) => (
					<MedicationCard drug={drug} key={idx} />
				))}
			</div>
		</div>
	);
};
export default StomachIntestinesDrugs;
