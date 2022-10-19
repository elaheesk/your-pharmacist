import { DrugType } from "../../type";
import "./popup.css";
import { AiOutlineClose } from "react-icons/ai";
interface PopupProps {
	setShowAlert: (val: boolean) => void;
	drug: DrugType;
}
const Popup = ({ setShowAlert, drug }: PopupProps) => {
	console.log(
		"names",
		drug.interactions.map((on) => on)
	);

	return (
		<div id="popup-alert">
			<div className="alert-box">
				<button className="alert-close-btn" onClick={() => setShowAlert(false)}>
					<AiOutlineClose className="icon" />
				</button>
				{drug?.interactions.map((int, idx) => (
					<div key={idx} className="interactions-container">
						<section className="alert-name-btn-container">
							<p className="interactions-name">
								{" "}
								{int?.name}: {int.consequence}
							</p>
						</section>

						<p> Suggestions: {int.suggestions}</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default Popup;
