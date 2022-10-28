export const zolmitriptan = {
	id: 22,
	otcDrug: true,
	categories: "Migraine",
	class: "1",
	activeSubstance: "Zolmitriptan",
	timeLimit: true,
	maxPeriod:
		"Do not take this medicine or should seek the advice of their pharmacist or doctor first. ",
	interactionExists: true,
	name: "Zolmitriptan",
	dosage: "2,5mg/dose,",
	quantity: "2 ml",
	drugGroup: "‘Triptans",
	imageUrl: "https://media.apotea.se/product-images/L/5296-1.jpg",
	dosing: {
		adults:
			" 1 spray in one nostril. It does not matter which nostril is used. Take it as soon as possible after the first signs of a migraine. If your symptoms go away and come back, you can take another dose after 2 hours. Don’t take more than 2 doses in 24 hours. Not recommended for people over 65 years of age.",
		children: "",
	},
	maxDose: "10mg/ml",
	withMeal: false,
	betweenMeals: false,
	infants: false,
	adults: true,
	minAge: "12",
	pregnancy:
		"Clinical data do not show any effects on the fetus. Zolmitriptan should only be considered when the expected benefit to the mother is greater than the possible risk to the fetus. Experience with treatment with sumatriptan during the second and third trimester is limited.    ",
	breastfeeding:
		"It has been shown that zolmitriptan is excreted in breast milk after subcutaneous administration. Effects on infants can be minimized by avoiding breastfeeding for 24 hours after treatment.",
	indications: [
		"Migraine attacks that happen with or without warning signs (‘aura’)",
		"Migraine attacks in people who have previously been diagnosed with migraine",
		"Pre- and post-operatively and to facilitate defecation in case of haemorrhoids, anal fissures",
	],
	contraindications: [
		"Hypersensitivity to the active substance.",
		"High blood pressure",
		"Other 5HT1 agonists (‘triptans’) for migraine",
		"If you are taking Aurorix (for depression), or have taken them within the last 14 days",
		"If you have had a heart attack, stroke or mini stroke",
		"If you have been told by your doctor that you have a rare form of migraine such as hemiplegic, basilar or ophthalmoplegic migraine",
		"High blood pressure",
	],
	pharmacodynamics:
		"Zolmitriptan belongs to a group of medicines called 5HT1 agonists (‘triptans’), which act to reduce the swelling of blood vessels in the head.      ",
	description:
		"This medicine contains Sumatrizolmitriptan ptan which belongs to a group of medicines called 5HT1 agonists (‘triptans’), which act to reduce the swelling of blood vessels in the head.It can be used to relieve migraine attacks that happen with or without warning signs (‘aura’), such as sensitivity to light, feeling sick and being sick, in people who have previously been diagnosed with migraine.This medicine does not prevent a migraine attack, and should therefore only be taken once the migraine has started.It can be taken by adults between the ages of 12 and 65 years. However some people should not take this medicine or should seek the advice of their pharmacist or doctor first.",
	interactions: [
		{
			name: "Aurorix",
			activeSubstance: "Moklebemid",
			drugGroup: ["MAO inhibitors"],
			prescriptionDrug: true,
			indications: ["Depression"],
			interactionType: "C",
			consequence:
				"The plasma concentration of zolmitriptan increases and there is a risk of serotonin syndrome",
			suggestions:
				"According to the manufacturer, the dose of zolmitriptan should not exceed 5 mg.",
		},
		{
			name: "Linezolid",
			activeSubstance: "Linezolid",
			drugGroup: ["Antibiotics"],
			prescriptionDrug: true,
			indications: ["Infections"],
			interactionType: "D",
			consequence:
				"Ccombination may increase the risk of serotonergic side effects including serotonin syndrome. Exposure to triptans such as almotriptan, rizatriptan, sumatriptan and zolmitriptan may increase",
			suggestions: "Combination should be avoided.",
		},
		{
			name: "Ergotamin",
			activeSubstance: "Ergotamin",
			drugGroup: [""],
			prescriptionDrug: true,
			indications: ["Migraine attacks"],
			interactionType: "C",
			consequence:
				"Concomitant treatment with ergot alkaloids and triptans may cause increased vasospasm. A case of cerebral infarction has been reported which is considered to be due to combination therapy",
			suggestions:
				"Ergotamine, which is a deregistered drug in Sweden today. Combination should be avoided. At least 24 hours should elapse between ingestion of ergot alkaloids and triptans.",
		},
	],
	sideEffects: [
		"Abdominal pain and bloody stools",
		"diarrhoea",
		"increased",
		"sweating",
		"abdominal pain",
		"diarrhoea",
		"stomach cramps",
		"dizziness, feeling sleepy",
		"fast, slow or irregular heart beat",
		"feeling worried or afraid, shaking",
	],
};
