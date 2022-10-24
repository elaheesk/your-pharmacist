export const dimenhydrinat = {
	id: 21,
	otcDrug: true,
	categories: "Motion sickness",
	class: "3",
	activeSubstance: [{ name: "Dimenhydrinat" }],
	timeLimit: false,
	maxPeriod: "",
	interactionExists: true,
	name: "Calma",
	dosage: "20mg,",
	quantity: "10 Chewable Tablets",
	drugGroup: "Ethanolamines",
	imageUrl: "https://media.apotea.se/product-images/XL/6552-1.jpg",
	dosing: {
		adults:
			"A piece of gum is well chewed for at least 10 minutes. If nausea nevertheless occurs, another piece of gum can be chewed after 30 minutes. This can be repeated one more time. A piece of chewing gum should preferably be taken 15-30 minutes before the journey begins.Maximum daily dose is 4 chewing gums. The chewing gum is not intended to be swallowed. ",
		children: "",
	},
	maxDose: "80mg",
	withMeal: false,
	betweenMeals: false,
	infants: false,
	adults: true,
	minAge: "12",
	pregnancy:
		"During pregnancy, Calma should only be used after special consideration. During the last weeks of pregnancy, Calma should not be used as there is a risk that dimenhydrinate can cause contractions",
	breastfeeding:
		" Dimenhydrinate passes into breast milk but risk of impact on the baby seems unlikely with therapeutic doses",
	indications: [
		"Prophylactic treatment of nausea and vomiting in case of motion sickness",
	],
	contraindications: [
		"Hypersensitivity to the active substance, substituted benzimidazoles",
		"Phenylketonuria",
		"Acute asthma attacks",
		"Porphyria",
		"Narrow angle glaucoma",
		"Severe cases of prostatic hypertrophy or bladder neck obstruction with residual urine, where complete urinary retention is feared to occur",
	],
	pharmacodynamics:
		"Dimenhydrinate is a histamine antagonist that belongs to the group of ethanolamines. Dimenhydrinate acts through competitive antagonism at the H1 receptors of the effector cells.The effect lasts for 3-6 hours.",
	description:
		"Calma is a medicated chewing gum. The active ingredient in Calma is an antihistamine that prevents and relieves nausea and vomiting in motion sickness (e.g. car, bus, plane and sea sickness).",
	interactions: [
		{
			name: " Metoprolol",
			activeSubstance: "Metoprolol",
			drugGroup: ["Beta blocker"],
			prescriptionDrug: true,
			indications: [
				"Hypertension",
				"angina pectoris",
				"cardiac arrhythmias",
				"heart failure",
			],
			interactionType: "C",
			consequence:
				"Diphenhydramine increases the plasma concentration of metoprolol up to 2-fold, which can lead to hypotension and bradycardia. The interaction may be more pronounced in women",
			suggestions:
				"In case of simultaneous treatment with diphenhydramine/dimenhydrinate, the effect of metoprolol should be checked and the dose reduced if necessary",
		},
		{
			name: "Linezolid",
			activeSubstance: "Linezolid",
			drugGroup: ["Antibiotics"],
			prescriptionDrug: true,
			indications: [
				"Hypertension",
				"angina pectoris",
				"cardiac arrhythmias",
				"heart failure",
			],
			interactionType: "C",
			consequence:
				"There may be an increased risk of delirium (confusion, cognitive impairment) when diphenhydramine is combined with linezolid.",
			suggestions:
				"The combination should, if possible, be avoided. Single doses of diphenhydramine/dimenhydrinate are less likely to cause a significant interaction.",
		},
	],
	sideEffects: ["Fatigue"],
};
