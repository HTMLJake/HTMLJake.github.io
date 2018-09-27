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
		cards: [
			{
				title: "Just a title",
				img: "../dev/img/voxel-jacob.png",
				text: "I like to make stuff, learn things, and speak vague. Some of the hats that I wear are Frontend Developer, Game Developer, Graphic Designer, Musician, and Photographer."
			},
		],
	},
	methods: {
		ChangeState: function (i) {
			this.state = i;
		}
	}
});



(function fetchJson () {
	fetch("../dev/js/data.json").then((r) => {
		return r.json();
	}).then(j => {
		app.cards = j;
	});
}());