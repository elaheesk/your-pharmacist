import { RiArrowLeftLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./questionsAnswers.css";
const QuestionsAnswers = () => {
	const navigate = useNavigate();
	return (
		<div className="questionsPage-container">
			<button className="go-back-btn" onClick={() => navigate("/")}>
				<RiArrowLeftLine className="go-back-icon" /> Go back to home
			</button>
			<h2 className="qa-heading">Common questions</h2>
			<div className="Question-container">
				<label>What are generic drugs?</label>
				<p className="answer">
					A generic drug is a medication created to be the same as an already
					marketed brand-name drug in dosage form, safety, strength, route of
					administration, quality, performance characteristics, and intended
					use. These similarities help to demonstrate bioequivalence, which
					means that a generic medicine works in the same way and provides the
					same clinical benefit as the brand-name medicine. In other words, you
					can take a generic medicine as an equal substitute for its brand-name
					counterpart.
				</p>
				<label>
					{" "}
					Why do generic medicines often cost less than the brand-name
					medicines?
				</label>
				<p>
					It is expensive to manufacture new medicines and therefore the company
					that manufactures a new drug is protected by patanet for a certain
					period of time (eg 20 years) and during this time no one else is
					allowed to manufacture it. When there is only one company that
					provides a certain drug, prices are expensive at first, but then when
					the patent expires, other companies can also start manufacturing the
					same drug (generic drug) and then the prices drop because they compete
					with each other.Generic drugs are approved only after a rigorous
					review by FDA (in Sweden 'Läkemedelsverket') that requires a generic
					drug manufacturer to follow the same standards as the brand-name
					manufacturing process. They are often made in the same facilities.
					Therefore, generic drugs are cheaper even though they contain the same
					active substance Generic drugs tend to cost less than their brand-name
					counterparts because generic drug applicants do not have to repeat
					animal and clinical (human) studies that were required of the
					brand-name medicines to demonstrate safety and effectiveness. This
					abbreviated pathway is why the application is called an “abbreviated
					new drug application.”{" "}
				</p>
				<label>Classification of the interactions</label>
				<div>
					<p>
						The interactions are classified by letter (A-D). I have chosen in
						this project to only mention the interactions that are classified as
						C or D interaction because these are the ones that have clinical
						significance.
					</p>
					<p>A: The interaction lacks clinical significance.</p>
					<p>
						B: The clinical significance of the interaction is unknown and/or
						variable.
					</p>
					<p>
						C: Clinically significant interaction that can be managed with e.g.
						dose adjustment.
					</p>
					<p>D: Clinically significant interaction that should be avoided.</p>
				</div>
			</div>
		</div>
	);
};
export default QuestionsAnswers;
