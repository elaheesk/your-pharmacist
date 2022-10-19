export const makrogol = {
	id: 9,
	otcDrug: true,
	categories: "Constipation",
	class: "3",
	activeSubstance: [{ name: "Makrogol" }],
	timeLimit: false,
	maxPeriod: "14 days",
	interactionExists: true,

	name: "Movicol",
	dosage: "3350",
	quantity: "50 sachets",
	drugGroup: "Osmotically active agents",
	imageUrl:
		"https://media.apotea.se/product-images/L/movicol-pulver-oral-losning-dospasar-50-st-1.jpg",
	dosing: {
		adults:
			"1–3 sachets daily in divided doses according to individual response. With long-term use, the dose can be adjusted down to 1 to 2 sachets daily.A dose consisting of 8 sachets daily is necessary for the treatment of severe constipation (faecaloma). The 8 sachets must be taken within 6 hours of each other up to 3 days in a row if necessary. If you have a heart problem, do not take more than 2 sachets per hour.",
		children:
			"Not recommended. Alternative lower strength macrogol products are available for children.",
	},
	maxDose: "10000  g",
	withMeal: false,
	betweenMeals: false,
	infants: false,
	adults: true,
	minAge: "12",
	pregnancy:
		"There is a limited amount of data from the use of macrogol in pregnant women. No clinical effects are expected during pregnancy as systemic exposure to macrogol 3350 is negligible.",
	breastfeeding:
		"No effects are expected on breast-fed neonates/infants as the systemic exposure of macrogol 3350 in the breast-feeding woman is negligible",

	indications: ["chronic constipation"],
	contraindications: [
		"Hypersensitivity to loperamide hydrochloride or to any excipient",
		"Intestinal perforation or obstruction caused by structural or functional disorder of the intestinal wall",
		"Crohn's disease, ulcerative colitis",
	],
	pharmacodynamics:
		" Macrogol has an osmotic effect in the intestine which causes a laxative effect. It increases stool volume, which activates bowel movements via neuromuscular functions.",

	description:
		"Movicol helps you to have a pleasant bowel function even if you have been constipated for a long time. Movicol also works in very severe constipation, so-called faecalomas.",
	interactions: [
		{
			name: "Macrogol increases the solubility of drugs that are soluble in alcohol and relatively insoluble in water.There is a possibility that the absorption of other drugs may be temporarily reduced when using macrogol 3350.",
			activeSubstance: "",
			drugGroup: [""],
			prescriptionDrug: false,
			indications: [""],
			interactionType: "",
			consequence: "",
			suggestions: "",
		},
	],
	sideEffects: [
		"Abdominal pain",
		"diarrhea",
		"vomiting",
		"nausea",
		"dyspepsia",
		"distended abdomen",
		"borborygmia",
		"flatulence and anal discomfort",
		"nausea",
		"flatulence",
		"Headache",
	],
};
