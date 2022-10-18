import { useEffect, useState } from "react";
import { DrugType } from "../../type";
import Popup from "../popup/Popup";
import "./medicationCard.css";

interface CardProps {
	drug: DrugType;
}

export const MedicationCard = ({ drug }: CardProps) => {
	const [showAlert, setShowAlert] = useState<boolean>(false);
	useEffect(() => {}, []);

	return (
		<>
			{showAlert ? <Popup drug={drug} setShowAlert={setShowAlert} /> : null}
			<div className="card-container" key={drug?.id}>
				{drug?.activeSubstance.length !== 0 &&
					drug?.activeSubstance.map((substance, idx) => (
						<h4 key={idx}>{substance.name}</h4>
					))}

				<div className="img-description-container">
					{drug?.about.map((eachObj, idx) => (
						<div className="test" key={idx}>
							<img alt="medicin image " src={eachObj?.imageUrl} />
							<p className="dosage">
								{eachObj?.dosage} {eachObj?.quantity}
							</p>
						</div>
					))}
					<p className="description">{drug?.description}</p>
				</div>

				<div className="btn-dosage-container">
					{drug?.about.map((eachObj, idx) => (
						<div key={idx}>
							<p className="dosage">From {eachObj?.minAge} years</p>
							{drug.otcDrug ? <p>Detta är ett receptfrit läkemedel</p> : <></>}
						</div>
					))}

					<button
						className="interaction-btn"
						onClick={() => setShowAlert(!showAlert)}>
						See interactions with other medicines
					</button>
				</div>
			</div>
		</>
	);
};
