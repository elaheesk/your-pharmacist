export const fenoximetylpenicillin = {
	id: 23,
	otcDrug: false,
	categories: "Antibiotics",
	class: "",
	activeSubstance: "fenoximetylpenicillin",

	timeLimit: true,
	maxPeriod: "10 days",
	interactionExists: true,
	name: "Kåvepenin",
	dosage: "1g,",
	quantity: "30 Tablets",
	drugGroup: "Beta-lactamase sensitive penicillins",
	imageUrl:
		"https://media.apotea.se/product-images/L/dimor-filmdragerad-tablett-2-mg-16-st-1.jpg",
	dosing: {
		adults:
			"Treatment begins with 4 mg. Then 2 mg after each bowel movement with diarrhoea. However, wait 2-3 hours between the first and second dose. The daily dose should not exceed 16 mg (8 tablets).",
		children: "",
	},
	maxDose: "6g",
	withMeal: false,
	betweenMeals: true,
	infants: false,
	adults: true,
	minAge: "12",
	pregnancy:
		"Women who are pregnant or breastfeeding should be advised to consult a doctor for appropriate treatment.",
	breastfeeding:
		"Loperamide can pass into breast milk in small amounts. Therefore, Dimor is not recommended during breastfeeding.",
	indications: [
		"Strep throat",
		"acute sinusitis",
		"ear infection",
		"community-acquired pneumonia",
		"uncomplicated skin and soft tissue infections",
		"cutaneous Lyme infection",
		"dental abscess",
		"",
	],
	contraindications: [
		"Hypersensitivity to loperamide hydrochloride or to any excipient",
		"Under 12 years of age.",
		"Acute dysentery characterized by blood in the stool and high fever",
		"Acute ulcerative colitis",
		"Patients with bacterial enterocolitis caused by invasive organisms",
		"Patients with pseudomembranous colitis as a result of treatment with broad-spectrum antibiotics",
	],
	pharmacodynamics:
		"Loperamide is a synthetic opioid that in therapeutic doses has little effect on the central nervous system. Loperamide reduces peristalsis and gastrointestinal secretion and increases anal sphincter tone.The effect usually comes within four hours",

	description:
		"Dimor normalizes bowel movements, counteracts fluid loss and increases the ability to hold stool.Dimor is used for temporary (acute) diarrhoea. Dimor can also be prescribed by a doctor for other uses.",
	interactions: [
		{
			name: "Grapefruit juice",
			activeSubstance: "",
			drugGroup: [""],
			prescriptionDrug: false,
			indications: [""],
			interactionType: "D",
			consequence:
				"The concentration of loperamide is expected to increase significantly",
			suggestions:
				"Grapefruit juice should be avoided in patients treated with loperamide.",
		},
		{
			name: "Itraconazole",
			activeSubstance: "Itraconazole",
			drugGroup: ["Antimykotikum "],
			prescriptionDrug: true,
			indications: ["fungal infections"],
			interactionType: "C",
			consequence: "The plasma concentration of loperamide increases.",
			suggestions:
				"Be aware of possible loperamide side effects, such as drowsiness, nausea and vomiting. When treating skin or nail fungus, terbinafine can be an alternative to avoid the interaction.",
		},
		{
			name: "Clopidogrel",
			activeSubstance: "Clopidogrel",
			drugGroup: ["Platelet aggregation inhibitory "],
			prescriptionDrug: true,
			indications: ["Blood thinning medication"],
			interactionType: "C",
			consequence:
				"Loperamide exposure may increase. Side effects may occur in some patients treated with loperamide, especially if the patient uses a high dose of loperamide.",
			suggestions:
				"Monitoring for loperamide-induced opioid-like side effects is recommended (eg, fatigue, nausea, and vomiting).",
		},
	],
	sideEffects: ["Constipation", "nausea", "flatulence", "headache"],
};
