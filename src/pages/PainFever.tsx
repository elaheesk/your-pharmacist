import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MedicationCard } from "../components/medicationCards";
import Popup from "../components/popup/Popup";

export interface IProps {
	recommendedDrugs: any;
}

const PainFever = ({ recommendedDrugs }: IProps) => {
	const [filteredDrugs, setFilteredDrugs] = useState<any[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		const handleSelectedClass = () => {
			if (recommendedDrugs.length !== 0) {
				const filteredArrayyyyy = recommendedDrugs.filter(
					(drug: any) => drug.class === "1"
				);
				setFilteredDrugs(filteredArrayyyyy);
			}
		};
		handleSelectedClass();
	}, [recommendedDrugs]);
	return (
		<>
			<button onClick={() => navigate("/")}>Go back to home</button>
			{filteredDrugs.map((drug, idx) => (
				<MedicationCard drug={drug} key={idx} />
			))}
		</>
	);
};
export default PainFever;
