import { useEffect, useState } from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import Accordion from "../../components/accordion/Accordion";
import Popup from "../../components/popup/Popup";
import { DrugType } from "../../type";
import "./singleDrug.css";

interface PageProps {
	recommendedDrugs: DrugType[];
}
const SingleDrug = ({ recommendedDrugs }: PageProps) => {
	const [showAlert, setShowAlert] = useState<boolean>(false);
	const { id } = useParams();
	const convertToInteger: any = id;
	const useParamsId: number = parseInt(convertToInteger);
	const [singleDrug, setSingleDrug] = useState<DrugType[]>([]);
	const [descriptionBox, setDescriptionBox] = useState<boolean>(true);
	const [dosageBox, setDosageBox] = useState<boolean>(false);
	const [mechanismBox, setMechanismBox] = useState<boolean>(false);
	const [descriptionBoxColor, setDescriptionBoxColor] =
		useState("rgb(131, 208, 131)");
	const [dosageBoxColor, setDosageBoxColor] = useState("rgb(182, 235, 182)");
	const [mechanismBoxColor, setMechanismBoxColor] =
		useState("rgb(182, 235, 182)");
	useEffect(() => {
		const getDrug = () => {
			if (recommendedDrugs.length !== 0) {
				const filteredDrug = recommendedDrugs.filter(
					(drug: DrugType) => drug.id === useParamsId
				);

				setSingleDrug(filteredDrug);
			}
		};

		getDrug();
	}, [recommendedDrugs]);

	const handleDescriptionBox = () => {
		setDescriptionBox(true);
		setDosageBox(false);
		setMechanismBox(false);
		setDescriptionBoxColor("rgb(131, 208, 131)");
		setDosageBoxColor("rgb(182, 235, 182)");
		setMechanismBoxColor("rgb(182, 235, 182)");
	};
	const handleDosageBox = () => {
		setDosageBox(true);
		setDescriptionBox(false);
		setMechanismBox(false);
		setDosageBoxColor("rgb(131, 208, 131)");
		setDescriptionBoxColor("rgb(182, 235, 182)");
		setMechanismBoxColor("rgb(182, 235, 182)");
	};
	const handleMechanismBox = () => {
		setMechanismBox(true);
		setDescriptionBox(false);
		setDosageBox(false);
		setMechanismBoxColor("rgb(131, 208, 131)");
		setDescriptionBoxColor("rgb(182, 235, 182)");
		setDosageBoxColor("rgb(182, 235, 182)");
	};
	const navigate = useNavigate();

	return (
		<>
			<div className="singleDrug-container">
				<button className="go-back-btn" onClick={() => navigate("/")}>
					<RiArrowLeftLine className="go-back-icon" /> Go back to home
				</button>

				{singleDrug.map((drug: DrugType) => (
					<div className="single-card-container" key={drug.id}>
						<p className="drug-name">{drug?.name}</p>

						<div
							className={
								drug.description.length < 400
									? "small-img-box-container"
									: "img-box-container"
							}>
							<div className="img-container-singleDrug">
								<img
									className="img-single-drug"
									alt="medicin image "
									src={drug?.imageUrl}
								/>
							</div>
							<div className="box-information-parent">
								<div className="box-titles">
									<button
										style={{ backgroundColor: descriptionBoxColor }}
										className="box-btns"
										onClick={handleDescriptionBox}>
										Description
									</button>
									<button
										style={{ backgroundColor: dosageBoxColor }}
										className="box-btns"
										onClick={handleDosageBox}>
										Dosage & use
									</button>
									<button
										style={{ backgroundColor: mechanismBoxColor }}
										className="box-btns"
										onClick={handleMechanismBox}>
										Mechanism of action
									</button>
								</div>
								<div className="information-box">
									{descriptionBox ? (
										<p className="drug-description">
											{drug.description}. From {drug.minAge} years of age.
										</p>
									) : (
										<></>
									)}
									{dosageBox ? (
										<div className="dosage-parent">
											<span
												className="drug-description"
												style={{ fontWeight: "bold " }}>
												Adults:
											</span>
											<span className="drug-description">
												{drug.dosing.adults}
											</span>
											{drug?.dosing?.children && (
												<>
													<div className="divider"></div>
													<span
														className="drug-description"
														style={{ fontWeight: "bold " }}>
														Children:
													</span>
													<span className="drug-description">
														{drug.dosing.children}
													</span>
												</>
											)}
										</div>
									) : (
										<></>
									)}
									{mechanismBox ? (
										<p className="drug-description">{drug.pharmacodynamics}</p>
									) : (
										<></>
									)}
								</div>
							</div>
						</div>

						{!showAlert ? (
							<button
								id="interaction-btn"
								onClick={() => setShowAlert(!showAlert)}>
								Interactions with other drugs
							</button>
						) : (
							<Popup drug={drug} setShowAlert={setShowAlert} />
						)}
						<div className="interactions-btn-container">
							<Accordion drug={drug} />
						</div>
					</div>
				))}
			</div>
		</>
	);
};
export default SingleDrug;
