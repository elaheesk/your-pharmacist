import { useEffect, useState } from "react";
import "./home.css";
import { medicines } from "../../api";

import { CategoriesBar } from "../../components/categoriesBar";
import { MedicationCard } from "../../components/medicationCards";
import { DrugType, NameProps } from "../../type";
import { Link, useNavigate } from "react-router-dom";

interface PageProps {
	recommendedDrugs: any;
}
const Home = ({ recommendedDrugs }: PageProps) => {
	const [inputValue, setInputValue] = useState<string>("");
	const [filteredDrugs, setFilteredDrugs] = useState<DrugType[]>([]);

	useEffect(() => {
		if (inputValue) {
			const filteredResponse = recommendedDrugs.filter((searched: DrugType) =>
				searched?.name
					?.toLocaleLowerCase()
					.startsWith(inputValue.toLocaleLowerCase())
			);
			// ||
			// recommendedDrugs.filter((searched: any) => {
			// 	return searched?.activeSubstance.map((subst: NameProps) =>
			// 		subst?.name
			// 			.toLocaleLowerCase()
			// 			.includes(inputValue.toLocaleLowerCase())
			// 	);
			// });
			console.log(filteredResponse, "filteredResponse");

			setFilteredDrugs(filteredResponse);
		} else {
			setFilteredDrugs(recommendedDrugs);
		}
	}, [recommendedDrugs, inputValue]);
	console.log("input", inputValue);

	return (
		<div className="main-container">
			<h4>Elahes recommendations</h4>
			<div className="link-input-container">
				<Link className="Links" to="/painfever">
					Pain & fever{" "}
				</Link>

				<Link className="Links" to="/coldflu">
					cold & flu
				</Link>
				<Link className="Links" to="/stomach">
					Stomach & intestines
				</Link>
				<input
					value={inputValue}
					placeholder="Name of the medicine"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setInputValue(e.target.value)
					}
					type="text"
				/>
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
