export const oxymetazoline = {
	id: 18,
	otcDrug: true,
	categories: "Nasal congestion & rhinitis",
	class: "2",
	activeSubstance: "Oxymetazoline",
	timeLimit: true,
	maxPeriod: "10 days",
	interactionExists: false,
	name: "Nezeril",
	dosage: "0,5mg/ml,",
	quantity: "10 ml",
	drugGroup: "Sympathomimetic",
	imageUrl:
		"https://media.apotea.se/product-images/L/nezeril-nasspray-0-5-mg-per-ml-7-5-ml-3.jpg",
	dosing: {
		adults:
			"Adults and children over 12 years: 2 spray shower in each nostril if necessary 2-3 times daily for a maximum of 10 days. (If used for a long time, Otrivin may cause nasal congestion or again trigger a runny nose.)",
		children: "Children under 10 years should use Nezeril 0,25mg/ml instead.",
	},
	maxDose: "3mg/ml",
	withMeal: false,
	betweenMeals: false,
	infants: false,
	adults: true,
	minAge: "12",
	pregnancy:
		"Nezeril should not be used by pregnant women unless prescribed by a doctor.",
	breastfeeding:
		"Nezeril should not be used by breastfeeding women unless prescribed by a doctor.",
	indications: [
		"Rhinitis. As a decongestant for coryza",
		"facilitate rhinoscopy (examination of the nose).",
	],
	contraindications: [
		"Hypersensitivity to the active substance or to any excipient",
		"Phaeochromocytoma (a rare tumour of the adrenal glands)",
		"Have had an operation to remove your pituitary gland or you have recently had an operation on your nose or sinuses",
		"have inflamed skin or mucous membranes of your nostrils or have scabs in your nose",
	],
	pharmacodynamics:
		" Oxymetazoline relieves a stuffy, blocked nose by shrinking the blood vessels helping to open the nasal passages. It acts within a few minutes and lasts for up to 12 hours.",
	description:
		"This nasal spray contains Oxymetazoline Hydrochloride which is a decongestant. It acts within a few minutes and lasts for up to 12 hours.The medicine is a solution which is sprayed into the nostrils to relieve the congestion in the nose and sinuses which you get in conditions such as colds, catarrh and hayfever.",
	interactions: [
		{
			name: "Aurorix",
			activeSubstance: "Moklobemid",
			drugGroup: ["Antidepressants, MAO inhibitors"],
			prescriptionDrug: true,
			indications: [
				"Major depression with or without melancholy.",
				"Bipolar syndrome with major depression.",
				"Social Phobia.",
			],
			interactionType: "C",
			consequence: "Risk of increased blood pressure and increased heart rate.",
			suggestions: "Monitor heart rate and blood pressure.",
		},
	],
	sideEffects: [
		"Nausea",
		"burning or local irritation in the nose, dry nasal mucosa",
		"Headache",
		"Contains benzalkonium chloride which may cause irritation or swelling inside the nose, especially if used for a long time",
	],
};
