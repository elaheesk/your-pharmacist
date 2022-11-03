import { DrugType } from "./type";

export const filteredByClass = (allDrugs: DrugType[], classNumber: string) => {
	const filteredArrayyyyy = allDrugs.filter(
		(drug: DrugType) => drug.class === classNumber
	);
	return filteredArrayyyyy;
};
