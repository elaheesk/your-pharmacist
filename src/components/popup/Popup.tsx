import { DrugType } from "../../type";
import "./popup.css";
interface PopupProps {
	setShowAlert: (val: boolean) => void;
	drug: DrugType;
}
const Popup = ({ setShowAlert, drug }: PopupProps) => {
	return (
		<div id="popup-alert">
			<div className="alert-box">
				<h3 className="alert-title">
					{drug?.interactions.map((int, idx) => (
						<div key={idx}>{int.name}</div>
					))}
				</h3>
				<p className="alert-message"></p>
				<section className="cta-btns">
					<button className="alert-yes-btn" onClick={() => setShowAlert(false)}>
						Close
					</button>
				</section>
			</div>
		</div>
	);
};
export default Popup;
