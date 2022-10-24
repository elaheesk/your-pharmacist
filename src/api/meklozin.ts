export const meklozin = {
	id: 20,
	otcDrug: true,
	categories: "Motion sickness",
	class: "3",
	activeSubstance: [{ name: "Meklozin" }],
	timeLimit: true,
	maxPeriod: "",
	interactionExists: true,
	name: "Postafen",
	dosage: "25mg,",
	quantity: "10 Tablets",
	drugGroup: "Antihistamine with antiemetic effect",
	imageUrl:
		"https://media.apotea.se/product-images/L/postafen-25-mg-tablett-10-st-3.jpg",
	dosing: {
		adults:
			"1 tablet, if necessary, the dose can be repeated after 12 hours, Postafen should be used with caution in elderly people. As elderly patients are most sensitive to the anticholinergic effects of meclozine, it is recommended that elderly patients start treatment with Postafen at the lowest recommended dose",
		children:
			"0,5 tablet, if necessary, the dose can be repeated after 12 hours",
	},
	maxDose: "50 mg",
	withMeal: true,
	betweenMeals: false,
	infants: false,
	adults: true,
	minAge: "6",
	pregnancy:
		"Postafen can be used during pregnancy if there is a clinical need, and the dose should not exceed 50 mg/day",
	breastfeeding:
		"Postafen probably passes into breast milk. Postafen should therefore not be used during breastfeeding.",
	indications: [
		"Lightheadedness",
		"dizziness",
		"motion Sickness",
		"morning Sickness",
	],
	contraindications: [
		"Hypersensitivity to the active substance, substituted benzimidazoles",
		"Patients with impaired liver function",
	],
	pharmacodynamics:
		"Meclozine is a piperazine derivative intended for the treatment of motion sickness and nausea of ​​various origins. Meclozine has a depressant effect on vestibular functions with antiemetic effect and long duration (up to 12 hours)",
	description:
		"Postafen is used for all types of motion sickness (car, bus, plane and seasickness).Meclozine, which is the active substance in Postafen, is an antihistamine that dampens the functions of the inner ear that have to do with balance and thus provides an effect against nausea and vomiting. The duration of action is about 12 hours.",
	interactions: [
		{
			name: "Alcohol",
			activeSubstance: "",
			drugGroup: [""],
			prescriptionDrug: false,
			indications: [""],
			interactionType: "C",
			consequence:
				"Alcohol or other CNS depressants, as concomitant use may potentiate the depressant effect of these agents or of meclozine,",
			suggestions: "Combination should be avoided",
		},
	],
	sideEffects: ["Drowsiness", "sedation"],
};
