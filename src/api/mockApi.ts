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
import { bisakodyl } from "./bisakodyl";
import { bromhexidin } from "./bromhexidin";
import { calciumMagnesiumCarbonate } from "./calciumMagnesiumCarbonate";
import { dimenhydrinat } from "./dimenhydrinat";
import { flurbiprofen } from "./flurbiprofen";
import { ibuprofen } from "./ibuprofen";
import { lactulose } from "./lactulose";
import { loperamid } from "./loperamid";
import { makrogol } from "./makrogol";
import { meklozin } from "./meklozin";
import { mometasone } from "./mometasone";
import { naproxen } from "./naproxen";
import { noskapin } from "./noskapin";
import { noskapinSolution } from "./noskapinSolution";
import { omeprazol } from "./omeprazol";
import { oxymetazoline } from "./oxymetazoline";
import { paracetamol } from "./paracetamol";
import { strepsils } from "./strepsils";
import { sumatriptan } from "./sumatriptan";
import { xylometazolin } from "./xylometazolin";
import { zolmitriptan } from "./zolmitriptan";

export const medicines = {
	success: true,
	error: "Please check your network connection",
	data: [
		ibuprofen,
		naproxen,
		acetylsalicylsyraTreo,
		paracetamol,
		sumatriptan,
		zolmitriptan,
		omeprazol,
		meklozin,
		dimenhydrinat,
		calciumMagnesiumCarbonate,
		loperamid,
		makrogol,
		lactulose,
		bisakodyl,
		xylometazolin,
		oxymetazoline,
		strepsils,
		noskapin,
		noskapinSolution,
		bromhexidin,
		flurbiprofen,
		mometasone,
	],
};
