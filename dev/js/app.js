const contentful = require("contentful");
const Vue = require("../js/vue.min.js");
const $ = require("jquery");

const contentTypes = {
	WEB_PROJECT: "webProjects",
	IMAGES: "images"
};

const projectTypes = {
	GRAPHIC_DESIGN: "Graphic Design",
	PHOTOGRAPHY: "Photography",
	WEB_DESIGN: "Web Design"
};

const SPACE_ID = "d9rh82o1q0d9";
const ACCESS_TOKEN = "3de3971f471c5fa950eb06630300560d8a88b510d9ac40d4f966c5c54c49c8a7";

const client = contentful.createClient({
	// This is the space ID. A space is like a project folder in Contentful terms
	space: SPACE_ID,
	// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
	accessToken: ACCESS_TOKEN
});

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
		web: [],
		graphic: [],
		photo: []
	},
	methods: {
		ChangeState: function (i) {
			this.state = i;
		},
		GetImageProjects: function (projectType) {
			return client.getEntries()
				.then(function (entries) {
					return entries.items
						.filter((entry) => {
							return entry.sys.contentType.sys.id === contentTypes.IMAGES;
						})
						.filter(img => {
							return img.fields.projectType === projectType;
						})
						.map(e => {
							return e.fields;
						});
				});
		},
		GetWebProjects: function () {
			return client.getEntries()
				.then(function (entries) {
					return entries.items.filter((entry) => {
						return entry.sys.contentType.sys.id === contentTypes.WEB_PROJECT;
					}).map(e => {
						return e.fields;
					});
				});
		}

	}
});

let testAwait;
async function getWeb() {
	let testAwait = await client.getEntries()
		.then(function (entries) {
			return entries.items.filter((entry) => {
				return entry.sys.contentType.sys.id === contentTypes.WEB_PROJECT;
			}).map(e => {
				return e.fields;
			});
		});
}
getWeb();


app.GetWebProjects().then(r => {
	app.web = r;
});

app.GetImageProjects(projectTypes.PHOTOGRAPHY).then(r => {
	app.photo = r;
});

app.GetImageProjects(projectTypes.GRAPHIC_DESIGN).then(r => {
	app.graphic = r;
});