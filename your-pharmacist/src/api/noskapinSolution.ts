export const noskapinSolution = {
	id: 10,
	otcDrug: true,
	categories: "Cough",
	class: "2",
	activeSubstance: "Noskapin ",
	timeLimit: true,
	maxPeriod: "14 days",
	interactionExists: true,
	name: "Nipaxon",
	dosage: "2,5mg/ml,",
	quantity: "100 ml",
	drugGroup: "opium derivatives",
	imageUrl: "https://media.apotea.se/product-images/L/7347-1.jpg",
	dosing: {
		adults: "20 ml 3 times daily",
		children:
			"Children 2-4 years: 2,5 ml 3-4 times daily, 4-10 years: 5 ml 3-4 times daily, 10-14 years: 10 ml 3 times daily,, 14 years and adults: 20 ml  3 times daily. Nipaxon  should not be given to children under 2 years of age.",
	},
	maxDose: "",
	withMeal: false,
	betweenMeals: true,
	infants: false,
	adults: true,
	minAge: "2",
	pregnancy: "No known risks when used during pregnancy.",
	breastfeeding:
		"Noscapine passes into breast milk, but risk of impact on the baby seems unlikely with therapeutic doses.",
	indications: ["Dry cough"],
	contraindications: [
		"Hypersensitivity to the active substance or to any excipient",
	],
	pharmacodynamics:
		"Nipaxon suppresses the cough reflex by affecting the cough center in the brain without affecting the brain's function in general. Noscapine has no habit-forming properties.",
	description:
		"Nipaxon is used for occasional short-term whooping cough.Nipaxon suppresses the cough reflex by affecting the cough center in the brain without affecting the brain's function in general.",

	interactions: [
		{
			name: "Waran",
			activeSubstance: "Warfarin",
			drugGroup: ["Anticoagulant"],
			prescriptionDrug: true,
			indications: ["Blood thinning medicine"],
			interactionType: "D",
			consequence:
				"The effect of warfarin may increase, leading to an increased risk of bleeding.",
			suggestions: "The combination should be avoided",
		},
	],
	sideEffects: ["Abdominal pain", "headache", "somnolence"],
};
