import { useEffect, useState } from "react";
import "./home.css";
import { medicines } from "../../api";

import { CategoriesBar } from "../../components/categoriesBar";
import { MedicationCard } from "../../components/medicationCards";
import { DrugType } from "../../type";
import { Link, useNavigate } from "react-router-dom";

interface PageProps {
	recommendedDrugs: any;
}
const Home = ({ recommendedDrugs }: PageProps) => {
	const [inputValue, setInputValue] = useState<string>("");
	const [filteredDrugs, setFilteredDrugs] = useState<DrugType[]>([]);

	useEffect(() => {
		if (inputValue) {
			const filteredResponse = recommendedDrugs.filter((searched: DrugType) => {
				return searched?.name
					?.toLocaleLowerCase()
					.startsWith(inputValue.toLocaleLowerCase());
				// searched?.activeSubstance.map((subst) =>
				// 	subst.name
				// 		.toLocaleLowerCase()
				// 		.startsWith(inputValue.toLocaleLowerCase())
				// )
			});

			setFilteredDrugs(filteredResponse);
		} else {
			setFilteredDrugs(recommendedDrugs);
		}
	}, [recommendedDrugs, inputValue]);

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
			<div>
				{filteredDrugs.length !== 0 &&
					filteredDrugs.map((drug: DrugType) => (
						<MedicationCard drug={drug} key={drug.id} />
					))}
			</div>
		</div>
	);
};
export default Home;
