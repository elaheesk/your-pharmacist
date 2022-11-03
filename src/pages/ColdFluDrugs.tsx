import { useEffect, useState } from "react";
import { coldAndFlu } from "../api/categoriesApi";
import { MedicationCard } from "../components/medicationCards";
import { DrugType } from "../type";
import "./page.css";
import { filteredByClass } from "../helperFunctions";
import HeaderComponent from "../components/headerComponent/HeaderComponent";
interface IColdFlu {
	recommendedDrugs: DrugType[];
}
const ColdFluDrugs = ({ recommendedDrugs }: IColdFlu) => {
	const [filteredDrugs, setFilteredDrugs] = useState<DrugType[]>([]);
	const [chosenCategories, setChosenCategories] = useState<DrugType[]>([]);
	const [openDropdown, setOpenDropdown] = useState<boolean>(false);
	const [categoriesIsTrue, setCategoriesIsTrue] = useState<boolean>(false);
	const [chosenOptionValue, setChosenOptionValue] = useState<string>("");

	useEffect(() => {
		if (recommendedDrugs.length > 0) {
			const returnValue = filteredByClass(recommendedDrugs, "2");
			setChosenCategories(returnValue);
			setFilteredDrugs(returnValue);
		}
	}, [recommendedDrugs]);

	const handleChosenCategory = (option: string) => {
		if (filteredDrugs.length !== 0) {
			const filteredArrayyyyy = filteredDrugs.filter(
				(drug: DrugType) => drug.categories === option
			);
			for (let i = 0; i < coldAndFlu.length; i++) {
				if (coldAndFlu[i].optionValue === option) setChosenOptionValue(option);
				setOpenDropdown(false);
			}

			setCategoriesIsTrue(true);
			setChosenCategories(filteredArrayyyyy);
		}
	};

	const removeFiltered = () => {
		if (recommendedDrugs.length !== 0) {
			const returnValue = filteredByClass(recommendedDrugs, "2");
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
				categoryOptions={coldAndFlu}
				diseaseCategory="Cold & Flu"
			/>
			<div className="card-parent">
				{chosenCategories.map((drug, idx) => (
					<MedicationCard drug={drug} key={idx} />
				))}
			</div>
		</div>
	);
};
export default ColdFluDrugs;
