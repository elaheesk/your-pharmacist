export const xylometazolin = {
	id: 4,
	otcDrug: true,
	categories: "Nasal congestion & rhinitis",
	class: "2",
	activeSubstance: [{ name: "Xylometazolin " }],
	timeLimit: true,
	maxPeriod: "10 days",
	interactionExists: false,
	indications: [
		"Rhinitis. As a decongestant for coryza",
		"facilitate rhinoscopy (examination of the nose).",
	],
	contraindications: [
		"Hypersensitivity to the active substance or to any excipient",
		"Glaucoma with narrow chamber angle. After transsphenoidal hypophysectomy or surgery where the dura mater has been exposed. Patients with rhinitis sicca or atrophic rhinitis.",
	],
	pharmacodynamics:
		" Otrivin (xylometazoline) is a sympathomimetic that acts on α-adrenergic receptors. Xylometazoline has a vasoconstrictor effect and thus acts as a decongestant and facilitates the drainage of secretions. The effect of Otrivin starts within minutes and lasts for 10 hours (eg all night).",
	description:
		"Otrivin nasal spray has a decongestant effect against nasal congestion and acute sinusitis. It relieves nasal congestion within minutes and the effect lasts up to 10 hours.Should not be used for more than 10 consecutive days. For adults and children from 12 years.",
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
	],
	about: [
		{
			name: "Otrivin",
			dosage: "1 mg/ml",
			quantity: "10 ml",
			drugGroup: "Sympathomimetic",
			imageUrl:
				"https://media.apotea.se/product-images/L/otrivin-nasspray-1-mg-per-ml-10-ml-3.jpg",
			dosing: {
				adults:
					"Adults and children over 12 years: 1 spray shower in each nostril if necessary 2-3 times daily for a maximum of 10 days. (If used for a long time, Otrivin may cause nasal congestion or again trigger a runny nose.)",
				children: "",
			},
			maxDose: "1mg/ml",
			withMeal: false,
			betweenMeals: false,
			infants: false,
			adults: true,
			minAge: "12",
			pregnancy:
				"Otrivin should not be used by pregnant women unless prescribed by a doctor.",
			breastfeeding:
				"Otrivin should not be used by breastfeeding women unless prescribed by a doctor.",
		},
	],
};
