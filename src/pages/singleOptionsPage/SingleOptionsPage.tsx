import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./singleOptionsPage.css";
import {
	AllSubCategories,
	CategoriesOptions,
	ISubCategories,
} from "../../type";
import { allSubCategoriesDescription } from "../../api/categoriesApi";
import { RiArrowLeftLine } from "react-icons/ri";
interface IProps {
	categoriesAndSubCategories: ISubCategories[];
}
interface IChange {
	id: number;
	color: boolean;
}
const SingleOptionsPage = ({ categoriesAndSubCategories }: IProps) => {
	const [chosenSubCategory, setChosenSubCategory] = useState<
		AllSubCategories[]
	>([]);
	const [categoryIssues, setCategoryIssues] = useState<CategoriesOptions[]>([]);
	const { optionId } = useParams();
	const [changeColor, setChangeColor] = useState<IChange[]>([
		{ id: 0, color: false },
		{ id: 1, color: false },
		{ id: 2, color: false },
		{ id: 3, color: false },
		{ id: 4, color: false },
	]);
	const convertToInteger: any = optionId;
	const useParamsId: number = parseInt(convertToInteger);
	const [colorObject, setColorObject] = useState<IChange>({
		id: 0,
		color: false,
	});
	const chooseSubCategory = (value: string, idx: number) => {
		const filteredSubCategory = allSubCategoriesDescription.filter(
			(subCategory) => subCategory.optionValue === value
		);
		setChosenSubCategory(filteredSubCategory);
		const copyColor = [...changeColor];
		// const newColor = copyColor.find((eachColor) => eachColor.id === idx);
		// console.log(
		// 	newColor.find((each) => setColorObject({ ...each, color: !each.color }))
		// );

		const obj = copyColor.find((each) => each.id === idx);
		setColorObject({ ...colorObject, color: !colorObject.color });
	};

	useEffect(() => {
		const getCategory = () => {
			if (categoriesAndSubCategories.length !== 0) {
				const filteredCategory = categoriesAndSubCategories.filter(
					(eachObj: ISubCategories) => eachObj.id === useParamsId
				);

				filteredCategory.map((ea) => setCategoryIssues(ea.subCategory));
			}
		};

		getCategory();
	}, [categoriesAndSubCategories]);

	const navigate = useNavigate();
	return (
		<div className="singleOptions-parent">
			<button className="go-back-btn" onClick={() => navigate("/advice")}>
				<RiArrowLeftLine className="go-back-icon" /> Go back
			</button>
			{categoryIssues.length > 0 &&
				categoryIssues.map((eachObj, idx) => (
					<div
						// style={{backgroundColor: changeColor}}
						className="subCategory-card"
						onClick={() => chooseSubCategory(eachObj.optionValue, idx)}
						key={idx}>
						{eachObj?.optionValue}
					</div>
				))}

			<div className="cause-treatment-container">
				{chosenSubCategory.map((subCategory, idx) => (
					<div key={idx}>
						<label className="cause-treatment-question">
							What causes {subCategory.optionValue} ?
						</label>
						<p className="cause-treatment-text">{subCategory.cause}</p>
						<label className="cause-treatment-question">What can you do?</label>
						<p className="cause-treatment-text"> {subCategory.treatment}</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default SingleOptionsPage;
