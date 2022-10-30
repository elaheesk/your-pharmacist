export const sumatriptan = {
	id: 17,
	otcDrug: true,
	categories: "Migraine",
	class: "1",
	activeSubstance: "Sumatriptan",
	timeLimit: true,
	maxPeriod:
		"Do not take this medicine or should seek the advice of their pharmacist or doctor first. ",
	interactionExists: true,
	name: "Sumatriptan",
	dosage: "50mg,",
	quantity: "2 Tablets",
	drugGroup: "‘Triptans",
	imageUrl:
		"https://media.apotea.se/product-images/L/sumatriptan-teva-tablett-50-mg-2-st-2.jpg",
	dosing: {
		adults:
			" Take one tablet as soon as possible after the first signs of a migraine. If your symptoms go away and come back, you can take another tablet after 2 hours. Don’t take more than 2 tablets in 24 hours. Not recommended for people over 65 years of age.",
		children: "",
	},
	maxDose: "100mg",
	withMeal: false,
	betweenMeals: false,
	infants: false,
	adults: true,
	minAge: "18",
	pregnancy:
		"Clinical data do not show any effects on the fetus. Sumatriptan should only be considered when the expected benefit to the mother is greater than the possible risk to the fetus. Experience with treatment with sumatriptan during the second and third trimester is limited.    ",
	breastfeeding:
		"It has been shown that sumatriptan is excreted in breast milk after subcutaneous administration. Effects on infants can be minimized by avoiding breastfeeding for 12 hours after treatment, and breast milk expressed during these hours should be discarded      ",
	indications: [
		"Migraine attacks that happen with or without warning signs (‘aura’)",
		"Migraine attacks in people who have previously been diagnosed with migraine",
		"Pre- and post-operatively and to facilitate defecation in case of haemorrhoids, anal fissures",
	],
	contraindications: [
		"Hypersensitivity to the active substance, substituted benzimidazoles",
		"Other 5HT1 agonists (‘triptans’) for migraine",
		"If you are taking Aurorix (for depression), or have taken them within the last 14 days",
		"If you have had a heart attack, stroke or mini stroke",
		"If you have been told by your doctor that you have a rare form of migraine such as hemiplegic, basilar or ophthalmoplegic migraine",
		"High blood pressure",
		"If you are under 18 years of age",
		"If you have epilepsy or are prone to fits",
	],
	pharmacodynamics:
		"Sumatriptan belongs to a group of medicines called 5HT1 agonists (‘triptans’), which act to reduce the swelling of blood vessels in the head.      ",
	description:
		"Sumatriptan belongs to a group of medicines called 5HT1 agonists (‘triptans’), which act to reduce the swelling of blood vessels in the head.It is used to relieve migraine attacks that happen with or without warning signs (‘aura’), such as sensitivity to light/feeling sick, in people who have previously been diagnosed with migraine.Sumatriptan does not prevent a migraine attack, and should therefore only be taken once the migraine has started.It is for adults between  18-65 years of age. However some people should avpid sumatriptan or seek advice of their pharmacist or doctor first.",
	interactions: [
		{
			name: "Aurorix",
			activeSubstance: "Moklebemid",
			drugGroup: ["MAO inhibitors"],
			prescriptionDrug: true,
			indications: ["Depression"],
			interactionType: "D",
			consequence:
				"The plasma concentration of sumatriptan increases with the simultaneous use of moclobemide. Theoretically, the risk of serotonin syndrome can therefore increase.",
			suggestions:
				"The combination should be avoided. If the drugs are combined, the dose of sumatriptan should be halved.",
		},
		{
			name: "Linezolid",
			activeSubstance: "Linezolid",
			drugGroup: ["Antibiotics"],
			prescriptionDrug: true,
			indications: ["Infections"],
			interactionType: "D",
			consequence:
				"  Kombinationen kan öka risken för serotonerga biverkningar inklusive serotonergt syndrom. Exponeringen för triptaner så som almotriptan, rizatriptan, sumatriptan och zolmitriptan kan öka. ",
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
