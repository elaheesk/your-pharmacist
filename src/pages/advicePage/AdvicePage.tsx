import { RiArrowLeftLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import CategoryOptions from "../../components/categoryOptions/CategoryOptions";
import "./advicePage.css";
export interface IOptionsObject {
	name: string;
	optionId: number;
}
const AdvicePage = () => {
	const categoriesOptions: IOptionsObject[] = [
		{ name: "Cold & flu", optionId: 1 },
		{ name: "Stomach & intestines", optionId: 2 },
		{ name: "Pain & fever", optionId: 3 },
		{ name: "Allergies", optionId: 4 },
	];
	const navigate = useNavigate();
	return (
		<div className="main-advice-container">
			<button className="go-back-btn" onClick={() => navigate("/")}>
				<RiArrowLeftLine className="go-back-icon" /> Go back to home
			</button>
			<div className="component-parent">
				{categoriesOptions.map((option: IOptionsObject) => (
					<CategoryOptions option={option} key={option.optionId} />
				))}
			</div>
		</div>
	);
};
export default AdvicePage;
