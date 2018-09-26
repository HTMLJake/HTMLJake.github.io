
$(window).scroll(() => {
	if (window.scrollY > 50) {
		$(".navbar").addClass("navbar-dark bg-dark").removeClass("navbar-light bg-light");
		$(".bar").addClass("bg-light").removeClass("bg-dark");
	} else {
		$(".navbar").removeClass("navbar-dark bg-dark").addClass("navbar-light bg-light");
		$(".bar").addClass("bg-dark").removeClass("bg-light");
	}
});
