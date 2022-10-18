interface optionObjects {
	optionValue: string;
	class: string;
}
interface DropdownProps {
	dropdownOptions: optionObjects[];
	inputValue: string;
	handleSelectField: (str: string) => void;
}
export const CategoriesBar = ({
	dropdownOptions,
	inputValue,
	handleSelectField,
}: DropdownProps) => {
	return (
		<div>
			<select
				value={inputValue}
				onChange={(e) => handleSelectField(e.target.value)}>
				{dropdownOptions.map((eachOption, idx) => (
					<option key={idx} value={eachOption.class}>
						{eachOption.optionValue}
					</option>
				))}
			</select>
		</div>
	);
};
