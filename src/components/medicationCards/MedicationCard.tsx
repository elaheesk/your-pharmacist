import { useEffect, useState } from "react";
import { DrugType } from "../../type";
import Popup from "../popup/Popup";
import "./medicationCard.css";

interface CardProps {
	drug: DrugType;
}

export const MedicationCard = ({ drug }: CardProps) => {
	const [showAlert, setShowAlert] = useState<boolean>(false);
	useEffect(() => {
		console.log("showale", showAlert);
		console.log(
			"drugname",
			drug.interactions.map((int) => int.name)
		);
	}, [showAlert]);

	return (
		<>
			<div className="card-container" key={drug?.id}>
				{drug?.activeSubstance.map((substance, idx) => (
					<label key={idx}>{substance.name}</label>
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
				{drug.otcDrug ? <p>Detta är ett receptfrit läkemedel</p> : <></>}
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
				</div>
			</div>
		</>
	);
};
