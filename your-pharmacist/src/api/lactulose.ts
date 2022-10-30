export const lactulose = {
	id: 15,
	otcDrug: true,
	categories: "Constipation",
	class: "3",
	activeSubstance: "Lactulose",
	timeLimit: true,
	maxPeriod: "",
	interactionExists: false,
	name: "Laktulos",
	dosage: "670mg/ml,",
	quantity: "500ml",
	drugGroup: "Bowel regulating agent",
	imageUrl:
		"https://media.meds.se/meds/images/7046261073004_1/550/550/fill/c/laktulos-meda-670-mg-ml-1000-milliliter-oral-losning.jpg",
	dosing: {
		adults:
			"Initially, 30 ml per day is given as a single dose. Once bowel function has started (usually after 2-4 days), you can switch to maintenance doses of the order of 10-25 ml daily.",
		children: "Under 1 year: 5 ml. 1-6 years: 10-15 ml. 7-14 years: 15 ml.",
	},
	maxDose: "50ml",
	withMeal: false,
	betweenMeals: false,
	infants: true,
	adults: true,
	minAge: "0",
	pregnancy:
		"No effects are expected during pregnancy as systemic exposure to lactulose is negligible. It can be used during pregnancy.",
	breastfeeding:
		"No effects are expected on breastfed neonates/infants as systemic exposure of lactulose to the lactating woman is negligible. Lactulose can be used during breastfeeding.",
	indications: [
		"Constipation of a functional nature",
		"Hepatic encephalopathy ",
	],
	contraindications: [
		"Hypersensitivity to the active substance, substituted benzimidazoles",
		"Gastrointestinal obstruction, perforation or risk of perforation of the digestive tract.",
		"Galactosemia",
	],
	pharmacodynamics:
		"Lactulose is a synthetic disaccharide consisting of fructose and galactose. Lactulose passes through the small intestine unchanged and is broken down in the large intestine by the saccharolytic bacterial flora into low-molecular weak organic acids, mainly lactic acid.The gut-regulating effect of lactulose is explained by the fact that the acids formed during the breakdown provide a bulking effect by osmotically binding water and thus have a regularizing effect on peristalsis. Lactulose does not affect blood sugar in normal doses and can therefore be given to diabetics.   ",
	description:
		" Lactulose is a bowel regularizer used for constipation. During the breakdown of lactulose in the intestine, acids are formed. The acids bind water and give an increased volume in the intestine. In this way, bowel movements are normalized and constipation is prevented.        Lactulose Meda contains up to 80 mg/ml of lactose (from the manufacture), which should be taken into account in case of lactose intolerance",
	interactions: [
		{
			name: "Interaction studies have not been carried out.",
			activeSubstance: "",
			drugGroup: [""],
			prescriptionDrug: true,
			indications: [""],
			interactionType: "",
			consequence: "",
			suggestions: "",
		},
	],
	sideEffects: [
		"Hypernatremia",
		"Flatulence",
		"meteorism",
		"abdominal pain",
		"nausea",
		"diarrhea",
	],
};
