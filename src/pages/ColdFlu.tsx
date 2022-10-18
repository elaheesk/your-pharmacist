import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MedicationCard } from "../components/medicationCards";
import { IProps } from "./PainFever";

const ColdFlu = ({ recommendedDrugs }: IProps) => {
	const [filteredDrugs, setFilteredDrugs] = useState<any[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		const handleSelectedClass = () => {
			if (recommendedDrugs.length !== 0) {
				const filteredArrayyyyy = recommendedDrugs.filter(
					(drug: any) => drug.class === "2"
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
export default ColdFlu;
