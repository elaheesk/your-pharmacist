export const strepsils = {
	id: 12,
	otcDrug: true,
	categories: "Sore throat",
	class: "2",
	activeSubstance: [
		{ name: "2,4-diklorobensylalkohol" },
		{ name: "Amylmetakresol" },
	],

	timeLimit: false,
	maxPeriod: "14 days",
	interactionExists: false,
	name: "Strepsils",
	dosage: "1,2 mg/0,6 mg",
	quantity: "36 lozenges",
	drugGroup: "Antiseptic",
	imageUrl:
		"https://media.apotea.se/product-images/L/strepsils-honung-och-citron-sugtablett-36-st-1.jpg",
	dosing: {
		adults:
			"1 lozenge as needed every two to three hours.The maximum recommended daily dose is 12 lozenges.",
		children:
			"1 lozenge as needed every two to three hours.Maximum 12 lozenges per day.  The product is not recommended for children under 6 years of age.",
	},
	maxDose: "13mg/6mg",
	withMeal: false,
	betweenMeals: false,
	infants: false,
	adults: true,
	minAge: "6",
	pregnancy:
		"The safety of Strepsils lozenges during pregnancy has not been fully established, but is not expected to pose a danger",
	breastfeeding:
		"It is not known whether Strepsils is excreted in breast milk. A risk to the newborn child/infant cannot be excluded. Care must therefore be taken when breastfeeding.",
	indications: ["Mild infections in the oral cavity and throat (sore throat)."],
	contraindications: [
		"Hypersensitivity to the active substance, substituted benzimidazoles",
	],
	pharmacodynamics: "Strepsils has an antibacterial and antiviral effect.",
	description:
		"Strepsils is a throat tablet that is used for mild infections in the oral cavity and throat, for example for sore throats. Strepsils has an antibacterial and antiviral effect.",
	interactions: [
		{
			name: "Interaction studies have not been carried out.",
			activeSubstance: "",
			drugGroup: [""],
			prescriptionDrug: true,
			indications: [""],
			interactionType: "",
			consequence: "",
			suggestions: "",
		},
	],
	sideEffects: [""],
};
