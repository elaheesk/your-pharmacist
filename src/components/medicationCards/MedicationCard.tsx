import { Link, useNavigate } from "react-router-dom";
import { DrugType } from "../../type";

import "./medicationCard.css";

interface CardProps {
	drug: DrugType;
}

export const MedicationCard = ({ drug }: CardProps) => {
	const navigate = useNavigate();
	return (
		<div className="card-container" key={drug?.id}>
			<label className="drug-name">{drug.name}</label>

			<p className="activeSubs-name">({drug.name})</p>

			<div className="img-container">
				<img
					className="img-all-drugs"
					alt="medicin image "
					src={drug?.imageUrl}
					onClick={() => navigate(`/${drug.id}`)}
				/>
			</div>
			<Link className="readMore-link" to={`/${drug.id}`}>
				Read more
			</Link>

			<p className="dosag-mobileSize">
				{drug?.dosage} {drug?.quantity}
			</p>

			{drug.otcDrug ? (
				<p className="otc-drug">This is an over-the-counter (otc) medicine</p>
			) : (
				<></>
			)}
		</div>
	);
};
