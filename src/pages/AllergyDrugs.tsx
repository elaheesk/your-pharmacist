import { useEffect, useState } from "react";
import { allergies } from "../api/categoriesApi";
import HeaderComponent from "../components/headerComponent/HeaderComponent";
import { MedicationCard } from "../components/medicationCards";
import { filteredByClass } from "../helperFunctions";
import { DrugType } from "../type";

interface IAllergy {
	recommendedDrugs: DrugType[];
}
const AllergyDrugs = ({ recommendedDrugs }: IAllergy) => {
	const [filteredDrugs, setFilteredDrugs] = useState<DrugType[]>([]);
	const [chosenCategories, setChosenCategories] = useState<DrugType[]>([]);
	const [openDropdown, setOpenDropdown] = useState<boolean>(false);
	const [categoriesIsTrue, setCategoriesIsTrue] = useState<boolean>(false);
	const [chosenOptionValue, setChosenOptionValue] = useState<string>("");

	useEffect(() => {
		if (recommendedDrugs.length > 0) {
			const returnValue = filteredByClass(recommendedDrugs, "4");
			setChosenCategories(returnValue);
			setFilteredDrugs(returnValue);
		}
	}, [recommendedDrugs]);

	const handleChosenCategory = (option: string) => {
		if (filteredDrugs.length !== 0) {
			const filteredArrayyyyy = filteredDrugs.filter(
				(drug: DrugType) => drug.categories === option
			);
			for (let i = 0; i < allergies.length; i++) {
				if (allergies[i].optionValue === option) setChosenOptionValue(option);
				setOpenDropdown(false);
			}

			setCategoriesIsTrue(true);
			setChosenCategories(filteredArrayyyyy);
		}
	};

	const removeFiltered = () => {
		if (recommendedDrugs.length !== 0) {
			const returnValue = filteredByClass(recommendedDrugs, "4");
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
				categoryOptions={allergies}
				diseaseCategory="Allergy"
			/>
			<div className="card-parent">
				{chosenCategories.map((drug, idx) => (
					<MedicationCard drug={drug} key={idx} />
				))}
			</div>
		</div>
	);
};
export default AllergyDrugs;
