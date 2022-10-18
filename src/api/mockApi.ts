// class:1 ="pain relief"
// class:2 ="cold & flu" & "Nasal congestion & rhinitis"
//class:3 =Stomach & Intestines
// class:4 ="Antihistamin"
//class:5 =Other hypnotics and sedatives
//class:6 =Other dermatological agents, including medicated shampoos
//class:7 =Antiseptic
//class:8 =Antimykotikum AND glukokortikoid
//class:9 =Contraceptives

import { ibuprofen } from "./ibuprofen";


import { loperamid } from "./loperamid";

import { naproxen } from "./naproxen";
import { noskapin } from "./noskapin";
import { omeprazol } from "./omeprazol";
import { paracetamol } from "./paracetamol";
import { xylometazolin } from "./xylometazolin";

export const medicines = {
	success: true,
	error: "Please check your network connection",
	data: [
		paracetamol,
		ibuprofen,
		naproxen,
		xylometazolin,
		omeprazol,
		loperamid,
		noskapin,
	],
};
