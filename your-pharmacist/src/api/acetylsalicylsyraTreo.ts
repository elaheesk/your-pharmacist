export const acetylsalicylsyraTreo = {
	id: 8,
	otcDrug: true,
	categories: "Analgesic & Antipyretic & Antiphlogistic",
	class: "1",
	activeSubstance: "Acetylsalicylsyra, Caffeine",
	timeLimit: true,
	maxPeriod: "5 days",
	interactionExists: true,
	name: "Treo",
	dosage: "500mg/50 mg,",
	quantity: "60 Effervescent tablets",
	drugGroup: "Analgesics, Antipyretics and Antiphlogistics",
	imageUrl:
		"https://media.apotea.se/product-images/L/treo-brustablett-500-mg-50-mg-3x20-st-1.jpg",
	dosing: {
		adults:
			" 1-2 effervescent tablets 1-3 times per day. More than 2 tablets at a time do not provide a better pain-relieving effect.",
		children: "",
	},
	maxDose: "3000 mg/ 300 mg",
	withMeal: true,
	betweenMeals: false,
	infants: false,
	adults: true,
	minAge: "14",
	pregnancy:
		"Pregnant women should not use Treo during the last three months of pregnancy. Ingestion of Treo should be avoided by women planning pregnancy or who are pregnant.",
	breastfeeding:
		" Acetylsalicylic acid and caffeine pass into breast milk, but risk of impact on the baby seems unlikely with therapeutic doses..",
	indications: [
		"Headaches",
		"toothaches",
		"menstrual pains",
		"fever during colds",
		"joint and muscle pains and migraines",
	],
	contraindications: [
		"Hypersensitivity to loperamide hydrochloride or to any excipient",
		"Due to cross-reaction, Treo should not be given to patients who have had symptoms of asthma, breathing difficulties, rhinitis or urticaria when taking acetylsalicylic acid or anti-inflammatories such as NSAIDs",
		"Haemophilia",
		"Thrombocytopenia",
		"Active ulcus ventriculi et duodeni",
		" Liver cirrhosis",
		"Severe heart failure and severe kidney disease",
		"Doses > 100 mg/day during the third trimester of pregnancy",
	],
	pharmacodynamics:
		"The analgesic effect is thought to be due to inhibition of the formation of certain prostaglandins. The antipyretic effect is exerted through the influence of thermoregulatory centers in the CNS.The blood-thinning effect is due to Acetylsalicylic acid inhibiting platelet aggregation and thereby increasing the risk of bleeding. Caffeine's analgesic properties are thought to be due to its constricting effect on the brain's blood vessels. In addition, the caffeine has a central stimulating effect that counteracts feelings of fatigue.",
	description:
		" Treo relieves temporary headaches, toothaches, menstrual pains, fevers and migraines.With water, Treo provides a clear solution that is gentler on the stomach than regular solid tablets with acetylsalicylic acid. Treo starts working within 30 minutes. The effect is greatest after 1-2 hours.",
	interactions: [
		{
			name: "Waran",
			activeSubstance: "Warfarin",
			drugGroup: ["Anticoagulant"],
			prescriptionDrug: true,
			indications: ["Blood thinning medicine"],
			interactionType: "D",
			consequence: "The combination increases the risk of bleeding.",
			suggestions:
				"The combination should be avoided. Please note that INR measurement is not sufficient for an assessment of the risk of bleeding as acetylsalicylic acid affects platelet function",
		},
		{
			name: "Xarelto",
			activeSubstance: "Rivaroxaban",
			drugGroup: ["Direct factor Xa inhibitors "],
			prescriptionDrug: true,
			indications: ["Blood thinning medicine"],
			interactionType: "D",
			consequence: "The plasma concentration of loperamide increases.",
			suggestions:
				"Consider using paracetamol as an alternative analgesic or gastroprotection with for example Omeprazol.",
		},
	],
	sideEffects: [
		"Increased tendency to bleed",
		"dyspepsia",
		"heartburn",
		"nausea",
		"flatulence",
		" Caffeine can cause anxiety, insomnia,tremors",
	],
};
