import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { stomachIssues } from "../api/categoriesApi";
import { MedicationCard } from "../components/medicationCards";
import { DrugType } from "../type";
import { IProps } from "./PainFeverDrugs";
import { RiArrowLeftLine } from "react-icons/ri";
import "./page.css";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { filteredByClass } from "../helperFunctions";

const StomachIntestinesDrugs = ({ recommendedDrugs }: IProps) => {
	const [filteredDrugs, setFilteredDrugs] = useState<DrugType[]>([]);
	const [chosenCategories, setChosenCategories] = useState<DrugType[]>([]);
	const [openDropdown, setOpenDropdown] = useState<boolean>(false);
	const [categoriesIsTrue, setCategoriesIsTrue] = useState<boolean>(false);
	const [chosenOptionValue, setChosenOptionValue] = useState<string>("");
	const navigate = useNavigate();

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
			const filteredArrayyyyy = recommendedDrugs.filter(
				(drug: any) => drug.class === "3"
			);
			setChosenCategories(filteredArrayyyyy);
			setCategoriesIsTrue(false);
		}
	};
	return (
		<div className="page-container">
			<button className="go-back-btn" onClick={() => navigate("/")}>
				<RiArrowLeftLine className="go-back-icon" /> Go back to home
			</button>
			<div className="sidebar-card-container">
				<div className="sidebar-parent">
					<div className="breadCrumbs-container">
						<button className="home-btn" onClick={() => navigate("/")}>
							Home
						</button>

						<button className="home-btn" onClick={removeFiltered}>
							/ Stomach & Intestines
						</button>
						{categoriesIsTrue ? (
							<p className="optionValue">/ {chosenOptionValue}</p>
						) : (
							<></>
						)}
						{!openDropdown ? (
							<IoIosArrowForward
								className="dropdown-icons"
								style={{ display: categoriesIsTrue ? "none" : "flex" }}
								onClick={() => setOpenDropdown(true)}
							/>
						) : (
							<IoIosArrowDown
								className="dropdown-icons"
								onClick={() => setOpenDropdown(false)}
							/>
						)}
					</div>

					{!categoriesIsTrue && openDropdown && (
						<div className="hide-if-categories">
							<>
								{stomachIssues.map((eachCateg, idx) => (
									<button
										className="sidebar-options"
										key={idx}
										onClick={() => handleChosenCategory(eachCateg.optionValue)}>
										{eachCateg.optionValue}
									</button>
								))}{" "}
							</>
						</div>
					)}
				</div>
			</div>
			<div className="card-parent">
				{chosenCategories.map((drug, idx) => (
					<MedicationCard drug={drug} key={idx} />
				))}
			</div>
		</div>

		// <div className="page-container">
		// 	<button className="go-back-btn" onClick={() => navigate("/")}>
		// 		<RiArrowLeftLine className="go-back-icon" /> Go back to home
		// 	</button>
		// 	<div className="sidebar-card-container">
		// 		<div className="sidebar-parent">
		// 			{stomachIssues.map((eachCateg, idx) => (
		// 				<button
		// 					className="sidebar-options"
		// 					key={idx}
		// 					onClick={() => handleChosenCategory(eachCateg.optionValue)}>
		// 					{eachCateg.optionValue}
		// 				</button>
		// 			))}{" "}
		// 		</div>
		// 	</div>
		// 	<div className="card-parent">
		// 		{chosenCategories.map((drug, idx) => (
		// 			<MedicationCard drug={drug} key={idx} />
		// 		))}
		// 	</div>
		// </div>
	);
};
export default StomachIntestinesDrugs;
