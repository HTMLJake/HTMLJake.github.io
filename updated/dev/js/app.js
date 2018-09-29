const contentful = require("contentful");

const SPACE_ID = "d9rh82o1q0d9";
const ACCESS_TOKEN = "3de3971f471c5fa950eb06630300560d8a88b510d9ac40d4f966c5c54c49c8a7";

const client = contentful.createClient({
	// This is the space ID. A space is like a project folder in Contentful terms
	space: SPACE_ID,
	// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
	accessToken: ACCESS_TOKEN
});

function GetProjectData() {
	return client.getEntries("Web")
		.then(function (entries) {
			app.cards = entries.items.map((entry) => {
				return entry.fields;
			});
			console.log(app.cards);
		});
}

GetProjectData();

$(window).scroll(() => {
	if (window.scrollY > 50) {
		$(".navbar").addClass("navbar-dark bg-dark").removeClass("navbar-light bg-light");
		$(".bar").addClass("bg-light").removeClass("bg-dark");
	} else {
		$(".navbar").removeClass("navbar-dark bg-dark").addClass("navbar-light bg-light");
		$(".bar").addClass("bg-dark").removeClass("bg-light");
	}
});

let app = new Vue({
	el: "#cards",
	data: {
		state: 0,
		message: "Hello World",
		cards: [],
	},
	methods: {
		ChangeState: function (i) {
			this.state = i;
		}
	}
});



/* (function fetchJson () {
	fetch("../dev/js/data.json").then((r) => {
		return r.json();
	}).then(j => {
		app.cards = j;
	});
}()); */