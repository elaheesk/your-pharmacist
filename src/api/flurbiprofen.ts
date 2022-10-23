export const flurbiprofen = {
	id: 14,
	otcDrug: true,
	categories: "Sore throat",
	class: "2",
	activeSubstance: [{ name: "Flurbiprofen" }],
	timeLimit: true,
	maxPeriod: "3 days",
	interactionExists: true,
	name: "Strefen",
	dosage: "8,75mg,",
	quantity: "16 Lozenges",
	drugGroup: " NSAID propionic acid derivatives",
	imageUrl:
		"https://media.apotea.se/product-images/L/strefen-apelsin-sugtablett-8.75-mg-1-x-16-st-1.jpg",
	dosing: {
		adults:
			"One lozenge to suck on/dissolve slowly in the mouth every 3-6 hours as needed. A maximum of 5 lozenges per day.",
		children: "Not indicated for children under 12 years of age.",
	},
	maxDose: "40mg ",
	withMeal: false,
	betweenMeals: false,
	infants: false,
	adults: true,
	minAge: "12",
	pregnancy:
		"Pregnant women should not use Strefen during the last three months of pregnancy. If you are in the first 6 months of pregnancy or breastfeeding, talk to your doctor before taking these lozenges.",
	breastfeeding:
		"In limited studies, flurbiprofen has been detected in breast milk at very low concentrations that are unlikely to adversely affect the breastfed infant.",
	indications: ["short-term symptom relief in  sore throats"],
	contraindications: [
		"Hypersensitivity to loperamide hydrochloride or to any excipient",
		"Patients who have previously suffered hypersensitivity reactions (eg asthma, bronchospasm, rhinitis, angioedema or urticaria) to aspirin or other NSAIDs.",
	],
	pharmacodynamics:
		"Flurbiprofen is an NSAID in the group of propionic acid derivatives that works by inhibiting prostaglandin synthesis. In humans, flurbiprofen has potent analgesic, antipyretic and anti-inflammatory properties",
	description:
		"Strefen is used for short-term symptom relief in sore throats. It relieves pain, swelling and inflamed throat. The pain is significantly reduced for up to four hours even in patients with streptococcal infections, e.g. tonsillitis. Strefen is the only lozenge with the substance flurbiprofen, which has both analgesic and anti-inflammatory properties",
	interactions: [
		{
			name: "Waran",
			activeSubstance: "Warfarin",
			drugGroup: ["Anticoagulant"],
			prescriptionDrug: false,
			indications: ["Blood thinning"],
			interactionType: "D",
			consequence:
				"NSAIDs can enhance the effects of anticoagulants, warfarin.",
			suggestions:
				"NSAIDs should be avoided in warfarin-treated patients. Monitoring of INR is not sufficient to estimate bleeding risk as platelet function is also affected by NSAIDs. Consider treatment with proton pump inhibitors (eg lansoprazole, omeprazole or pantoprazole) if concomitant treatment with warfarin and NSAIDs cannot be avoided.",
		},
		{
			name: "Ipren",
			activeSubstance: "Ibuprofen",
			drugGroup: ["NSAID"],
			prescriptionDrug: false,
			indications: ["Pain", "fever"],
			interactionType: "",
			consequence:
				" Increases the risk of side effects (especially gastrointestinal side effects such as ulcers and bleeding).",
			suggestions: "Avoid simultaneous use of two or more NSAIDs",
		},
		{
			name: "Naproxen",
			activeSubstance: "Naproxen",
			drugGroup: ["NSAID"],
			prescriptionDrug: false,
			indications: ["Pain", "fever"],
			interactionType: "C",
			consequence:
				" Increases the risk of side effects (especially gastrointestinal side effects such as ulcers and bleeding).",
			suggestions: "Avoid simultaneous use of two or more NSAIDs",
		},
		{
			name: "Treo",
			activeSubstance: "Acetylsalicylsyra",
			drugGroup: ["Analgesics, Antipyretics and Antiphlogistics"],
			prescriptionDrug: false,
			indications: ["Pain", "Fever"],
			interactionType: "D",
			consequence: "Increased risk of gastrointestinal ulceration or bleeding.",
			suggestions: "Avoid simultaneous use of two or more NSAIDs",
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
