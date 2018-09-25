$(window).scroll(() => {
	if (window.scrollY > 25) {
		$(".navbar").addClass("navbar-dark").addClass("bg-dark").removeClass("navbar-light");
	} else {
		$(".navbar").removeClass("navbar-dark").removeClass("bg-dark").addClass("navbar-light");
	}
});
