import { useEffect, useState } from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { MedicationCard } from "../components/medicationCards";
import { DrugType } from "../type";
import "./page.css";
import { IProps } from "./PainFeverDrugs";

const PrescriptionDrugs = ({ recommendedDrugs }: IProps) => {
	const [prescribed, setPrescribed] = useState<DrugType[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		const handleSelectedClass = () => {
			if (recommendedDrugs.length !== 0) {
				const prescribedDrugs = recommendedDrugs.filter(
					(drug: any) => drug.otcDrug === false
				);

				setPrescribed(prescribedDrugs);
			}
		};
		handleSelectedClass();
	}, [recommendedDrugs]);

	return (
		<div className="page-container">
			<button className="go-back-btn" onClick={() => navigate("/")}>
				<RiArrowLeftLine className="go-back-icon" /> Go back to home
			</button>
			<div className="sidebar-card-container"></div>
			<div className="test">
				{prescribed.map((drug, idx) => (
					<MedicationCard drug={drug} key={idx} />
				))}
			</div>
		</div>
	);
};
export default PrescriptionDrugs;
