export const naproxen = {
	id: 3,
	otcDrug: true,
	categories: "Analgesic & Antipyretic",
	class: "1",
	activeSubstance: [{ name: "Naproxen" }],
	timeLimit: false,
	maxPeriod: "5 days",
	interactionExists: true,
	name: "Naproxen",
	dosage: "250 mg",
	quantity: "20 tablets",
	drugGroup: "NSAID",
	imageUrl:
		"https://www.apotekhjartat.se/globalassets/inriver/resources/40721_front_center.jpg",
	dosing: {
		adults: "250-500 mg morning and evening, maximum 1,000 mg/day",
		children: "",
	},
	maxDose: "1000 mg",
	withMeal: true,
	betweenMeals: false,
	infants: false,
	adults: true,
	minAge: "12",
	pregnancy:
		"Naproxen Abece is should not be used during the third trimester of pregnancy",
	breastfeeding:
		"Naproxen passes into breast milk, but risk of impact on the baby seems unlikely at therapeutic doses",
	indications: [
		"pain",
		"fever",
		"Rheumatoid arthritis",
		"Juvenile rheumatoid arthritis. Arthritis",
		"Mb Bechterew",
		"Acute attacks of migraine",
		"Dysmenorrhea without organic cause.",
	],
	contraindications: [
		"Hypersensitivity to the active substance or to any excipient",
	],
	pharmacodynamics: "",

	description:
		"Naproxen is a pain reliever, fever reducer and anti-inflammatory drug.It is used for mild to moderate acute pain, such as headaches, acute attacks of migraine, toothache, muscle and joint pain, backache, and for colds and menstrual cramps. Pronax can be used for short-term use up to 5 days against pain and 3 days against fever or migraine without a doctor's consultation. Full effect is achieved after about 2 hours.",

	interactions: [
		{
			name: "Waran",
			activeSubstance: "Warfarin",
			drugGroup: [""],
			prescriptionDrug: false,
			indications: ["Blood thinning medicine"],

			interactionType: "D",
			consequence:
				"Concomitant treatment with NSAIDs and warfarin can lead to serious bleeding. The risk of gastrointestinal bleeding is 2-3 times higher compared to treatment with warfarin alone. NSAIDs should be avoided in warfarin-treated patients. Monitoring of INR is not sufficient to estimate bleeding risk as platelet function is also affected by NSAIDs.",
			suggestions:
				"NSAIDs should be avoided in warfarin-treated patients.Consider treatment with e.g. lansoprazole, omeprazole or pantoprazole if concomitant treatment with warfarin and NSAIDs cannot be avoided",
		},
		{
			name: "Prednisolon",
			activeSubstance: "Prednisolon",
			drugGroup: ["Glucocorticoids"],
			prescriptionDrug: true,
			indications: [" anti-inflammatory", " immunosuppressive"],
			interactionType: "C",
			consequence:
				"Regular simultaneous treatment increases the risk of gastrointestinal bleeding (about 10-fold compared to no use of the respective drugs).",
			suggestions:
				"Consider gastroprotection with a proton-pump-inhibitor (example: Omeprazol) if concomitant treatment is needed for a longer period of time. Monitoring for signs and symptoms of gastrointestinal bleeding is recommended",
		},
		{
			name: "Trombyl",
			activeSubstance: "Acetylsalicylsyra",
			drugGroup: [""],
			prescriptionDrug: true,
			indications: ["Blood thinning medicine"],
			interactionType: "",
			consequence:
				"Increased risk of ulcerations and gastrointestinal bleeding due to enhanced effects.",
			suggestions: "",
		},
		{
			name: "Aspirin",
			activeSubstance: "Acetylsalicylsyra",
			drugGroup: ["Platelet aggregation inhibitory"],
			indications: ["Pain", "headache", "fever"],
			prescriptionDrug: false,

			interactionType: "",
			consequence:
				"Increased risk of ulcerations and gastrointestinal bleeding due to enhanced effects.",
			suggestions: "Combination should be avoided",
		},
		{
			name: "Treo",
			activeSubstance: "Acetylsalicylsyra, coffeine",
			drugGroup: ["Platelet aggregation inhibitory"],
			prescriptionDrug: false,
			indications: ["Pain", "headache", "fever"],
			interactionType: "",
			consequence:
				"Increased risk of ulcerations and gastrointestinal bleeding due to enhanced effects.",
			suggestions: "Combination should be avoided",
		},
	],
	sideEffects: [
		"abdominal pain",
		"diarrhoea",
		"dyspepsia",
		"nausea",
		"vomiting",
		"heartburn",
		"Fluid retention",
		"palpitations",
		"oedema",
		"Difficulty falling asleep",
		"difficulty concentrating",
		"Visual disturbances",
	],
};
