let sidebarDelay = 200;


$(".nav-item a").click((e) => {
	$(".active").toggleClass("active");
	e.currentTarget.classList.toggle("active");
});

window.addEventListener("scroll", () => {
	if (window.scrollY > 100) {
		$("nav").addClass("background");
	} else {
		$("nav").removeClass("background");
	}
});

/* Smooth Srolling Code from Julia Hide on Codepen */

$(".nav-link").click(function (e) {
	//e.preventDefault();

	if (window.innerWidth > 825) {
		sidebarDelay = 0;
	} else {
		closeSidebar();
		sidebarDelay = 200;
	}

	setTimeout(() => {
		var target = $($(this).attr("href"));
		if (target.length) {
			var scrollTo = target.offset().top - 70;
			$("html, body").animate({
				scrollTop: scrollTo + "px"
			}, 1250);
		}
	}, sidebarDelay);
});

/*eslint no-unused-vars: "off"*/

function toggleSidebar(hamburger) {
	const sidebarElem = window.document.getElementById("sidebar");
	sidebarElem.classList.toggle("open");
	hamburger.classList.toggle("open");
}

function closeSidebar() {
	const sidebarElem = window.document.getElementById("sidebar");
	const hamburger = window.document.getElementById("hamburger");
	sidebarElem.classList.remove("open");
	hamburger.classList.remove("open");
}

function nerfPLS(itemToNerf) {
	window.alert("I would like to formally request a nerf to " + itemToNerf + ". Thank You.");
}