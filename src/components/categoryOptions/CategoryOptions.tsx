import "./categoryOptions.css";
import { GiNoseFront, GiStomach, GiMedicalThermometer } from "react-icons/gi";
import { FaAllergies } from "react-icons/fa";
import { IOptionsObject } from "../../pages/advicePage/AdvicePage";
import { useNavigate } from "react-router-dom";
interface IOption {
	option: IOptionsObject;
}
const CategoryOptions = ({ option }: IOption) => {
	const navigate = useNavigate();
	const navigateToOption = () => {
		navigate(`/options/${option.optionId}`);
	};
	return (
		<div className="category-container" onClick={navigateToOption}>
			<div className="options-icons">
				{option.name === "Cold & flu" && <GiNoseFront />}
			</div>
			<div className="options-icons">
				{option.name === "Allergies" && <FaAllergies />}
			</div>
			<div className="options-icons">
				{option.name === "Stomach & intestines" && <GiStomach />}
			</div>
			<div className="options-icons">
				{option.name === "Pain & fever" && <GiMedicalThermometer />}
			</div>

			<label className="option-name">{option.name}</label>
		</div>
	);
};
export default CategoryOptions;
