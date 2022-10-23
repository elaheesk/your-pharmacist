import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

import Home from "./pages/home/Home";
import Popup from "./components/popup/Popup";
import { medicines } from "./api";
import { DrugType } from "./type";
import ColdFlu from "./pages/ColdFlu";
import PainFever from "./pages/PainFever";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: () => mockedUsedNavigate,
}));

const drug = {
	id: 0,
	otcDrug: "",
	categories: "",
	class: "",
	name: "",
	dosage: "",
	quantity: "",
	activeSubstance: [],
	timeLimit: false,
	maxPeriod: "",
	drugGroup: "",
	interactionExists: false,
	indications: [],
	contraindications: [],
	pharmacodynamics: "",
	description: "",
	interactions: [],
	sideEffects: [],

	adults: false,
	minAge: "",
	pregnancy: "",
	breastfeeding: "",
	imageUrl: "",
	dosing: {
		adults: "",
		children: "",
	},
	maxDose: "",
	withMeal: false,
	betweenMeals: false,
	infants: false,
};

test("renders the home page", () => {
	() => {
		const [filteredDrugs, setFilteredDrugs] = useState<DrugType[]>([]);
		render(<Home recommendedDrugs={drug} />);
		const linkElement = screen.getByText(/Elahes recommendations/i);
		expect(linkElement).toBeInTheDocument();
	};
});

it("expect to open the popup when button is clicked", () => {
	() => {
		() => {
			const [showAlert, setShowAlert] = useState(false);
			const addButton = screen.getByText("See interactions");
			fireEvent.click(addButton);
			render(<Popup setShowAlert={setShowAlert} drug={drug} />);
			const title = screen.getByText(
				/Some of the most common drugs it interacts with/i
			);
			expect(title).toBeInTheDocument();
		};
	};
});

// test("Should navigate to COld&Flu page when button is clicked", () => {
// 	() => {
// 		const navigateBtn = screen.getByText("cold & flu");
// 		fireEvent.click(navigateBtn);
// 		mockedUsedNavigate("/coldflnnnu");
// 		render(<ColdFlu recommendedDrugs={drug} />);
// 		const subtitle = screen.getByText(/Paracetamol/i);
// 		expect(subtitle).toBeInTheDocument();
// 	};
// });
