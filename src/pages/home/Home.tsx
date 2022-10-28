import { useEffect, useState } from "react";
import { MedicationCard } from "../../components/medicationCards";
import { DrugType } from "../../type";
import "./home.css";

interface PageProps {
	recommendedDrugs: any;
}
const Home = ({ recommendedDrugs }: PageProps) => {
	const [inputValue, setInputValue] = useState<string>("");
	const [filteredDrugs, setFilteredDrugs] = useState<DrugType[]>([]);
	const [showDropdown, setShowDropdown] = useState<boolean>(false);
	const [ascSortColor, setAscSortColor] = useState("rgb(182, 235, 182)");
	const [dscSortColor, setDscSortColor] = useState("rgb(182, 235, 182)");
	useEffect(() => {
		if (inputValue) {
			const filteredResponse = recommendedDrugs.filter(
				(searched: DrugType) =>
					searched?.name
						?.toLocaleLowerCase()
						.startsWith(inputValue.toLocaleLowerCase()) ||
					searched?.activeSubstance
						?.toLocaleLowerCase()
						.includes(inputValue.toLocaleLowerCase())
			);

			setFilteredDrugs(filteredResponse);
		} else {
			setFilteredDrugs(recommendedDrugs);
		}
	}, [recommendedDrugs, inputValue]);

	const strAscending = () => {
		const copyArray = [...filteredDrugs];
		const sortedArr = copyArray.sort((a, b) => (a.name > b.name ? 1 : -1));
		console.log("asc", sortedArr);
		setFilteredDrugs(sortedArr);
		setAscSortColor("rgb(87, 206, 87)");
		setDscSortColor("rgb(182, 235, 182)");
	};

	// 👇️ sort by String property DESCENDING (Z - A)
	const strDescending = () => {
		const copyArray = [...filteredDrugs];
		const sortedArr = copyArray.sort((a, b) => (a.name > b.name ? -1 : 1));
		console.log("dsc", sortedArr);
		setFilteredDrugs(sortedArr);
		setDscSortColor("rgb(87, 206, 87)");
		setAscSortColor("rgb(182, 235, 182)");
	};

	return (
		<div className="main-container">
			<div className="filtrer-sort-container">
				<input
					value={inputValue}
					placeholder="Search medicine"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setInputValue(e.target.value)
					}
					type="text"
				/>
				<div className="sort-container">
					<button
						className="sort-btn"
						onClick={() => setShowDropdown(!showDropdown)}>
						Sort
					</button>
					<div className="sort-dropdown">
						{showDropdown ? (
							<>
								<button
									style={{ backgroundColor: ascSortColor }}
									className="sort-btn"
									onClick={strAscending}>
									A to Z
								</button>

								<button
									style={{ backgroundColor: dscSortColor }}
									className="sort-btn"
									onClick={strDescending}>
									Z to A
								</button>
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>

			<div className="prewords-container">
				<p className="prewords">
					The drug-related injuries make up a large part of the healthcare
					injuries and cause a great deal of suffering for the patient who is
					affected. In addition, drug-related injuries entail large costs for
					society. Drug treatment can cure, relieve and prevent diseases and
					thereby contribute to increased survival and improved quality of life.
					However, all drug treatment entails a risk of drug-related injuries.
				</p>
				<p className="prewords">
					A participating and informed patient contributes to safety Safe drug
					use requires that the patient understands the purpose of the
					treatment. Therefore, it is important that the patient receives
					information about the drug treatment, the risks that may arise and
					what the patient should pay attention to.
				</p>
			</div>
			<div className="test">
				{filteredDrugs.length !== 0 &&
					filteredDrugs.map((drug: DrugType) => (
						<MedicationCard drug={drug} key={drug.id} />
					))}
			</div>
		</div>
	);
};
export default Home;
