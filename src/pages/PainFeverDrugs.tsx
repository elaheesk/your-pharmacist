import { useEffect, useState } from "react";
import { MedicationCard } from "../components/medicationCards";
import { painAndFever } from "../api/categoriesApi";
import { DrugType } from "../type";
import "./page.css";
import { filteredByClass } from "../helperFunctions";
import HeaderComponent from "../components/headerComponent/HeaderComponent";
export interface IProps {
	recommendedDrugs: DrugType[];
}

const PainFeverDrugs = ({ recommendedDrugs }: IProps) => {
	const [filteredDrugs, setFilteredDrugs] = useState<DrugType[]>([]);
	const [chosenCategories, setChosenCategories] = useState<DrugType[]>([]);
	const [openDropdown, setOpenDropdown] = useState<boolean>(false);
	const [categoriesIsTrue, setCategoriesIsTrue] = useState<boolean>(false);
	const [chosenOptionValue, setChosenOptionValue] = useState<string>("");

	useEffect(() => {
		if (recommendedDrugs.length > 0) {
			const returnValue = filteredByClass(recommendedDrugs, "1");
			setChosenCategories(returnValue);
			setFilteredDrugs(returnValue);
		}
	}, [recommendedDrugs]);

	const handleChosenCategory = (option: string) => {
		if (filteredDrugs.length !== 0) {
			const filteredArrayyyyy = filteredDrugs.filter((drug: DrugType) =>
				drug.categories.includes(option)
			);
			for (let i = 0; i < painAndFever.length; i++) {
				if (painAndFever[i].optionValue === option)
					setChosenOptionValue(option);
				setOpenDropdown(false);
			}
			setCategoriesIsTrue(true);
			setChosenCategories(filteredArrayyyyy);
		}
	};

	const removeFiltered = () => {
		if (recommendedDrugs.length !== 0) {
			const returnValue = filteredByClass(recommendedDrugs, "1");
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
				categoryOptions={painAndFever}
				diseaseCategory="Pain & fever"
			/>
			<div className="card-parent">
				{chosenCategories.map((drug, idx) => (
					<MedicationCard drug={drug} key={idx} />
				))}
			</div>
		</div>
	);
};
export default PainFeverDrugs;
