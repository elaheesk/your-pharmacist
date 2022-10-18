import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

import Home from "./pages/home/Home";
import Popup from "./components/popup/Popup";
import { medicines } from "./api";

const drug = {
	id: 0,
	otcDrug: "",
	categories: "",
	class: "",
	activeSubstance: [],
	timeLimit: false,
	maxPeriod: "",
	interactionExists: false,
	indications: [],
	contraindications: [],
	pharmacodynamics: "",
	description: "",
	interactions: [],
	sideEffects: [],
	about: [],
};
const [inputValue, setInputValue] = useState<string>("");
const [filteredDrugs, setFilteredDrugs] = useState<any[]>([]);
// test("renders the home page", () => {
// 	render(
// 		<Home
// 			recommendedDrugs={drug}
// 			inputValue={inputValue}
// 			setInputValue={setInputValue}
// 			handleSelectedClass={"jzkhdgjz"}
// 			filteredDrugs={filteredDrugs}
// 		/>
// 	);
// 	const linkElement = screen.getByText(/Elahes recommendations/i);
// 	expect(linkElement).toBeInTheDocument();
// });

// it("expect to open the popup when button is clicked", () => {
// 	() => {
// 		() => {
// 			const [showAlert, setShowAlert] = useState(false);
// 			const addButton = screen.getByText("See interactions");
// 			fireEvent.click(addButton);
// 			render(
// 				<Popup setShowAlert={setShowAlert} drug={drug} />
// 			);
// 			const title = screen.getByText(
// 				/Some of the most common drugs it interacts with/i
// 			);
// 			expect(title).toBeInTheDocument();
// 		};
// 	};
// });
