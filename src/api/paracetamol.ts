export const paracetamol = {
	id: 1,
	otcDrug: true,
	categories: "Analgesic & Antipyretic",
	class: "1",
	activeSubstance: [{ name: "Paracetamol" }],
	timeLimit: false,
	maxPeriod: "",
	interactionExists: true,

	name: "Alvedon",
	dosage: "500 mg",
	quantity: "20 tablets",
	drugGroup: "",
	imageUrl:
		"https://media.apotea.se/product-images/L/alvedon-filmdragerad-tablett-500-mg-20-st-0.jpg",
	dosing: {
		adults: "1-2 tabletter var 4–6 timme, högst 4 gånger per dygn.",
		children: "",
	},
	maxDose: "4 g (4000 mg)",
	withMeal: false,
	betweenMeals: false,
	infants: false,
	adults: true,
	minAge: "12",
	pregnancy:
		"Studies have shown that Paracetamol is ok to take during pregnancy",
	breastfeeding:
		"Paracetamol passes into breast milk, but the risk of impact on the baby seems unlikely with therapeutic doses",

	indications: ["pain", "fever"],

	contraindications: [
		"Hypersensitivity to the active substance or to any excipient",
		"Severe liver failure",
	],
	pharmacodynamics:
		"Paracetamol is an anilide derivative with similar analgesic and antipyretic properties as acetylsalicylic acid. Unlike acetylsalicylic acid, it does not cause gastrointestinal irritation and is well tolerated even by patients with ulcers. Paracetamol also does not affect platelet aggregation or bleeding time. Paracetamol is generally well tolerated by patients with hypersensitivity to aspirin. Paracetamol does not inhibit the enzyme prostaglandin synthetase (which NSAIDs do). However, it is possible that the analgesic effect can be partly explained by a different effect on the synthesis of prostaglandins and leukotrienes. The antipyretic effect is due to the effect on heat-regulating centers in the CNS, whereby the heat output increases.",
	description:
		"Alvedon can be used for mild pain (e.g. headache) and as a fever reducer for e.g. a cold. Not recommended for children under 3 years. The effect of pain relief with Alvedon normally lasts for 4-5 hours.Alvedon contains the active substance paracetamol. Paracetamol can be used by people with a sensitive stomach or an increased tendency to bleed.",

	interactions: [
		{
			name: "Waran",
			activeSubstance: "Warfarin",
			drugGroup: ["Anticoagulant"],
			prescriptionDrug: true,
			indications: [""],
			interactionType: "C",
			consequence:
				"Effect of warfarin can be enhanced when treated with paracetamol. The effect seems to increase with the dose of paracetamol, but can already occur at doses of 1.5–2.0 g of paracetamol per day for at least 5–7 days. Single doses of paracetamol in normal dosage are considered to have no effect.",
			suggestions:
				"Do not take higher doses than 1,5 g/day more than one week if you take waran at the same time",
		},
	],

	sideEffects: [""],
};
