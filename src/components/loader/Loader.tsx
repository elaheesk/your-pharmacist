import { PuffLoader } from "react-spinners";
import "./loader.css";

const Loader = () => {
	return (
		<>
			<div className="loader-container">
				<PuffLoader size={150} loading={true} color="#ffffff" />
				<p className="text">Sidan laddas...</p>
			</div>
		</>
	);
};

export default Loader;
