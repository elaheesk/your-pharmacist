interface optionObjects {}
interface DropdownProps {
	dropdownOptions: optionObjects[];

	handleSelectField: (str: string) => void;
}
export const CategoriesBar = ({}: DropdownProps) => {
	return <div></div>;
};
