export const etylmorfin = {
	id: 23,
	otcDrug: false,
	categories: "Cough",
	class: "2",
	activeSubstance: "Etylmorfin",
	timeLimit: true,
	maxPeriod: "Not for long-term treatment",
	interactionExists: true,
	name: "Cocillana-Etyfin",
	dosage: "2,5mg/ml,",
	quantity: "250ml",
	drugGroup: "Opium derivatives",
	imageUrl:
		"http://4.bp.blogspot.com/-Y9P7j5PHkEc/TsFlTzTlT0I/AAAAAAAAJTI/EU24KYlfdHM/w1200-h630-p-k-no-nu/cocci.jpg",
	dosing: {
		adults: "5-10 ml 3-4 times daily.",
		children:
			"11-12 years (30-40 kg): 3.5 ml 3 times daily. Children 6-10 years (20-30 kg): 2.5 ml 3 times daily. Children 3-5 years (15-20 kg): 2 ml 3 times daily. Children 2 years (13-15 kg): 1 ml 3 times daily",
	},
	maxDose: "40ml",
	withMeal: false,
	betweenMeals: false,
	infants: false,
	adults: true,
	minAge: "2",
	pregnancy: "No known risks when used during pregnancy.",
	breastfeeding:
		"Ethylmorphine passes into breast milk. It is unknown if the other ingredients do this. Cocillana-Etyfin should not be used by breastfeeding women",
	indications: ["Dry cough"],
	contraindications: [
		"Hypersensitivity to loperamide hydrochloride or to any excipient",
		"Respiratory depression",
		"In patients who are known ultra-rapid metabolisers of CYP2D6, due to increased risk for side-effects",
		"Concomitant use of Bupropion and MAO-inhibitors",
		"epilepsy or previous (even occasional) seizures in the anamnesis",
		"known tumor of the central nervous system ",
		"severe liver cirrhosis",
		"patients in whom sudden discontinuation of ongoing drug treatment (especially benzodiazepines or benzodiazepine-related drugs) or of alcohol abuse may increase the risk of convulsions ",
		"patients who have or have previously been diagnosed with bulimia or anorexia nervosa",
	],
	pharmacodynamics:
		"Ethylmorphine is converted to morphine in the liver by an enzyme. It is morphine that provides the cough suppressant effect. Some people change codeine to morphine more quickly than others. These individuals are called 'ultra-rapid metabolizers of codeine' ",

	description:
		"Ethylmorphine is used for whooping cough and should be taken with caution. It should be used for as short a time as possible. The recommended dose should not be exceeded.Overdose increases the risk of fatigue, impaired breathing (respiratory depression) and unconsciousness, which can be life-threatening. You need a prescription for this medicine",
	interactions: [
		{
			name: "Fluoxetin",
			activeSubstance: "Fluoxetin",
			drugGroup: ["SSRI"],
			prescriptionDrug: true,
			indications: ["Depression"],
			interactionType: "D",
			consequence:
				"Strong inhibitors of CYP2D6 may reduce the effect of ethylmorphine",
			suggestions: "Combination should be avoided",
		},
		{
			name: "Paroxetin",
			activeSubstance: "Paroxetin",
			drugGroup: ["SSRI"],
			prescriptionDrug: true,
			indications: ["Depression"],
			interactionType: "D",
			consequence:
				"Strong inhibitors of CYP2D6 may reduce the effect of ethylmorphine",
			suggestions: "Combination should be avoided",
		},
		{
			name: "Bupropion",
			activeSubstance: "Bupropion",
			drugGroup: ["Psychoanaleptics"],
			prescriptionDrug: true,
			indications: ["Depression"],
			interactionType: "D",
			consequence: "Bupropion likely reduces the effect of ethylmorphine.",
			suggestions:
				"Combination should be avoided. There should be an interval of at least 14 days between discontinuation of an irreversible MAOI and starting treatment with Bupropion",
		},
	],
	sideEffects: ["Constipation", "nausea", "vomiting"],
};
