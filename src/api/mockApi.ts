// class:1 ="pain relief"
// class:2 ="cold & flu" & "Nasal congestion & rhinitis"
//class:3 =Stomach & Intestines
// class:4 ="Antihistamin"
//class:5 =Other hypnotics and sedatives
//class:6 =Other dermatological agents, including medicated shampoos
//class:7 =Antiseptic
//class:8 =Antimykotikum AND glukokortikoid
//class:9 =Contraceptives

import { acetylsalicylsyraTreo } from "./acetylsalicylsyraTreo";
import { bromhexidin } from "./bromhexidin";
import { ibuprofen } from "./ibuprofen";

import { loperamid } from "./loperamid";
import { makrogol } from "./makrogol";
import { mometasone } from "./mometasone";

import { naproxen } from "./naproxen";
import { noskapin } from "./noskapin";
import { noskapinSolution } from "./noskapinSolution";
import { omeprazol } from "./omeprazol";
import { paracetamol } from "./paracetamol";
import { strepsils } from "./strepsils";
import { xylometazolin } from "./xylometazolin";

export const medicines = {
	success: true,
	error: "Please check your network connection",
	data: [
		paracetamol,
		ibuprofen,
		naproxen,
		acetylsalicylsyraTreo,
		omeprazol,
		loperamid,
		makrogol,
		xylometazolin,
		strepsils,
		noskapin,
		noskapinSolution,
		bromhexidin,
		mometasone,
	],
};
