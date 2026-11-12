export type Lang = "hu" | "en";

export type Strings = {
	description: string;
	otherLang: { href: string; label: string };
	invitation: string;
	dearAll: string;
	announce: string;
	date: string;
	eternal: string;
	ceremony: { title: string; place: string };
	dinner: { title: string };
	come: string;
	gift: [string, string];
};

export const content: Record<Lang, Strings> = {
	hu: {
		description: "Adri és Peti esküvői meghívója",
		otherLang: { href: "/en/", label: "ENGLISH" },
		invitation: "Meghívó",
		dearAll: "Kedves Családunk és Barátaink!",
		announce:
			"Örömmel tudatjuk veletek, hogy úgy döntöttünk, szerelmünket házassággal pecsételjük meg. Szeretettel értesítünk, hogy",
		date: "2022. október 1-én",
		eternal:
			"örök hűséget fogadunk egymásnak. A szertartást és vacsorát követően megkezdjük a hajnalig tartó közös ünneplést.",
		ceremony: { title: "Esküvői szertartás", place: "Páduai Szent Antal templom" },
		dinner: { title: "Lakodalom" },
		come: "Szeretettel várunk!",
		gift: ["Ajándékon ne törd fejed,", "Egy borítékban elrejtheted."],
	},
	en: {
		description: "Adri and Peti's wedding invitation",
		otherLang: { href: "/hu/", label: "MAGYAR" },
		invitation: "Wedding invitation",
		dearAll: "Dear Friends!",
		announce: "Together with our families, you are cordinally invited to our wedding on",
		date: "1 October 2022",
		eternal:
			"to witness our vows to each other. After the ceremony and the dinner, we will start the celebration, until the sun rises",
		ceremony: { title: "Wedding ceremony", place: "Páduai Szent Antal church" },
		dinner: { title: "Dinner" },
		come: "See you soon!",
		gift: ["If a gift is on your mind,", "A contribution would kind."],
	},
};
