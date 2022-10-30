export const ibuprofen = {
	id: 2,
	otcDrug: true,
	categories: "Analgesic & Antipyretic",
	class: "1",
	activeSubstance: "Ibuprofen",

	timeLimit: true,
	maxPeriod: "10 days",
	interactionExists: true,
	name: "Ipren",
	dosage: "400mg,",
	quantity: "30 Tablets",
	drugGroup: "NSAID",
	imageUrl:
		"https://media.apotea.se/product-images/L/ipren-filmdragerad-tablett-400-mg-30-st-0.jpg",
	dosing: {
		adults: "1 tablet 3 times per day, or 1 tablet every eigth hour. ",
		children: "",
	},
	maxDose: "1200 mg",
	withMeal: true,
	betweenMeals: false,
	infants: false,
	adults: true,
	minAge: "12",
	pregnancy: " Should not be used during the third trimester of pregnancy",
	breastfeeding:
		"Ibuprofen passes into breast milk, but with therapeutic doses (maximum 1200 mg/day) during short-term treatment, the risk of impact on the child seems unlikely. If, on the other hand, longer treatment is prescribed, early weaning should be considered.",
	indications: [
		"pain",
		"fever",
		"inflammation",
		"headache",
		"migraine",
		"toothache",
		"muscle pain",
		"menstrual cramps",
		"joint pain",
		"osteoarthritis",
		"rheumatoid arthritis",
	],
	contraindications: [
		"Hypersensitivity to the active substance or to any excipient",
		"Stomach ulcer",
		"gastritis",
		"recurrent gastrointestinal ulcer/bleeding",
		"severely impaired liver function",
		"severe heart failure",
		"severe kidney disease",
		"condition with increased tendency to bleed",
		"gastrointestinal bleeding in connection with previous treatment with NSAIDs",
		"third trimester of pregnancy",
		"due to cross-reaction, Ipren should not be given to patients who have developed symptoms of asthma, rhinitis or urticaria when taking aspirin or other non-steroidal anti-inflammatory agents",
		"immediately before or after cardiac surgery.",
	],
	pharmacodynamics:
		"Inhibition of prostaglandin synthesis is an important part of the mechanism of action as prostaglandins play a major role in pain, inflammation, fever and migraine. Ibuprofen inhibits the enzymes (COX) and COX-2, which reduces the production of prostaglandins such as PGE2 at the source of pain and/or inflammation. Ibuprofen also blocks the formation of prostaglandin F2α which causes hypercontractility in the uterus in dysmenorrhea.",
	description:
		"Ipren is used for mild to moderate pain. The product is also antipyretic and anti-inflammatory. For adults and children from 12 years. Ipren can be used, for example, for back pain, joint pain, fever during a cold or to alleviate problems caused by osteoarthritis or rheumatoid arthritis. The effect is usually achieved within 30 minutes after ingestion and the maximum effect is reached within approx. 1-2 hours. The tablet is film-coated, which makes it easier to swallow. If the condition has not improved within 5 days, consult a doctor",
	interactions: [
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
		{
			name: "Naproxen",
			activeSubstance: "Naproxen",
			drugGroup: ["NSAID"],
			prescriptionDrug: false,
			indications: ["pain", "inflammation", "fever"],
			interactionType: "",
			consequence:
				"Increased risk of ulcerations and gastrointestinal bleeding due to enhanced effects.",
			suggestions: "Combination should be avoided",
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
			suggestions: "Combination should be avoided",
		},
		{
			name: "Waran",
			activeSubstance: "Warfarin",
			drugGroup: [""],
			prescriptionDrug: true,
			indications: ["Blood thinning medicine"],
			interactionType: "D",
			consequence:
				"Concomitant treatment with NSAIDs and warfarin can lead to serious bleeding. The risk of gastrointestinal bleeding is 2-3 times higher compared to treatment with warfarin alone. NSAIDs should be avoided in warfarin-treated patients. Monitoring of INR is not sufficient to estimate bleeding risk as platelet function is also affected by NSAIDs.",
			suggestions:
				"NSAIDs should be avoided in warfarin-treated patients.Consider treatment with e.g. lansoprazole, omeprazole or pantoprazole if concomitant treatment with warfarin and NSAIDs cannot be avoided",
		},
		{
			name: "Flukonazol",
			activeSubstance: "Flukonazol",
			drugGroup: [""],
			prescriptionDrug: true,
			indications: ["fungal infections"],
			interactionType: "C",
			consequence: "The plasma concentration of ibuprofen increases",
			suggestions:
				"Consider lowering the ibuprofen dose, especially if side effects occur.",
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
			name: "Esidrex",
			activeSubstance: "Hydroklortiazid",
			drugGroup: ["Diuretics", "tiazider"],
			prescriptionDrug: true,
			indications: ["Hypertension", "Edema "],
			interactionType: "C",
			consequence:
				"The diuretic and antihypertensive effect of thiazides can be reduced with the simultaneous use of NSAIDs. Concomitant use may cause weight gain. The increase in blood pressure is usually mild to moderate, but the risk of complications is increased above all in older patients.",
			suggestions:
				"Careful monitoring of blood pressure and body weight is recommended. The dose of thiazide diuretic may need to be adjusted. Consider treatment of hypertension with calcium-flow-inhibitors instead of diuretics as NSAIDs do not reduce the effect of these.",
		},
		{
			name: "Salures",
			activeSubstance: "Bendroflumetiazid",
			drugGroup: ["Diuretika", "tiazider"],
			prescriptionDrug: true,
			indications: ["Hypertension", "Edema"],
			interactionType: "C",
			consequence:
				"The diuretic and antihypertensive effect of thiazides can be reduced with the simultaneous use of NSAIDs. Concomitant use may cause weight gain. The increase in blood pressure is usually mild to moderate, but the risk of complications is increased above all in older patients.",
			suggestions:
				"Careful monitoring of blood pressure and body weight is recommended. The dose of thiazide diuretic may need to be adjusted. Consider treatment of hypertension with calcium-flow-inhibitors instead of diuretics as NSAIDs do not reduce the effect of these.",
		},
	],
	sideEffects: [
		"Abdominal pain",
		"diarrhoea",
		"dyspepsia",
		"nausea",
		"vomiting",
	],
};
