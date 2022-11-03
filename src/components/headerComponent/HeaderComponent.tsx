import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { RiArrowLeftLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { CategoriesOptions } from "../../type";
import "./../../pages/page.css";

interface IProps {
	openDropdown: boolean;
	categoriesIsTrue: boolean;
	chosenOptionValue: string;
	handleChosenCategory: (value: string) => void;
	removeFiltered: () => void;
	setOpenDropdown: (value: boolean) => void;
	categoryOptions: CategoriesOptions[];
	diseaseCategory: string;
}
const HeaderComponent = ({
	openDropdown,
	categoriesIsTrue,
	chosenOptionValue,
	handleChosenCategory,
	removeFiltered,
	setOpenDropdown,
	categoryOptions,
	diseaseCategory,
}: IProps) => {
	const navigate = useNavigate();
	return (
		<>
			{" "}
			<button className="go-back-btn" onClick={() => navigate("/")}>
				<RiArrowLeftLine className="go-back-icon" /> Go back to home
			</button>
			<div className="sidebar-card-container">
				<div className="sidebar-parent">
					<div className="breadCrumbs-container">
						<button className="home-btn" onClick={() => navigate("/")}>
							Home
						</button>

						<button className="home-btn" onClick={removeFiltered}>
							/ {diseaseCategory}
						</button>
						{categoriesIsTrue ? (
							<p className="optionValue">/ {chosenOptionValue}</p>
						) : (
							<></>
						)}
						{!openDropdown ? (
							<IoIosArrowForward
								className="dropdown-icons"
								style={{ display: categoriesIsTrue ? "none" : "flex" }}
								onClick={() => setOpenDropdown(true)}
							/>
						) : (
							<IoIosArrowDown
								className="dropdown-icons"
								onClick={() => setOpenDropdown(false)}
							/>
						)}
					</div>

					{!categoriesIsTrue && openDropdown && (
						<div className="hide-if-categories">
							<>
								{categoryOptions.map((eachCateg, idx) => (
									<button
										className="sidebar-options"
										key={idx}
										onClick={() => handleChosenCategory(eachCateg.optionValue)}>
										{eachCateg.optionValue}
									</button>
								))}{" "}
							</>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
export default HeaderComponent;
