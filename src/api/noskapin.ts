export const noskapin = {
	id: 7,
	otcDrug: true,
	categories: "Cough",
	class: "2",
	activeSubstance: [{ name: "Noskapin " }],
	timeLimit: true,
	maxPeriod: "14 days",
	interactionExists: true,
	name: "Nipaxon",
	dosage: "50mg,",
	quantity: "30 Tablets",
	drugGroup: "opium derivatives",
	imageUrl:
		"https://media.apotea.se/product-images/XL/nipaxon-tablett-50-mg-30-st-1-0.jpg",
	dosing: {
		adults: "1 tablet 3 times daily.",
		children: "Children 10-14: 1/2 tablet 3 times daily.",
	},
	maxDose: "150 mg",
	withMeal: false,
	betweenMeals: true,
	infants: false,
	adults: true,
	minAge: "10",
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
