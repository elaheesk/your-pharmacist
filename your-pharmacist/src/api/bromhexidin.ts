export const bromhexidin = {
	id: 11,
	otcDrug: true,
	categories: "Cough",
	class: "2",
	activeSubstance: "Bromhexidin ",
	timeLimit: true,
	maxPeriod: "14 days",
	interactionExists: true,
	name: "Bisolvon",
	dosage: "1,6mg/ml",
	quantity: "125 ml oral solution",
	drugGroup: "Mucolytics",
	imageUrl:
		"https://media.apotea.se/product-images/L/bisolvon-oral-losning-1-6-mg-ml-250-ml-2.jpg",
	dosing: {
		adults:
			"Usual dose for adults and children over 12 years of age:5 ml 3 times daily.",
		children:
			"Usual dose for children 6-12 years:2.5 ml 3 times daily.For children under 6 years of age, Bisolvon oral solution 0.8 mg/ml is recommended",
	},
	maxDose: "15 ml",
	withMeal: false,
	betweenMeals: false,
	infants: false,
	adults: true,
	minAge: "6",
	pregnancy:
		"Bromhexine crosses the placental barrier. Clinical experience has so far provided no evidence of harmful effects on the fetus during pregnancy. However, normal caution should be observed when using medicines during pregnancy. Especially during the first trimester, you should avoid using Bisolvon.",
	breastfeeding:
		"Bromhexine is excreted in breast milk. Bisolvon is not recommended during breast-feeding, although no undesirable effects in breast-fed children can be expected",
	indications: ["Phlegm cough"],
	contraindications: [
		"Hypersensitivity to the active substance or to any excipient",
	],
	pharmacodynamics:
		"Bisolvon is considered to dissolve tough mucus so that it becomes thinner and thus easier to cough up.",
	description:
		"Bisolvon is used for occasional short-term coughs with tenacious mucus. ",

	interactions: [
		{
			name: "No clinically relevant adverse interactions with other drugs have been reported",
			activeSubstance: "",
			drugGroup: [""],
			prescriptionDrug: false,
			indications: [""],
			interactionType: "",
			consequence: "T",
		},
	],
	sideEffects: [""],
};
