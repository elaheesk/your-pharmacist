import { AllSubCategories, CategoriesOptions, ISubCategories } from "../type";

export const stomachIssues: CategoriesOptions[] = [
	{ optionValue: "Diarrhea", class: "Diarrhea" },
	{ optionValue: "Constipation", class: "Constipation" },
	{
		optionValue: "Heartburn and acid reflux",
		class: "Heartburn and acid reflux",
	},
	{ optionValue: "Motion sickness", class: "Motion sickness" },
];

export const coldAndFlu: CategoriesOptions[] = [
	{
		optionValue: "Nasal congestion & rhinitis",
		class: "Nasal congestion & rhinitis",
	},
	{ optionValue: "Sinusitis", class: "Sinusitis" },

	{ optionValue: "Cough", class: "Cough" },

	{
		optionValue: "Sore throat",
		class: "Sore throat",
	},
];
export const painAndFever: CategoriesOptions[] = [
	{ optionValue: "Migraine", class: "Migraine" },
	{ optionValue: "Analgesic & Antipyretic", class: "Analgesic & Antipyretic" },
	{ optionValue: "Analgesic", class: "Analgesic" },
];

export const allergies: CategoriesOptions[] = [
	{ optionValue: "Stuffy & runny nose", class: "Stuffy & runny nose" },
	{ optionValue: "Eye problems", class: "Eye problems" },
	{ optionValue: "General symptoms", class: "General symptoms" },
];

export const categoriesAndSubCategories: ISubCategories[] = [
	{ id: 1, subCategory: coldAndFlu },
	{ id: 2, subCategory: stomachIssues },
	{ id: 3, subCategory: painAndFever },
	{ id: 4, subCategory: allergies },
];

export const allSubCategoriesDescription: AllSubCategories[] = [
	{
		optionValue: "Nasal congestion & rhinitis",
		class: "Nasal congestion & rhinitis",
		cause:
			"What we call a cold is an infection in the upper respiratory tract, i.e. the ears, nose, sinuses, oral cavity, pharynx and trachea. The infection is caused by a virus that exists in hundreds of different variants. When you get a cold, it is due to a virus, which you do not treat with antibiotics, as antibiotics only attack bacteria. What you can do is partly to prevent, by reducing the spread of the virus, and partly to alleviate the symptoms we experience.",
		treatment:
			"A decongestant nasal spray with oxymetazoline or xylometazoline, which helps with nasal congestion, may provide temporary relief, but should not be used for more than ten days. If you have rhinitis and nasal congestion at the same time, there is Otrivin Comp which helps with both symptoms, this is used for a maximum of seven days. Keep in mind that a nasal spray should only be used by one person during a maximum of one cold, for hygienic reasons and to prevent the spread of infection.",
	},
	{
		optionValue: "Sinusitis",
		class: "Sinusitis",
		cause:
			"You can get sinusitis if a cold spreads from the nasal mucosa to the mucous membranes in the sinuses. A cold is a viral infection that causes inflammation in the mucous membranes. They then become red, swollen and secrete fluid and mucus. The swelling can cause the passage between the nose and the sinuses to become blocked, so that fluid and mucus cannot drain out of the sinus.",
		treatment:
			"Ordinary decongestant nasal spray helps well against the mucosal swelling. Cortisone nasal spray also helps because it counteracts the inflammation itself that causes the swelling. Cortisone nasal spray can also speed up recovery somewhat.",
	},
	{
		optionValue: "Cough",
		class: "Cough",
		cause:
			"At the beginning of a cold, it is common to experience a dry cough, so-called dry cough. This is because the mucous membrane in the trachea is irritated and the cough reflex is triggered. When mucus production starts, it is common for the whooping cough to turn into a phlegm cough. The cough reflex and mucus help the body to get rid of uninvited visitors and are not really something we want to suppress completely. But sometimes the cough can be a bit too exhausting for the body or disturb the much-needed sleep, and then there is help.",
		treatment:
			"For whooping cough, there are cough suppressants containing noscapine. If you have a phlegm cough, you can instead try expectorant medicines that contain bromhexine. Drinks, hot or cold, can also help against whooping cough. Hot drinks can possibly also dissolve tough mucus in a phlegm cough.",
	},
	{
		optionValue: "Sore throat",
		class: "Sore throat",
		cause:
			"Having a sore throat is common and can be caused by several different things. A cold, sore throat, glandular fever or shouting or singing loudly can lead to a sore throat. The fact that you get a sore throat is because you have had an infection caused by bacteria or viruses. If you have had a sore throat due to that you screamed or sang loudly, the vocal cords have been overstrained and inflamed.",
		treatment:
			"To relieve a sore throat, pain relievers can help. There are also lozenges and sprays that have an anesthetic and anti-inflammatory effect. Hot drinks, ice cream and yogurt can be good for the throat when you have pain. In most cases, a sore throat goes away on its own within a few days.",
	},
	{
		optionValue: "Diarrhea",
		class: "Diarrhea",
		cause:
			"Diarrhea is usually harmless, but can be unpleasant and troublesome. You can get loose in your stomach for various reasons, but the most common are infection, hypersensitivity or other illnesses (e.g. vomiting). If we ingest bacteria, viruses or parasites that prevent the intestine from absorbing fluid, it is called a gastrointestinal infection. The liquid remains in the intestine and dissolves the stool. In adults, diarrhea often resolves on its own within a few days. If you are abroad, the risk of contracting a gastrointestinal infection is greater as we are exposed to new bacterial environments in food and drinking water. They usually say that you get a tourist stomach.",
		treatment:
			"If you have been affected by diarrhea, you can prevent dehydration by drinking fluid replacement. Fluid replacement stabilizes the salt and fluid balance in the body and increases water absorption by adding salt and glucose. Tourist stomach or traveler's diarrhea can be avoided by not drinking tap water during the trip, avoiding ice cubes in drinks, only eating properly cooked meat and fish and avoiding already peeled fruits and vegetables. There are stopping medicines, for example Dimor, which you can take with you to relieve temporary acute diarrhoea.It is recommended to contact a doctor or pharmacist in case of diarrhea in children under 3 years of age.",
	},
	{
		optionValue: "Constipation",
		class: "Constipation",
		cause:
			"Stress, low-fiber diet and hormonal changes (such as during pregnancy or before menstruation) can be the cause of a hard stomach.",
		treatment:
			"It is often possible to reduce constipation yourself by, for example, drinking plenty of fluids and eating fiber-rich foods (e.g. prunes, figs, beans, peas, oatmeal and butter). Daily exercise also helps the bowels work. If you still experience no improvement, there are over-the-counter medicines that can help. There are softening laxatives such as Inolaxol and Lactulose, micro enemas such as Microlax and gut-irritating laxatives such as Dulcolax and Pursennid Ex-Lax",
	},
	{
		optionValue: "Heartburn and acid reflux",
		class: "Heartburn and acid reflux",
		cause:
			"Heartburn, also called gastric juice reflux, is caused by the upper mouth of the stomach not keeping tight, which means that gastric juice from the stomach comes up to the esophagus. It often leads to pain in the upper part of the stomach, a burning sensation in the chest and acid regurgitation with a sharp and sour taste in the mouth. The upper stomach mouth sits at the junction between the esophagus and the stomach and functions as a kind of valve. It lets the food through down to the stomach but stops the stomach contents from backing up into the throat. Reflux problems can lead to damage to the mucous membranes in the esophagus. In case of long-term heartburn, the mucous membranes of the throat can also become inflamed. This can lead to lasting problems, for example with swallowing.",
		treatment:
			"Temporary heartburn often goes away on its own, but there are things you can do to ease the symptoms. For example, you can sleep with your head in a higher position than usual, avoid eating late at night and avoid fatty foods, coffee, alcohol and nicotine. There are also over-the-counter medications that can help. The ailments you suffer from determine which medicine you should choose. There are antacid drugs that neutralize stomach acid, histamine-2 blockers that block the nerve to the cells that produce hydrochloric acid in the stomach, and proton pump inhibitors that reduce hydrochloric acid production more strongly than the aforementioned histamine-2 blockers.",
	},
	{
		optionValue: "Motion sickness",
		class: "Motion sickness",
		cause:
			"Some people get motion sickness more easily than others. This is often due to the fact that those people are extra sensitive to movement changes. Motion sickness is most common in children between the ages of two and ten, and often decreases with age. The first signs that you are about to get motion sickness are that you become tired, pale and start yawning. Then you can start to feel sick and vomit.",
		treatment:
			"Avoid large meals before the trip, and rather eat little and often during the trip. During the journey, it is good to sit far forward and keep your eyes on the road, and to stop when necessary to get fresh air. It can make you feel better and relieve the nausea. When traveling by boat, it is good to sit in the middle of the boat where it sways the least, or stay outside.",
	},
	{
		optionValue: "Migraine",
		class: "Migraine",
		cause:
			"Headaches are common and are often caused by stress, tense muscles (tension headache), colds, anxiety or vision problems. Headaches can in some cases be migraines. Migraine is often experienced as a pulsating pain that comes in attacks and hurts a lot. Tension headaches are usually a mild to moderate pain. Tension headaches, unlike migraines, often get better when you move around, while migraines often get worse. Other symptoms of migraine are sensitivity to light and nausea.",
		treatment:
			" If the headache is mild, medicines containing the active substances acetylsalicylic acid, ibuprofen, naproxen and paracetamol often help.It can vary from person to person which medicine gives the best effect. If painkillers are not enough for relief, you may need to try drugs from the group of triptans. These drugs are used for diagnosed migraines.",
	},
	{
		optionValue: "Analgesic & Antipyretic",
		class: "Analgesic & Antipyretic",
		cause:
			" If you have a higher body temperature than normal, it is usually said that you have a fever. You most often get a fever in connection with a viral infection, for example a cold, but a fever can also be caused by bacteria. The normal body temperature in adults varies from person to person, but usually lies between 36 and 37.8 degrees. Temperatures of 38 degrees and above are considered fever.",
		treatment:
			"There are different types of antipyretic drugs such as e.g. paracetamol found in Alvedon and ibuprofen found in Ipren and Ibumetin. Rest and drink plenty of fluidsRemember to take it easy when you have a fever. Stay home from school or work and rest. This does not necessarily mean that you have to be bedridden, but listen to your body, and avoid exercising and exerting yourself hard. When you have a fever, it is common to sweat a lot, so it is good to drink plenty of fluids.",
	},
	{
		optionValue: "Analgesic",
		class: "Analgesic",
		cause:
			" Pain can be divided into different categories depending on what causes it. Examples of different types of pain arepain due to damaged tissue,nerve pain.pain where several causes contribute to the pain.pain without a clear cause. The pain is a built-in protective reflex. It warns that something is damaged or is being damaged in the body. It makes you react so that hopefully nothing serious happens. Pain can be described as an unpleasant physical or emotional experience.The pain receptors found everywhere in the body react to heat, cell damage, inflammation and mechanical pressure. When you have an inflammation, substances are also formed in the inflamed part of the body that makes you feel more pain.When the pain nerves are stimulated, pain signals are sent to the brain and directly to the body's muscles.The fact that the muscles receive quick information means that you can quickly pull away the hand that has been placed on a hot plate.In the brain, pain impulses first reach the brain's pain center and then the cerebral cortex. Only then do you become fully aware of the pain and where on the body it hurts.The sensitivity of the nervous system can increase over time. Most people get the right pain relief for sudden severe pain caused by an injury. In the case of long-term pain, it is especially important to pay attention to things that can increase the pain, such as anxiety, depression, stress, increased workload and sleep disturbance. The risk is also that you move less and less, which immediately increases the pain because the pain system adjusts and becomes more sensitive to pain impulses. The pain threshold becomes lower and your tolerance may decrease, and the pain may spread. Other parts of your nervous system can be affected when you have been in pain for a long time. Sometimes the pain can spread over time and lead to the entire pain system becoming hypersensitive.",
		treatment:
			" There are several different types of pain relievers containing different active substances. They work in different ways and it is individual what works best for different people. There are painkillers containing paracetamol. They are pain relievers and fever reducers but do not work as anti-inflammatory. Then there are the so-called NSAIDs which, in addition to being fever-reducing and pain-relieving, also have an anti-inflammatory effect. They contain e.g. aspirin, ibuprofen or naproxen.",
	},
	{
		optionValue: "Stuffy & runny nose",
		class: "Stuffy & runny nose",
		cause:
			" Allergy means that you are hypersensitive to a substance. The substance is called an allergen. It is a protein substance that does not affect most people, but causes some people to develop allergic symptoms.In those who have an increased risk of allergies, the body can begin to produce allergy antibodies. They are called IgE antibodies and can be formed against many different substances, for example against birch pollen allergen and cat allergen.The antibodies attach themselves to the surface of some cells in the body that contain histamine and other irritating substances. When the allergenic substance enters the body, it attaches to the antibodies and causes the cells to release the irritating substances. These substances cause the allergic reaction",
		treatment:
			"With allergies, you rarely have problems in just the eyes, but it is usually a combination of problems in the eyes and nose. Antihistamine tablets are the first-line recommendation for allergic problems from pollen, but if you do not want to take antihistamine tablets or if it is not enough for you to be problem-free, you can instead supplement with an antihistamine nasal spray, cortisone nasal spray and eye drops with antihistamine or cromoglicate. eye drops that relieve discomfort in the eyes are Lomudal and Livostin",
	},
	{
		optionValue: "Eye problems",
		class: "Eye problems",
		cause:
			" Allergy means that you are hypersensitive to a substance. The substance is called an allergen. It is a protein substance that does not affect most people, but causes some people to develop allergic symptoms.In those who have an increased risk of allergies, the body can begin to produce allergy antibodies. They are called IgE antibodies and can be formed against many different substances, for example against birch pollen allergen and cat allergen.The antibodies attach themselves to the surface of some cells in the body that contain histamine and other irritating substances. When the allergenic substance enters the body, it attaches to the antibodies and causes the cells to release the irritating substances. These substances cause the allergic reaction",
		treatment:
			"With allergies, you rarely have problems in just the eyes, but it is usually a combination of problems in the eyes and nose. Antihistamine tablets are the first-line recommendation for allergic problems from pollen, but if you do not want to take antihistamine tablets or if it is not enough for you to be problem-free, you can instead supplement with an antihistamine nasal spray, cortisone nasal spray and eye drops with antihistamine or cromoglicate. eye drops that relieve discomfort in the eyes are Lomudal and Livostin",
	},
	{
		optionValue: "General symptoms",
		class: "General symptoms",
		cause:
			" Allergy means that you are hypersensitive to a substance. The substance is called an allergen. It is a protein substance that does not affect most people, but causes some people to develop allergic symptoms.In those who have an increased risk of allergies, the body can begin to produce allergy antibodies. They are called IgE antibodies and can be formed against many different substances, for example against birch pollen allergen and cat allergen.The antibodies attach themselves to the surface of some cells in the body that contain histamine and other irritating substances. When the allergenic substance enters the body, it attaches to the antibodies and causes the cells to release the irritating substances. These substances cause the allergic reaction",
		treatment:
			" Antihistamine tablets are always the basic treatment for pollen allergy. They are mainly taken once a day, provide quick relief and should be taken every day during the allergy period, even on the days when you do not experience any problems. Pollen allergy is troublesome, but there is good help available. If the antihistamine tablet is not enough for you to be problem-free, tablets can be combined with nasal spray or eye drops.",
	},
];
