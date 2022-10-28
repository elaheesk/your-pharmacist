import { useState } from "react";
import { DrugType } from "../../type";
import "./accordion.css";

interface IAccordionProps {
	drug: DrugType;
}
const Accordion = ({ drug }: IAccordionProps) => {
	const [toggleOne, setToggleOne] = useState<boolean>(false);
	const [toggleTwo, setToggleTwo] = useState<boolean>(false);
	const [toggleThree, setToggleThree] = useState<boolean>(false);
	const [toggleFour, setToggleFour] = useState<boolean>(false);

	const [toggleOneColor, setToggleOneColor] =
		useState<string>("rgb(151, 225, 151)");
	const [toggleTwoColor, setToggleTwoColor] =
		useState<string>("rgb(151, 225, 151)");
	const [toggleThreeColor, setToggleThreeColor] =
		useState<string>("rgb(151, 225, 151)");
	const [toggleFourColor, setToggleFourColor] =
		useState<string>("rgb(151, 225, 151)");

	return (
		<div className="accordion-container">
			{" "}
			<button
				style={{
					backgroundColor: toggleOne ? "rgb(87, 206, 87)" : toggleOneColor,
				}}
				onClick={() => setToggleOne(!toggleOne)}
				className="accordion-btn">
				Possible side effects?
			</button>
			{toggleOne ? (
				<div className="sideEffects-container">
					{drug.sideEffects.map((sideEffect, idx) => (
						<p className="sideEffect-text" key={idx}>
							{sideEffect},
						</p>
					))}
				</div>
			) : (
				<></>
			)}
			<button
				style={{
					backgroundColor: toggleTwo ? "rgb(87, 206, 87)" : toggleTwoColor,
				}}
				onClick={() => setToggleTwo(!toggleTwo)}
				className="accordion-btn">
				{" "}
				During pregnancy and breastfeeding ?
			</button>
			{toggleTwo ? (
				<div className="sideEffects-container">
					<div>
						<span className="pregnancy-text" style={{ fontWeight: "bold " }}>
							Pregnancy:{" "}
						</span>
						<span className="pregnancy-text">{drug.pregnancy}</span>
						<div className="divider"></div>
						<span className="pregnancy-text" style={{ fontWeight: "bold " }}>
							Breastfeeding:{" "}
						</span>
						<span className="pregnancy-text">{drug.breastfeeding}</span>
					</div>
				</div>
			) : (
				<></>
			)}
			<button
				style={{
					backgroundColor: toggleThree ? "rgb(87, 206, 87)" : toggleThreeColor,
				}}
				onClick={() => setToggleThree(!toggleThree)}
				className="accordion-btn">
				Should I take this with between meals?
			</button>
			{toggleThree ? (
				<div className="sideEffects-container">
					{!drug.betweenMeals && !drug.withMeal && (
						<p className="sideEffect-text">
							You can take {drug.name} with or without meal
						</p>
					)}
					{drug.betweenMeals && drug.name !== "Omeprazol" && (
						<p className="sideEffect-text">
							Usually 1 hour before or two hours after meal
						</p>
					)}{" "}
					{drug.betweenMeals && drug.name === "Omeprazol" && (
						<p className="omeprazol-text">
							To get the best effect, you should take Omeprazol about 30 minutes
							before the first meal of the day.
						</p>
					)}
					{drug.withMeal && (
						<p className="sideEffect-text">
							It is best to take {drug.name} with meal
						</p>
					)}
				</div>
			) : (
				<></>
			)}
			<button
				style={{
					backgroundColor: toggleFour ? "rgb(87, 206, 87)" : toggleFourColor,
				}}
				onClick={() => setToggleFour(!toggleFour)}
				className="accordion-btn">
				{" "}
				Mechanism of action?
			</button>
			{toggleFour ? (
				<div className="sideEffects-container">
					<p className="pregnancy-text">{drug.pharmacodynamics}</p>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};
export default Accordion;
