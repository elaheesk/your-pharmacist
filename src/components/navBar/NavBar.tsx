import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import "./navBar.css";
interface IProps {
	isOpen: boolean;
	setIsOpen: (val: boolean) => void;
}
const NavBar = ({ isOpen, setIsOpen }: IProps) => {
	// const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<div className="navBar-container">
			<h3 className="main-title">Elahes recommendations</h3>
			<div className="icon-container">
				{isOpen ? (
					<IoClose
						onClick={() => setIsOpen(!isOpen)}
						className="menu-icon"
						data-testid="close"
					/>
				) : (
					<IoMenu
						onClick={() => setIsOpen(!isOpen)}
						className="menu-icon"
						data-testid="open"
					/>
				)}
			</div>

			{isOpen ? (
				<div className="link-container">
					<Link className="links" to="/coldflu">
						cold & flu
					</Link>
					<Link className="links" to="/painfever">
						Pain & fever{" "}
					</Link>

					<Link className="links" to="/stomach">
						Stomach & intestines
					</Link>
					<Link className="links" to="/prescriptiondrugs">
						Prescription drugs
					</Link>
					<Link className="links" to="/qa">
						Q&A
					</Link>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};
export default NavBar;
