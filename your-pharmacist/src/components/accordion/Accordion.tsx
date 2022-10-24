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

	return (
		<div className="accordion-container">
			{" "}
			<button
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
				onClick={() => setToggleTwo(!toggleTwo)}
				className="accordion-btn">
				{" "}
				Is it ok during pregnancy or breastfeeding ?
			</button>
			{toggleTwo ? (
				<div className="sideEffects-container">
					<p className="pregnancy-text">{drug.pregnancy}</p>
					<p className="breastfeeding-text">{drug.breastfeeding}</p>
				</div>
			) : (
				<></>
			)}
			<button
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
