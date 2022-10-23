import { useEffect, useState } from "react";
import { DrugType } from "../../type";
import Accordion from "../accordion/Accordion";
import Popup from "../popup/Popup";
import "./medicationCard.css";

interface CardProps {
	drug: DrugType;
}

export const MedicationCard = ({ drug }: CardProps) => {
	const [showAlert, setShowAlert] = useState<boolean>(false);

	return (
		<div className="card-container" key={drug?.id}>
			<label>{drug.name}</label>
			{drug?.activeSubstance.map((substance, idx) => (
				<p className="activeSubs-name" key={idx}>
					({substance.name})
				</p>
			))}
			<div className="img-description-container">
				<img alt="medicin image " src={drug?.imageUrl} />
				<p className="dosag-mobileSize">
					{drug?.dosage} {drug?.quantity}
				</p>
				<p className="drug-description">{drug?.description}</p>
			</div>
			<p className="dosag-tabletSize">
				{drug?.dosage} {drug?.quantity}
			</p>
			{drug.otcDrug ? (
				<p className="otc-drug">This is an over-the-counter (otc) medicine</p>
			) : (
				<></>
			)}
			{showAlert ? (
				<Popup drug={drug} setShowAlert={setShowAlert} />
			) : (
				<p className="minage">From {drug?.minAge} years</p>
			)}
			<div className="btn-minage-container">
				{!showAlert ? (
					<button
						className="interaction-btn"
						onClick={() => setShowAlert(!showAlert)}>
						Interactions with other drugs
					</button>
				) : (
					<></>
				)}
				<Accordion drug={drug} />
			</div>
		</div>
	);
};
