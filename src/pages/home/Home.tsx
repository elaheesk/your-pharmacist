import { useEffect, useState } from "react";
import "./home.css";

import { MedicationCard } from "../../components/medicationCards";
import { DrugType, NameProps } from "../../type";
import { Link } from "react-router-dom";

interface PageProps {
	recommendedDrugs: any;
}
const Home = ({ recommendedDrugs }: PageProps) => {
	const [inputValue, setInputValue] = useState<string>("");
	const [filteredDrugs, setFilteredDrugs] = useState<DrugType[]>([]);
	const [showDropdown, setShowDropdown] = useState<boolean>(false);
	useEffect(() => {
		if (inputValue) {
			const filteredResponse = recommendedDrugs.filter((searched: DrugType) =>
				searched?.name
					?.toLocaleLowerCase()
					.startsWith(inputValue.toLocaleLowerCase())
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
	};

	// 👇️ sort by String property DESCENDING (Z - A)
	const strDescending = () => {
		const copyArray = [...filteredDrugs];
		const sortedArr = copyArray.sort((a, b) => (a.name > b.name ? -1 : 1));
		console.log("dsc", sortedArr);
		setFilteredDrugs(sortedArr);
	};

	return (
		<div className="main-container">
			<h3 className="main-title">Elahes recommendations</h3>
			<div className="link-container">
				<Link className="links" to="/painfever">
					Pain & fever{" "}
				</Link>

				<Link className="links" to="/coldflu">
					cold & flu
				</Link>
				<Link className="links" to="/stomach">
					Stomach & intestines
				</Link>
			</div>
			<div className="filtrer-sort-container">
				<input
					value={inputValue}
					placeholder="Name of the medicine"
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
								<button className="sort-btn" onClick={strAscending}>
									A to Z
								</button>

								<button className="sort-btn" onClick={strDescending}>
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

			{filteredDrugs.length !== 0 &&
				filteredDrugs.map((drug: DrugType) => (
					<MedicationCard drug={drug} key={drug.id} />
				))}
		</div>
	);
};
export default Home;
