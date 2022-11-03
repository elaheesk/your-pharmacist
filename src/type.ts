// export interface NameProps {
// 	name: string;
// }
export interface DosingProps {
	adults: string;
	children: string;
}
export interface InteractionProps {
	name: string;
	activeSubstance: string;
	drugGroup: string[];
	prescriptionDrug: boolean;
	indications: string[];
	interactionType: string;
	consequence: string;
	suggestions: string;
}

export interface DrugType {
	id: number;
	otcDrug: boolean;
	categories: string;
	class: string;
	activeSubstance: string;
	name: string;
	timeLimit: boolean;
	maxPeriod: string;
	interactionExists: boolean;
	indications: string[];
	contraindications: string[];
	pharmacodynamics: string;
	description: string;
	interactions: InteractionProps[];
	sideEffects: string[];
	dosage: string;
	quantity: string;
	drugGroup: string;
	imageUrl: string;
	dosing: DosingProps;
	maxDose: string;
	withMeal: boolean;
	betweenMeals: boolean;
	infants: boolean;
	adults: boolean;
	minAge: string;
	pregnancy: string;
	breastfeeding: string;
}

export interface CategoriesOptions {
	optionValue: string;
	class: string;
}
