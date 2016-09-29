// Experiences
awf.app.registerExperience("homeExperience", {
	label: "Home",
	icon: "awficon-home-active",
	cogs: ["buttonCog", "formCog", "listCog"],
	layout: {
		"type": "grid",
		"default_order": {
			"grid": ["buttonCog", "listCog", "formCog"]
		}
	}
});

awf.app.registerExperience("aboutExperience", {
	label: "About",
	icon: "awficon-artoo",
	cogs: ["aboutCog"],
	layout: {
		"type": "page",
		"cog": "aboutCog"
	}
});
