export const omeprazol = {
	id: 5,
	otcDrug: true,
	categories: "Heartburn and acid reflux",
	class: "3",
	activeSubstance: [{ name: "Omeprazol" }],
	timeLimit: true,
	maxPeriod: "14 days",
	interactionExists: true,
	name: "Omeprazol",
	dosage: "20mg,",
	quantity: "28 Enteric capsules",
	drugGroup: "Proton pump inhibitors",
	imageUrl:
		"https://media.apotea.se/product-images/L/omeprazol-sandoz-enterokapsel-h%c3%a5rd-20-mg-28-st-0.jpg",
	dosing: {
		adults:
			"1 capsule once daily for 14 days. Contact a doctor if you are not symptom-free after this period.It may be necessary to take the capsules for 2-3 days in a row to achieve symptom relief. To get the best effect, you should take the PPI about 30 minutes before the first meal of the day, regardless of what time of day the discomfort is at its greatest.",
		children: "",
	},
	maxDose: "40 mg",
	withMeal: false,
	betweenMeals: true,
	infants: false,
	adults: true,
	minAge: "12",
	pregnancy: "Omeprazole can be used during pregnancy",
	breastfeeding:
		"Omeprazole passes into breast milk, but the baby is unlikely to be affected at therapeutic doses.",
	indications: [
		"Duodenal ulcer",
		"Gastric ulcer",
		"reflux esophagitis",
		"Prevention of recurrent duodenal ulcers and stomach ulcers",
		"Gastric ulcer caused by Helicobacter pylori (H. pylori) in combination with appropriate antibiotic therapy in the treatment of peptic ulcers",
		"Treatment of NSAID-related gastric and duodenal ulcers",
		"Prevention of NSAID-related gastric and duodenal ulcers in patients at risk",
		"Treatment of reflux esophagitis",
	],
	contraindications: [
		"Hypersensitivity to the active substance, substituted benzimidazoles",
		"Like other proton pump inhibitors, omeprazole should not be used together with nelfinavir",
	],
	pharmacodynamics:
		"Inhibits acid secretion in the ventricle and specifically inhibits the acid pump in the parietal cell. It provides a rapid onset effect and the effect on acid secretion is reversible with daily administration",
	description:
		"Omeprazole is a medicine used for the short-term treatment of reflux symptoms, such as temporary heartburn and acid reflux.The capsules contain the medicinal substance omeprazole. It belongs to a group of medicines called 'proton pump inhibitors'. These work by reducing the amount of acid produced in the stomach.",
	interactions: [
		{
			name: "Metotrexat",
			activeSubstance: "Metotrexat",
			drugGroup: ["immunosuppressive agents"],
			prescriptionDrug: true,
			indications: ["Antirheumatic", "Antipsoriatic", "Cytostatic drugs"],
			interactionType: "D",
			consequence:
				"Exposure to methotrexate may increase significantly. The interaction only applies to high-dose methotrexate used in cancer treatment. The interaction is unlikely to apply to low-dose methotrexate used in autoimmune diseases",
			suggestions:
				"Consider treatment with famotidine instead of proton pump inhibitors. The plasma concentration of methotrexate should be monitored during concomitant treatment with proton pump inhibitors",
		},
	],
	sideEffects: [
		"Abdominal pain",
		"constipation",
		"diarrhoea",
		"flatulence",
		"nausea/vomiting",
		"fundic gland polyps (benign)",
		"headache",
	],
};
